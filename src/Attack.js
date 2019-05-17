import React from "react";

import { Typography } from "@material-ui/core";

function Attack(props) {
  let nums = [];
  let cats = [];
  props.features.numerical.titles.map(
    title => (nums = nums.concat(title.placeholder))
  );
  props.features.categorical.map(cat => (cats = cats.concat(cat.placeholder)));
  const features = [nums[0]].concat(cats).concat(nums.slice(1));
  console.log(features);
  var prediction = 1;
  return (
    <div>
      <Typography variant="h3">
        {prediction ? "Malicious" : "Normal"}
      </Typography>
    </div>
  );
}

export default Attack;
