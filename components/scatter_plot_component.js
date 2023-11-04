import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';


const ScatterPlotComponent = ({team1, team2}) => {
  const [Plot, setPlotly] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    import('plotly.js/dist/plotly.min.js').then(Plotly => {
      setPlotly(Plotly.default);
    });

    Papa.parse('offense_2022.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }, []);

  console.log("hi from scatter_plot_component")
  

  useEffect(() => {
    if (Plot && data.length > 0) {
      console.log("let's plot")
      console.log(team1)
      console.log(team2)

      const team1Data = data.filter(row => row['team'] === team1);
      const team2Data = data.filter(row => row['team'] === team2);
    
      const xData1 = team1Data.map(row => row['games']);
      const yData1 = team1Data.map(row => row['points_scored']);
    
      const xData2 = team2Data.map(row => row['games']);
      const yData2 = team2Data.map(row => row['points_scored']);
    
      const trace = [
        {
          x: xData1, // replace 'games' with your actual column name
          y: yData1, // replace 'points_scored' with your actual column name
  
          type: 'scatter',
          name: team1
        },
        {
          x: xData2, // replace 'games' with your actual column name
          y: yData2, // replace 'points_scored' with your actual column name
    
          type: 'scatter',
          name: team2
        },

    
    
      ];

      const layout = {
        title: '<b>NFL Stats</b>',
        autosize: true, // this ensures the plot will size itself to the div
        responsive: true,
        xaxis: {
          title: 'Week',
          showline: true,
          linewidth: 0.5,
          linecolor: 'black',
          mirror: true,
          // other x-axis specific configurations
        },
        yaxis: {
          title: 'Points Scored',
          showline: true,
          linewidth: 0.5,
          linecolor: 'black',
          mirror: true,
          // other y-axis specific configurations
        },
      };

      Plot.newPlot('scatterplot', trace, layout);
    }
  }, [Plot, data, team1, team2]);

  useEffect(() => {
    const handleResize = () => {


      import('plotly.js/dist/plotly.min.js').then(Plotly => {
        Plotly.Plots.resize(document.getElementById('scatterplot'));
      });


      
    };
  
    // Resize the plot when the window is resized
    window.addEventListener('resize', handleResize);
  
    // Return a clean-up function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div id="scatterplot" 
    style={{display: "flex", "justify-content": "center", width: "80%", height: "100%"}}></div>
  );



};

export default ScatterPlotComponent;