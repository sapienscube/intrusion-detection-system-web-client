import React from "react";
import { Grid } from "@material-ui/core";
import Features from "./components/Features";
import Detector from "./components/Detector";
import Packet from "./components/Packet";
import features from "./data/Features";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  // uri: "http://localhost:5000/intrusion-detection-system"
  uri: "http://sapienscube.pythonanywhere.com/intrusion-detection-system"
});

// 'attack_type'

class App extends React.Component {
  state = {
    features: features
  };

  handleCSVChange = features => {
    // Get the categories and numerics from features
    const cats = features.slice(1, 4);
    const nums = features.slice(0, 1).concat(features.slice(4));

    let this_cats = [...this.state.features.categorical];
    let this_nums = [...this.state.features.numerical.titles];

    // Set states
    this_nums.map((title, i) => {
      title.placeholder = nums[i];
      return title;
    });
    this_cats.map((cat, i) => {
      cat.placeholder = cats[i];
      return cat;
    });
    this.setState(this_cats);
    this.setState(this_nums);
  };

  handleFeatureChange = feature => {
    let this_nums = [...this.state.features.numerical.titles];
    let this_cats = [...this.state.features.categorical];
    this_nums.map(title => {
      if (title.string === feature.name) {
        title.placeholder = feature.value;
      }
      return title;
    });
    this_cats.map(cat => {
      if (cat.title === feature.name) {
        cat.placeholder = feature.value;
      }
      return cat;
    });
    this.setState(this_nums);
    this.setState(this_cats);
  };

  render() {
    const { features } = this.state;
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Grid container justify="center" spacing={36}>
            <Packet features={features} onCSVChange={this.handleCSVChange} />
            Or
            <Features
              features={features}
              onFeatureChange={this.handleFeatureChange}
            />
            <div style={{ padding: "30px" }}>
              <Detector features={features} />
            </div>
          </Grid>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
