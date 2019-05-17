import React from "react";

import { Typography } from "@material-ui/core";

import predict from "./model";

function Attack(props) {
  let nums = [];
  let cats = [];
  props.features.numerical.titles.map(
    title => (nums = nums.concat(title.placeholder))
  );
  props.features.categorical.map(cat => (cats = cats.concat(cat.placeholder)));
  const features = [nums[0]].concat(cats).concat(nums.slice(1));
  console.log(features);

  predict(features).then(prediction => console.log(prediction));
  return (
    <div>
      <Typography variant="h3">{1 ? "Malicious" : "Normal"}</Typography>
    </div>
  );
}

export default Attack;
