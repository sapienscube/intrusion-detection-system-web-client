import React from "react";
import { TextField, withStyles, Grid } from "@material-ui/core";

const styles = {
  textField: {
    width: "100%"
  }
};

const placeholder =
  "0, tcp, http, SF, 184, 124, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0.00, 0.00, 0.00, 0.00, 1.00, 0.00, 0.00, 10, 10, 1.00, 0.00, 0.10, 0.00, 0.00, 0.00, 0.00, 0.00";

function CSVRecord(props) {
  const { classes } = props;
  return (
    <Grid container justify="center">
      <Grid item sm={11}>
        <TextField
          id="outlined-with-placeholder"
          label="CSV Record"
          placeholder={placeholder}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CSVRecord);
