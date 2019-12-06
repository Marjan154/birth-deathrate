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
      width: "800px",
      height: "500px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let butterFly = new window.tableau.Viz(
      butterFlyChart,
      ButterFlyofbirthdeathURL,
      butterFlyChartOptions
    );

    const AveragePopulationOfCountriesByIncomeUrl =
      "https://public.tableau.com/views/AVGPopulation/Sheet8?:display_count=y&publish=yes&:origin=viz_share_link";
    const AveragePopulationOfCountriesByIncome = document.getElementById(
      "AveragePopulationOfCountriesByIncome"
    );
    const AveragePopulationOfCountriesByIncomeOptions = {
      hideTabs: true,
      width: "1000px",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz2 = new window.tableau.Viz(
      AveragePopulationOfCountriesByIncome,
      AveragePopulationOfCountriesByIncomeUrl,
      AveragePopulationOfCountriesByIncomeOptions
    );

    // const url =
    //   "https://public.tableau.com/views/BirthDeath/Sheet8?:display_count=y&publish=yes&:origin=viz_share_link";
    // const populationByIncomeGroup = document.getElementById("firstViz");
    // //this.vizContainer;
    // const options = {
    //   hideTabs: true,
    //   width: "47vw",
    //   height: "700px",
    //   onFirstInteractive: function() {
    //     // The viz is now ready and can be safely used.
    //   }
    // };
    // let viz = new window.tableau.Viz(populationByIncomeGroup, url, options);

    const populationByYearUrl =
      "https://public.tableau.com/shared/YG9BWBTQW?:display_count=y&:origin=viz_share_link";
    const populationByYearvizContainer = document.getElementById(
      "populationByYear"
    );
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

    const DiffInBirthAndDeathUrl =
      "https://public.tableau.com/shared/BPM3H42WN?:display_count=y&:origin=viz_share_link";
    const DiffInBirthAndDeath = document.getElementById("DiffInBirthAndDeath");
    const DiffInBirthAndDeathOptions = {
      hideTabs: true,
      width: "1000px",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz5 = new window.tableau.Viz(
      DiffInBirthAndDeath,
      DiffInBirthAndDeathUrl,
      DiffInBirthAndDeathOptions
    );

    const AverageBirthRateOfCountriesUrl =
      "https://public.tableau.com/views/avg_15754315796390/AvgBirthRate?:display_count=y&:origin=viz_share_link";
    const AverageBirthRateOfCountries = document.getElementById(
      "AverageBirthRateOfCountries"
    );
    var AverageBirthRateOfCountriesOptions = {
      hideTabs: true,
      width: "47vw",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz6 = new window.tableau.Viz(
      AverageBirthRateOfCountries,
      AverageBirthRateOfCountriesUrl,
      AverageBirthRateOfCountriesOptions
    );

    const AverageDeathRateOfCountriesUrl =
      "https://public.tableau.com/views/avgDeath/Sheet1?:display_count=y&:origin=viz_share_link";
    const AverageDeathRateOfCountries = document.getElementById(
      "AverageDeathRateOfCountries"
    );
    var AverageDeathRateOfCountriesOptions = {
      hideTabs: true,
      width: "47vw",
      height: "600px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz7 = new window.tableau.Viz(
      AverageDeathRateOfCountries,
      AverageDeathRateOfCountriesUrl,
      AverageDeathRateOfCountriesOptions
    );
  }

  render() {
    // const placeholderDiv = document.getElementById("tableauViz");

    //     const viz = new tableau.Viz(placeholderDiv, url, options);

    return (
      <div>
        <div id="intro">
          <h1 id="title">Birth and Death Rates</h1>

          <p
            className="content"
            style={{ paddingBottom: "40px", textAlign: "center" }} >
            Birth and Death rates are crucial to assessing humanity&#39;s
            progress and advancement. <a href="https://www.globalcitizen.org/en/content/world-running-out-of-food-by-2023/">
              The United Nations Food and
            Agriculture Organization (FAO) estimates that by 2050 the world population will
            go over 9.1 billion and that there will not be enough food 
            for everyone.</a> If you look at our visualizations, you might find interesting trends
            or unexpected information.
          </p>
          <div><p className="As2017">As of 2017...</p></div>
          <div id="icons">
            <div>
              <img
                src={require("../images/birth.png")}
                style={{ padding: "20px" }}
                className="p-icon"
              ></img>
              <p>18.7 births per 1000 people</p>
            </div>

            <div>
              <img
                src={require("../images/population.png")}
                style={{ padding: "20px" }}
                className="p-icon"
              ></img>
              <p>7,510,990,456 people</p>
            </div>
            <div>
              <img
                src={require("../images/death.png")}
                style={{ padding: "20px" }}
                className="p-icon"
              ></img>
              <p>7.54 deaths per 1000 people</p>
            </div>
          </div>
        </div>

        <div className="viz-graphs">
          <h1 id="BirthDeath" style={{ width: "100vw" }}>
            DIFFERENCE IN BIRTH & DEATH RATES
          </h1>
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
            <div id="DiffInBirthAndDeath"></div>
            <div style={{ float: "right", width: "300px" }}>
              <p className="content">
                <h2>Country & Year</h2>
                You can view the death vs birth rate by country as well. The
                darker the color, the higher the difference between birth and death
                rate.
              </p>
            </div>
          </div>

          <h1 id="Population" style={{ width: "100vw" }}>
            POPULATION AS A RESULT
          </h1>

          <div className="viz-description">
            <div
              id="populationByYear"
              style={{ float: "left", paddingRight: "20px" }}
            ></div>
            <div style={{ float: "right", width: "450px" }}>
              <h2>Country Population</h2>
              <br></br>
              <p className="content">
                As you can see from this graph, population has steadlily been
                increasing for the majority of the world. The population
                continues to grow despite the decreasing birth rate, beacuse of
                the decreasing death rate.
              </p>
            </div>
          </div>

          <h1 id="Income" style={{ width: "100vw" }}>
            INCOME RELATIONSHIP
          </h1>
          <div className="viz-description">
            <div id="firstViz" style={{ paddingRight: "30px" }}></div>
            <div id="AveragePopulationOfCountriesByIncome"></div>
            <div id="AverageBirthRateOfCountries"></div>
            <div id="AverageDeathRateOfCountries"></div>
            <p className="content">
              <a href="https://datatopics.worldbank.org/world-development-indicators/stories/the-classification-of-countries-by-income.html">
              The World Bank classifies low-income countries as countries with
              GNI per capita of less than $1,025. Lower middle-income countires
              has a GNI per capita between $1,026 and $3,995. Upper
              middle-income countries are between $3,996 and $12,375. And
              High-income countries are those with a GNI per capita of $12,376
              or more.</a>
            </p>
          </div>
        </div>

        <h1 style={{ width: "100vw" }}>CONCLUSION. WHY WE NEED THIS DATA?</h1>
        <div className="content">
          <p>
            This data is important because we need to track and distribute
            services/resources among humans. The growth of population directly
            affects economic, political and social growth as well as our
            environment. With overpopulation we can run out of resources as well
            as harm our environments. Things such as deforestation as well as
            hunting can cause species to become extinct. Being able to predict
            the population in the future will allow us to be better prepared for
            these issues. Other data also relies on using the population count
            in their calculations, so having an accurate count would make the
            other data accurate.
          </p>
        </div>
      </div>
    );
  }
}
export default Visual;
