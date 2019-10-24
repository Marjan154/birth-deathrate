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
        var url = "https://public.tableau.com/views/Book1_15716702841400/Birth?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link";
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
    
      }  

    render() {
        // var placeholderDiv = document.getElementById("tableauViz");
        
    
    //     var viz = new tableau.Viz(placeholderDiv, url, options);   
        
        return(
            <div ref={(div) => { this.vizContainer = div }}> </div>  
        );
    }
}
export default Visual;