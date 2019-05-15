import React from "react";
import {
  TextField,
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";

const theme = createMuiTheme({});

const styles = {
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100px"
  }
};

function OutlinedTextFields(props) {
  const { classes, title } = props;
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    title: "",
    multiline: "Controlled",
    currency: "EUR"
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    props.onNumChange({ value: event.target.value, name: name });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        id="outlined-number"
        label={title}
        value={values.title}
        onChange={handleChange("title")}
        type="string"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        margin="normal"
        variant="outlined"
      />
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(OutlinedTextFields);
