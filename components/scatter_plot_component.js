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
        title: 'NFL Stats'
      };

      Plot.newPlot('scatterplot', trace, layout);
    }
  }, [Plot, data, team1, team2]);


  return (
    <div id="scatterplot"></div>
  );



};

export default ScatterPlotComponent;