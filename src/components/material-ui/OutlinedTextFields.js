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

class OutlinedTextFields extends React.Component {
  handleChange = event => {
    this.props.onNumChange({
      name: this.props.title,
      value: event.target.value
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TextField
          id={this.props.title}
          label={this.props.title}
          value={this.props.placeholder}
          onChange={this.handleChange}
          type="string"
          className={this.props.classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(OutlinedTextFields);
