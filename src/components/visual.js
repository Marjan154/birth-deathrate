import React, { Component } from "react";
import tableau from 'tableau-api';

class Visual extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount() {  
        this.initViz()  
      }  

      initViz() {  
        var url = "https://public.tableau.com/views/BirthDeath/Sheet8?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizContainer = this.vizContainer;  
            var options = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz = new window.tableau.Viz(vizContainer, url, options)  

        var populationByYearUrl = "https://public.tableau.com/shared/YG9BWBTQW?:display_count=y&:origin=viz_share_link";
        const populationByYearvizContainer = this.populationByYearvizContainer;  
            var populationByYearOptions = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let populationByYearViz = new window.tableau.Viz(populationByYearvizContainer, populationByYearUrl, populationByYearOptions)  

    //     var url3 = "https://public.tableau.com/views/BirthDeath/BirthRateofeachCountry?:display_count=y&publish=yes&:origin=viz_share_link";
    //     const vizContainer3 = this.vizContainer3;  
    //         var options3 = {
    //         hideTabs: true,
    //         width: "800px",
    //         height: "700px",
    //         onFirstInteractive: function() {
    //  // The viz is now ready and can be safely used.
    //         }
    //     };
    //     let viz3 = new window.tableau.Viz(vizContainer3, url3, options3) 

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
        
        var url5 = "https://public.tableau.com/shared/Q85R52WDD?:display_count=y&:origin=viz_share_link";
        const vizContainer5 = this.vizContainer5;  
            var options5 = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz5 = new window.tableau.Viz(vizContainer5, url5, options5) 
        
    
      }  

    render() {
        // var placeholderDiv = document.getElementById("tableauViz");
        
    
    //     var viz = new tableau.Viz(placeholderDiv, url, options);   
        
        return(
          <div>
            { <div ref={(div) => { this.vizContainer = div }}> </div>  
            /*<div ref={(div) => { this.vizContainer2 = div }}> </div> 
            <div ref={(div) => { this.vizContainer3 = div }}> </div> 
            <div ref={(div) => { this.vizContainer4 = div }}> </div>  */}
            <div ref={(div) => { this.populationByYearViz = div }}> </div> 
            <div ref={(div) => { this.vizContainer5 = div }}> </div> 
          </div>
        );
    }
}
export default Visual;