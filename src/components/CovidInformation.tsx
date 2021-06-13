import React from "react";
import { Component } from "react"; // literally anything, don't even have to use it
import CovidPoint from "./CovidPoint";
import vacc from "../resources/vacc.png";
import test from "../resources/testing.png";

export default function CovidInformation() {
  interface Point {
    message: string;
  }

  const covidPoints: Array<Point> = [
    {
      message: " Der vil være rigeligt håndsprit tilgængeligt for alle",
    },
    { message: "Vaccine" },
    {
      message: "PCR eller Antigen Test",
    },
  ];

  let sanitizerSpanColor = "#b9ccc1";
  let vaccTestSpanColor = "#b9ccc1";

  return (
    <div
      className="party-card"
      style={{
        textAlign: "center",
        padding: "0px",
        paddingTop: "2%",
      }}
    >
      <h1>Corona information</h1>
      <div>
        <CovidPoint
          color={sanitizerSpanColor}
          message={covidPoints[0].message}
        />
        <div
          className="covid-card"
          style={{
            backgroundColor: vaccTestSpanColor,
            color: "black",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          <p>Alle bedes have enten</p>
          <div style={{ padding: "1px", margin: "0px", fontSize: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              <img style={{ height: "2rem", marginRight: "10px" }} src={vacc} />
              Vaccine
            </span>{" "}
            <span>eller</span>{" "}
            <span style={{ fontWeight: "bold" }}>
              PCR/Antigen Test
              <img style={{ height: "2.9rem", marginLeft: "10px" }} src={test} />
            </span>
          </div>
          <div></div>
        </div>
        <div
          style={{
            paddingTop: "2%",
            height: "100%",
          }}
        >
          Og så vil vi gøre alle opmærksomme på{" "}
          <p>
            <a
              className="covid-text"
              style={{ color: "white" }}
              href="https://www.sst.dk/da/Udgivelser/2020/Private-fejringer-og-arrangementer"
            >
              Sundhedsstyrelsens anbefalinger for fest og forsamlinger
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
