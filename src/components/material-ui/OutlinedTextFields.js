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
    width: "150px"
  }
};

function OutlinedTextFields(props) {
  const { classes, title, placeholder } = props;
  const [values, setValues] = React.useState({
    name: "nums",
    title: placeholder,
    multiline: "Controlled",
    currency: "EUR"
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    props.onNumChange({ name: title, value: event.target.value });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        id={title}
        label={title}
        value={placeholder}
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
