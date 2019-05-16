import React from "react";
import { Grid, Button } from "@material-ui/core";
import Feature from "./Feature";
import Attack from "./Attack";
import CSVRecord from "./CSVRecord";

class App extends React.Component {
  state = {
    features: {
      categorical: [
        {
          title: "tcp",
          values: ["tcp", "udp", "icmp"],
          placeholder: "tcp"
        },
        {
          title: "http",
          values: [
            "finger",
            "discard",
            "systat",
            "aol",
            "supdup",
            "printer",
            "nntp",
            "kshell",
            "domain",
            "netbios_ns",
            "netstat",
            "imap4",
            "netbios_dgm",
            "whois",
            "nnsp",
            "http_443",
            "netbios_ssn",
            "pm_dump",
            "eco_i",
            "red_i",
            "ecr_i",
            "vmnet",
            "tim_i",
            "smtp",
            "urh_i",
            "tftp_u",
            "ctf",
            "iso_tsap",
            "hostnames",
            "link",
            "time",
            "telnet",
            "pop_3",
            "urp_i",
            "csnet_ns",
            "rje",
            "bgp",
            "gopher",
            "uucp",
            "other",
            "echo",
            "klogin",
            "http_2784",
            "IRC",
            "shell",
            "http",
            "domain_u",
            "mtp",
            "X11",
            "login",
            "ssh",
            "ntp_u",
            "remote_job",
            "private",
            "daytime",
            "pop_2",
            "uucp_path",
            "harvest",
            "exec",
            "auth",
            "ftp_data",
            "ftp",
            "efs",
            "courier",
            "sunrpc",
            "Z39_50",
            "name",
            "http_8001",
            "sql_net",
            "ldap"
          ],
          placeholder: "discard"
        },
        {
          title: "SF",
          values: [
            "S3",
            "RSTR",
            "RSTOS0",
            "S0",
            "S1",
            "RSTO",
            "OTH",
            "S2",
            "SH",
            "REJ",
            "SF"
          ],
          placeholder: "S3"
        }
      ],
      numerical: {
        titles: [
          {
            string: "0",
            placeholder: "0"
          },
          {
            string: "255",
            placeholder: "0"
          },
          {
            string: "45076",
            placeholder: "0"
          },
          {
            string: "0.1",
            placeholder: "0"
          },
          {
            string: "0.2",
            placeholder: "0"
          },
          {
            string: "0.3",
            placeholder: "0"
          },
          {
            string: "0.4",
            placeholder: "0"
          },
          {
            string: "0.5",
            placeholder: "0"
          },
          {
            string: "1",
            placeholder: "0"
          },
          {
            string: "0.6",
            placeholder: "0"
          },
          {
            string: "0.7",
            placeholder: "0"
          },
          {
            string: "0.8",
            placeholder: "0"
          },
          {
            string: "0.9",
            placeholder: "0"
          },
          {
            string: "0.10",
            placeholder: "0"
          },
          {
            string: "0.11",
            placeholder: "0"
          },

          {
            string: "0.12",
            placeholder: "0"
          },
          {
            string: "0.13",
            placeholder: "0"
          },
          {
            string: "0.14",
            placeholder: "0"
          },
          {
            string: "0.15",
            placeholder: "0"
          },
          {
            string: "1.1",
            placeholder: "0"
          },
          {
            string: "1.2",
            placeholder: "0"
          },
          {
            string: "0.00",
            placeholder: "0"
          },
          {
            string: "0.00.1",
            placeholder: "0"
          },
          {
            string: "0.00.2",
            placeholder: "0"
          },
          {
            string: "0.00.3",
            placeholder: "0"
          },
          {
            string: "1.00",
            placeholder: "0"
          },
          {
            string: "0.00.4",
            placeholder: "0"
          },
          {
            string: "0.00.5",
            placeholder: "0"
          },
          {
            string: "0.16",
            placeholder: "0"
          },
          {
            string: "0.17",
            placeholder: "0"
          },
          {
            string: "0.00.6",
            placeholder: "0"
          },
          {
            string: "0.00.7",
            placeholder: "0"
          },
          {
            string: "0.00.8",
            placeholder: "0"
          },
          {
            string: "0.00.9",
            placeholder: "0"
          },
          {
            string: "0.00.10",
            placeholder: "0"
          },
          {
            string: "0.00.11",
            placeholder: "0"
          },
          {
            string: "0.00.12",
            placeholder: "0"
          },
          {
            string: "0.00.13",
            placeholder: "0"
          }
        ],
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "..."]
      }
    }
  };

  handleCSVChange = features => {
    // Get the categories and numerics from features
    const cats = features.slice(1, 4);
    const nums = features.slice(0, 1).concat(features.slice(4));
    console.log(features);
    console.log("cats", cats);
    console.log("nums", nums);
    // Set state.categorical[i].placeholder = cats[i]
    // Set state.numerical.titles[i].placeholder = nums[i]
    for (var i = 0; i < cats.length; i++) {
      this.state.features.categorical[i].placeholder = cats[i];
      console.log(
        "this.state.features.categorical.placeholder: ",
        this.state.features.categorical[i].placeholder
      );
    }
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
