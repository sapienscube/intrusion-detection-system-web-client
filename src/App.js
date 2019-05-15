import React from "react";
import { Grid, Button } from "@material-ui/core";
import Feature from "./Feature";
import Attack from "./Attack";
import CSVRecord from "./CSVRecord";

class App extends React.Component {
  state = {
    features: []
  };

  handleCSVChange = features => {
    this.setState({ features: features });
  };

  handleFeatureChange(feature) {}

  render() {
    return (
      <div className="App">
        <Grid container justify="center" spacing={36}>
          <CSVRecord handleCSVChange={this.handleCSVChange} />
          Or
          <Feature features={this.state.features} />
          <div style={{ padding: "70px" }}>
            <Attack value={1} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
