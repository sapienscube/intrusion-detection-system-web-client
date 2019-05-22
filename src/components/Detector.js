import React from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { getFeaturesArray } from "./Utils";

function Detector(props) {
  const features = getFeaturesArray(props.features);
  return (
    <div>
      <Query
        query={gql`
          {
            predict(
              packets: [
                [
                  "0"
                  "tcp"
                  "http"
                  "SF"
                  "184"
                  "124"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "1"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "0"
                  "1"
                  "1"
                  "0.00"
                  "0.00"
                  "0.00"
                  "0.00"
                  "1.00"
                  "0.00"
                  "0.00"
                  "10"
                  "10"
                  "1.00"
                  "0.00"
                  "0.10"
                  "0.00"
                  "0.00"
                  "0.00"
                  "0.00"
                  "0.00"
                ]
              ]
            )
          }
        `}
      >
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
