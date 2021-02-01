const express = require("express");
const hdb = require("hdb");
const xsenv = require("@sap/xsenv");
const passport = require("passport");
const { JWTStrategy } = require("@sap/xssec");

const xsenvObj = xsenv.getServices({ hana: { tag: "database" } });
const port = process.env.port || 8080;
const app = express();


const hdiConfig = {
  host: xsenvObj.hana.host,
  port: xsenvObj.hana.port,
  user: xsenvObj.hana.hdi_user,
  password: xsenvObj.hana.hdi_password,
  useTLS: true
};

const client = hdb.createClient(hdiConfig);

client.on("error", function(err) {
  console.error("Network connection error", err);
});

app.get("/Vendor",  getDataStudent);
app.get("/Vendor/:id",  getDataStudentWithID);


function getDataStudent(req, res) {
  console.log('select * from "' + xsenvObj.hana.schema + '"."VENDOR"');

  client.connect(function(err) {
    if (err) {
      console.error("Connect error", err);
      res.status(500).end("Internal Server Error in DB Connection");
    }
    client.exec(
      'select * from "' + xsenvObj.hana.schema + '"."VENDOR"',
      function(err, rows) {
        client.end();
        if (err) {
          console.error("Execute error:", err);
          res.status(500).end("Internal Server Error in Getting Data");
        }
        console.log("Results:", rows);
        res.send(rows);
      }
    );
  });
}

function getDataStudentWithID(req, res) {
  //console.log(req.params.id);

  if (typeof req.params.id !== "undefined" && req.params.id) {
    console.log(
      'select * from "' +
        xsenvObj.hana.schema +
        '"."VENDOR" where id=' +
        req.params.id
    );

    client.connect(function(err) {
      if (err) {
        console.error("Connect error", err);
        res.status(500).end("Internal Server Error in DB Connection");
      }
      client.exec(
        'select * from "' +
          xsenvObj.hana.schema +
          '"."VENDOR" where id = ' +
          req.params.id,
        function(err, rows) {
          client.end();
          if (err) {
            console.error("Execute error:", err);
            res.status(500).end("Internal Server Error in Getting Data");
          }
          console.log("Results:", rows);
          res.send(rows);
        }
      );
    });
  } else {
    res.status(500).end("Internal Server Error - No ID Passed");
  }
}

app.listen(port);