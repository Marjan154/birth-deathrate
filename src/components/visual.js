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
        var url = "https://public.tableau.com/views/BirthRateByYear/BirthRatebyYear?:display_count=y&publish=yes&:origin=viz_share_link";
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

        var url2 = "https://public.tableau.com/views/PopulationByYear/Sheet2?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizContainer2 = this.vizContainer2;  
            var options2 = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz2 = new window.tableau.Viz(vizContainer2, url2, options2)  

        var url3 = "https://public.tableau.com/views/BirthDeath/BirthRateofeachCountry?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizContainer3 = this.vizContainer3;  
            var options3 = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz3 = new window.tableau.Viz(vizContainer3, url3, options3) 

        var url4 = "https://public.tableau.com/views/BirthDeath/Sheet4?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizContainer4 = this.vizContainer4;  
            var options4 = {
            hideTabs: true,
            width: "800px",
            height: "700px",
            onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
            }
        };
        let viz4 = new window.tableau.Viz(vizContainer4, url4, options4) 
        
        
    
      }  

    render() {
        // var placeholderDiv = document.getElementById("tableauViz");
        
    
    //     var viz = new tableau.Viz(placeholderDiv, url, options);   
        
        return(
          <div>
            <div ref={(div) => { this.vizContainer = div }}> </div>  
            <div ref={(div) => { this.vizContainer2 = div }}> </div> 
            <div ref={(div) => { this.vizContainer3 = div }}> </div> 
          </div>
        );
    }
}
export default Visual;