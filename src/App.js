import React from "react";
import { Grid, Button } from "@material-ui/core";
import Feature from "./Feature";
import Attack from "./Attack";
import CSVRecord from "./CSVRecord";

class App extends React.Component {
  state = {
    features: [
      {
        title: "",
        value: ""
      }
    ]
  };

  handleCSVChange = features => {
    console.log(features);
  };

  handleFeatureChange = feature => {
    console.log(feature);
  };

  render() {
    return (
      <div className="App">
        <Grid container justify="center" spacing={36}>
          <CSVRecord
            features={this.state.features}
            onCSVChange={this.handleCSVChange}
          />
          Or
          <Feature
            features={this.state.features}
            onFeatureChange={this.handleFeatureChange}
          />
          <div style={{ padding: "70px" }}>
            <Attack value={1} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
