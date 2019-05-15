import React from "react";
import ReactDOM from "react-dom";
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

function SimpleSelect(props) {
  const { classes, title, values, defaults } = props;
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
    labelWidth: 0
  });
  const inputLabelRef = React.useRef(null);

  React.useEffect(() => {
    setState({
      ...state,
      labelWidth: ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth
    });
  }, []);

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  return (
    <MuiThemeProvider theme={theme}>
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabelRef} htmlFor="outlined-age-simple">
            {title}
          </InputLabel>
          <Select
            value={state.age}
            onChange={handleChange}
            input={
              <OutlinedInput
                labelWidth={state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {values.map(value => (
              <MenuItem value={20}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(SimpleSelect);
