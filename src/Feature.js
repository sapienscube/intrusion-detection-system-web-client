import React from "react";
import { Grid } from "@material-ui/core";
import SimpleSelect from "./material-ui/SimpleSelect";
import OutlinedTextFields from "./material-ui/OutlinedTextFields";

const features = {
  categorical: [
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
      ]
    },
    {
      title: "tcp",
      values: ["tcp", "udp", "icmp"]
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
      ]
    }
  ],
  numerical: {
    titles: [
      "255",
      "45076",
      "0.1",
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "1",
      "0.6",
      "0.7",
      "0.8",
      "0.9",
      "0.10",
      "0.11",
      "0.12",
      "0.13",
      "0.14",
      "0.15",
      "1.1",
      "1.2",
      "0.00",
      "0.00.1",
      "0.00.2",
      "0.00.3",
      "1.00",
      "0.00.4",
      "0.00.5",
      "0.16",
      "0.17",
      "0.00.6",
      "0.00.7",
      "0.00.8",
      "0.00.9",
      "0.00.10",
      "0.00.11",
      "0.00.12",
      "0.00.13"
    ],
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "..."]
  }
};

function Feature() {
  return (
    <Grid container justify="center">
      {features.categorical.map(feature => (
        <SimpleSelect title={feature.title} values={feature.values} />
      ))}
      {features.numerical.titles.map(title => (
        <OutlinedTextFields title={title} />
      ))}
    </Grid>
  );
}

// title={title} values={features.numerical.values}

export default Feature;
