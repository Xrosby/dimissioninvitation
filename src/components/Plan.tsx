import React from "react";
import { Component } from "react"; // literally anything, don't even have to use it

export default function Plan() {
  const times = [
    { time: "12:00", event: "Ankomst på Ryttergade 10" },
    { time: "12:30", event: "Velkomstdrink" },
    { time: "13:00", event: "Vi spiser pizza og får en øl" },
    { time: "14:00 - Slut", event: "Hygge " },
  ];

  return (
    <div style={{ textAlign: "center", padding: "2%", paddingTop: "2%" , }}>
      <h1>Plan</h1>
      <div
        style={{
          padding: "10px",
          minWidth: "50%",
          marginTop: "3%",
        }}
      >
        <ul style={{ textAlign: "start" }}>
          {times.map((t) => (
            <li>
              <span style={{ fontWeight: "bold" }}>{t.time}</span> : {t.event}
            </li>
          ))}
        </ul>
      </div>
      <p
        style={{
          padding: "10px",
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        Siden vi ikke ved noget om hvor og hvornår online dimission kommer til
        at foregå, kan det være vi planlægger en opsætning så vi kan se
        dimission i haven.
      </p>
    </div>
  );
}
