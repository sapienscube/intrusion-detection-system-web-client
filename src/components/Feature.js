import React from "react";
import { Grid } from "@material-ui/core";
import SimpleSelect from "./material-ui/SimpleSelect";
import OutlinedTextFields from "./material-ui/OutlinedTextFields";

function Feature(props) {
  const { features } = props;
  function handleCatChange(cat) {
    props.onFeatureChange(cat);
  }
  function handleNumChange(num) {
    props.onFeatureChange(num);
  }
  return (
    <Grid container justify="center">
      <OutlinedTextFields
        title={features.numerical.titles[0].string}
        placeholder={features.numerical.titles[0].placeholder}
        onNumChange={handleNumChange}
      />
      {features.categorical.map(feature => (
        <SimpleSelect
          title={feature.title}
          values={feature.values}
          placeholder={feature.placeholder}
          onCatChange={handleCatChange}
        />
      ))}
      {features.numerical.titles.slice(1).map(title => (
        <OutlinedTextFields
          title={title.string}
          placeholder={title.placeholder}
          onNumChange={handleNumChange}
        />
      ))}
    </Grid>
  );
}

// title={title} values={features.numerical.values}

export default Feature;
