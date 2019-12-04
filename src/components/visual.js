import React, { Component } from "react";
import tableau from "tableau-api";
import styles from "../styles/home.css";

class Visual extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const ButterFlyofbirthdeathURL =
      "https://public.tableau.com/views/ButterFlyofbirthdeath/ButterFlychartofBirthAndDeathRate?:display_count=y&publish=yes&:origin=viz_share_link";
    const butterFlyChart = document.getElementById("butterFlyViz");
    //this.vizContainer;
    const butterFlyChartOptions = {
      hideTabs: true,
      width: "1000px",
      height: "700px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let butterFly = new window.tableau.Viz(
      butterFlyChart,
      ButterFlyofbirthdeathURL,
      butterFlyChartOptions
    );

    const url =
      "https://public.tableau.com/views/BirthDeath/Sheet8?:display_count=y&publish=yes&:origin=viz_share_link";
    const populationByIncomeGroup = document.getElementById("firstViz");
    //this.vizContainer;
    const options = {
      hideTabs: true,
      width: "47vw",
      height: "700px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz = new window.tableau.Viz(populationByIncomeGroup, url, options);

    const populationByYearUrl =
      "https://public.tableau.com/shared/YG9BWBTQW?:display_count=y&:origin=viz_share_link";
    const populationByYearvizContainer = document.getElementById("secondViz");
    const populationByYearOptions = {
      hideTabs: true,
      width: "800px",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let populationByYearViz = new window.tableau.Viz(
      populationByYearvizContainer,
      populationByYearUrl,
      populationByYearOptions
    );

    const url5 =
      "https://public.tableau.com/shared/Q85R52WDD?:display_count=y&:origin=viz_share_link";
    const vizContainer5 = document.getElementById("thirdViz");
    const options5 = {
      hideTabs: true,
      width: "1000px",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz5 = new window.tableau.Viz(vizContainer5, url5, options5);

    const url6 =
      "https://public.tableau.com/shared/49YBR7FFM?:display_count=y&:origin=viz_share_link";
    const vizContainer6 = document.getElementById("fourthViz");
    var options6 = {
      hideTabs: true,
      width: "47vw",
      height: "700px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz6 = new window.tableau.Viz(vizContainer6, url6, options6);
  }

  render() {
    // const placeholderDiv = document.getElementById("tableauViz");

    //     const viz = new tableau.Viz(placeholderDiv, url, options);

    return (
      <div className="viz-graphs">
        <h1 style={{ width: "100vw" }}>DIFFERENCE IN BIRTH & DEATH RATES</h1>
        <div className="viz-description">
          <div id="butterFlyViz"></div>
          <div style={{ float: "right", width: "300px" }}>
            <p className="content">
              As this data shows, birth and death rate has been consistently
              decreasing.
            </p>
          </div>
        </div>

        <div className="viz-description">
          <div id="thirdViz"></div>
          <div style={{ float: "right", width: "300px" }}>
            <p className="content">
              <h2>Country & Year</h2>
              You can view the death vs birth rate by country as well. The bluer
              the map, the higher the difference between birth and death rate
            </p>
          </div>
        </div>

        <h1 style={{ width: "100vw" }}>POPULATION AS A RESULT</h1>

        <div className="viz-description">
          <div
            id="secondViz"
            style={{ float: "left", paddingRight: "20px" }}
          ></div>
          <div style={{ float: "right", width: "450px" }}>
            <h2>Country Population</h2>
            <br></br>
            <p className="content">
              As you can see from this graph, population has steadlily been
              increasing for the majority of the world. The population continues
              to grow despite the decreasing birth rate, beacuse of the
              decreasing death rate.
            </p>
          </div>
        </div>

        <h1 style={{ width: "100vw" }}>INCOME RELATIONSHIP</h1>
        <div className="viz-description">
          <div id="firstViz" style={{ paddingRight: "30px" }}></div>
          <div id="fourthViz"></div>
        </div>

        <div className="content">
          <p>
            As you can see there is a big spike in population in low-middle
            income countries. This could be due to the fact that these types of
            countries requires …. (add citations) Other interesting facts you
            can see is that high income countries have a slower increase in
            population this could be because the birth rates are lower due to
            better access to birth control, people viewing kids as a financial
            drain. As well as having access to education and careers causing
            woman to not have children or later on. Despite this however there
            is still an increase.
          </p>
        </div>
      </div>
    );
  }
}
export default Visual;
