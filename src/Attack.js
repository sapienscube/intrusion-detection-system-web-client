import React from "react";

import { Typography } from "@material-ui/core";

function Attack(props) {
  const { value } = props;
  return (
    <div>
      <Typography variant="h3">{value ? "Malicious" : "Normal"}</Typography>
    </div>
  );
}

export default Attack;
