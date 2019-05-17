import React from "react";

import { Typography } from "@material-ui/core";

function Attack(props) {
  const { features } = props;
  console.log("in Attack:", features);
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
