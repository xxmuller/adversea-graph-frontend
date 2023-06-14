import "./DatabaseGraph.css";
import NeoVis from "neovis.js";
import React, { useEffect } from "react";

function draw() {
  const config = {
    containerId: "viz",
    neo4j: {
      serverUrl: "bolt://localhost:7687",
      serverUser: "neo4j",
      serverPassword: "password",
    },
    labels: {
      Person: {
        label: "name",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
          static: {
            value: 1.0
          },
        }
      },
      Article: {
        // label: "title",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
          static: {
            value: 1.0
          },
          function: { // everything here will map function thats gets the neo4j node properties
            title: NeoVis.objectToTitleHtml, // alternativly
          },
        }
      },
      Organization: {
        label: "name",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
          function: { // everything here will map function thats gets the neo4j node properties
            title: NeoVis.objectToTitleHtml, // alternativly
          },
        }
      }
    },
    relationships: {
      // CONTAINS: {
      //   [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
      //     function: { // everything here will map function thats gets the neo4j node properties
      //       relationship: NeoVis.objectToTitleHtml, // alternativly
      //     },
      //   }
      // }
    },
    visConfig: {
      edges: {
        arrows: {
          to: { enabled: true },
          // from: {enabled: true}
        },
      },
    },
    initialCypher: "MATCH res=(p:Person {name: 'donald tusk'})--(a:Article) OPTIONAL MATCH res2=(a)--(relatedP:Person) OPTIONAL MATCH res3=(a)--(org:Organization) OPTIONAL MATCH res4=(org)--(associate:Person) RETURN *",
    consoleDebug: true
  };

  const neoViz = new NeoVis(config);
  neoViz.render();
}

function DatabaseGraph() {
  useEffect(() => {
    draw();
  });
  return (
    <div className="App">
      <div id="viz" />
    </div>
  );
}

export default DatabaseGraph;
