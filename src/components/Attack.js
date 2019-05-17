import React from "react";

import { Typography } from "@material-ui/core";

import predict from "../models/model";

function getArray(features) {
  let nums = [];
  let cats = [];
  features.numerical.titles.map(
    title => (nums = nums.concat(title.placeholder))
  );
  features.categorical.map(cat => (cats = cats.concat(cat.placeholder)));
  return [nums[0]].concat(cats).concat(nums.slice(1));
}

function Attack(props) {
  const features = getArray(props.features);
  console.log(features);
  const prediction = predict(features);
  console.log("prediction: ", prediction);
  return (
    <div>
      <Typography variant="h3">
        {prediction == "1" ? "Malicious" : "Normal"}
      </Typography>
    </div>
  );
}

export default Attack;
