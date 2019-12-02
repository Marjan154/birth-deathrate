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
    const url =
      "https://public.tableau.com/views/BirthDeath/Sheet8?:display_count=y&publish=yes&:origin=viz_share_link";
    const populationByIncomeGroup = document.getElementById("firstViz");
    //this.vizContainer;
    const options = {
      hideTabs: true,
      width: "800px",
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
      height: "700px",
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
    const vizContainer5 = document.getElementById("thirdViz");;
    const options5 = {
      hideTabs: true,
      width: "1000px",
      height: "700px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    let viz5 = new window.tableau.Viz(vizContainer5, url5, options5);

    const url6 = "https://public.tableau.com/shared/49YBR7FFM?:display_count=y&:origin=viz_share_link";
    const vizContainer6 = document.getElementById("fourthViz")
      var options6 = {
      hideTabs: true,
      width: "1000px",
      height: "700px",
      onFirstInteractive: function() {
// The viz is now ready and can be safely used.
      }
    };
      let viz6 = new window.tableau.Viz(vizContainer6, url6, options6) 
  }



  render() {
    // const placeholderDiv = document.getElementById("tableauViz");

    //     const viz = new tableau.Viz(placeholderDiv, url, options);

    return (
      <div className="viz-graphs">
        {
          
          // <div
          //   ref={div => {
          //     this.vizContainer = div;
          //   }}
          // >
          //   {" "}
          // </div>
        }
        <div id="firstViz"></div>
        <div id="secondViz"></div>
        <div id="thirdViz"></div>
        <div id="fourthViz"></div>
        {/* <div
          ref={div => {
            this.populationByYearViz = div;
          }}
        >
          {" "}
        </div>
        <div
          ref={div => {
            this.vizContainer5 = div;
          }}
        >
          {" "}
        </div> */}
      </div>
    );
  }
    //     var url4 = "https://public.tableau.com/views/BirthDeath/Sheet4?:display_count=y&publish=yes&:origin=viz_share_link";
    //     const vizContainer4 = this.vizContainer4;  
    //         var options4 = {
    //         hideTabs: true,
    //         width: "800px",
    //         height: "700px",
    //         onFirstInteractive: function() {
    //  // The viz is now ready and can be safely used.
    //         }
    //     };
    //     let viz4 = new window.tableau.Viz(vizContainer4, url4, options4) 
        
       


    // render() {
    //     // var placeholderDiv = document.getElementById("tableauViz");
        
    
    // //     var viz = new tableau.Viz(placeholderDiv, url, options);   
        
    //     return(
    //       <div>
    //         { <div ref={(div) => { this.populationByIncomeUrl = div }}> </div>  
    //         /*<div ref={(div) => { this.vizContainer2 = div }}> </div> 
    //         <div ref={(div) => { this.vizContainer3 = div }}> </div> 
    //         <div ref={(div) => { this.vizContainer4 = div }}> </div>  */}
    //         <div ref={(div) => { this.populationByYearvizContainer = div }}> </div> 
    //         <div ref={(div) => { this.populationByRegionvizContainer = div }}> </div> 
    //         <div ref={(div) => { this.vizContainer5 = div }}> </div> 
    //       </div>
          
    //     );
    // }
}
export default Visual;
