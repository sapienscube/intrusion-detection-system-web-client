import React from "react";
import { Grid, Button } from "@material-ui/core";
import Feature from "./Feature";
import Attack from "./Attack";
import CSVRecord from "./CSVRecord";

function App() {
  return (
    <div className="App">
      <Grid container direction="column" alignItems="center" spacing={36}>
        <CSVRecord />
        <Feature />
        <div style={{ padding: "70px" }}>
          <Attack value={1} />
        </div>
      </Grid>
    </div>
  );
}

export default App;
