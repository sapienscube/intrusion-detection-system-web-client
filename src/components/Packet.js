import React from "react";
import { TextField, withStyles, Grid } from "@material-ui/core";

import { getFeaturesArray } from "./Utils";

const styles = {
  textField: {
    width: "100%"
  }
};

// const placeholder =
//   "0,tcp,http,SF,184,124,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0.00,0.00,0.00,0.00,1.00,0.00,0.00,10,10,1.00,0.00,0.10,0.00,0.00,0.00,0.00,0.00";

class Packet extends React.Component {
  state = {};
  handleChange = event => {
    const features = event.target.value.split(",");
    this.props.onCSVChange(features);
  };
  render() {
    const classes = this.props.classes;
    const features = getFeaturesArray(this.props.features);
    return (
      <Grid container justify="center">
        <Grid item sm={11}>
          <TextField
            id="outlined-with-placeholder"
            label="Network Trafic Packet"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={features}
            onChange={this.handleChange}
            multiline="true"
            rows={2}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Packet);
