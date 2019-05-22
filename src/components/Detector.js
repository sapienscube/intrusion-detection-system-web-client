import React from "react";

import { gql } from "apollo-boost";
import graphql from "react-apollo";

import { getFeaturesArray } from "./Utils";

function Detector(props) {
  const features = getFeaturesArray(props.features);
  return <div>{features[1]}</div>;
}

export default Detector;
