import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { getFeaturesArray } from "./Utils";

const PREDICT_ATTACK_TYPE = gql`
  query PREDICT($packets: [[String]]) {
    predict(packets: $packets)
  }
`;

function Detector(props) {
  const features = [getFeaturesArray(props.features)];
  return (
    <div>
      <Query query={PREDICT_ATTACK_TYPE} variables={{ packets: features }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress />;
          if (error)
            return (
              <Typography variant="h3" color="error">
                Error
              </Typography>
            );
          return <Typography variant="h3">{data.predict}</Typography>;
        }}
      </Query>
    </div>
  );
}

export default Detector;
