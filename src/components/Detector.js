import React from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { getFeaturesArray } from "./Utils";

const PREDICT_ATTACK_TYPE = gql`
  query Query($packets: List[List[String]]) {
    predict(packets: $packets)
  }
`;

function Detector(props) {
  const features = [getFeaturesArray(props.features)];
  return (
    <div>
      <Query query={PREDICT_ATTACK_TYPE} variables={{ features }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading..</div>;
          if (error) return <div>Error:</div>;
          console.log(data);
          return <div>{data.predict}</div>;
        }}
      </Query>
    </div>
  );
}

export default Detector;
