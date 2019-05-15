import React from "react";
import { Grid, Button } from "@material-ui/core";
import Feature from "./Feature";
import Attack from "./Attack";

function App() {
  return (
    <div className="App">
      <Grid container direction="column" alignItems="center" spacing={36}>
        <Feature />
        <div style={{ padding: "70px" }}>
          <Attack value={1} />
        </div>
      </Grid>
    </div>
  );
}

export default App;
