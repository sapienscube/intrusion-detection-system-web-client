import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const theme = createMuiTheme({});

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
};

class SimpleSelect extends React.Component {
  state = {
    title: this.props.placeholder,
    name: "hai",
    labelWidth: 0,
    inputLabelRef: null
  };

  handleChange = event => {
    this.setState({
      title: event.target.value
    });

    this.props.onCatChange({
      name: this.props.title,
      value: event.target.value
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <form className={classes.root} autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={this.state.inputLabelRef}
              htmlFor="outlined-age-simple"
            >
              {this.props.title}
            </InputLabel>
            <Select
              value={this.props.placeholder}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="title"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.values.map((val, ind) => (
                <MenuItem value={val}>{val}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(SimpleSelect);
