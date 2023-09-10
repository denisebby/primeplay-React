import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const ScatterPlotComponent = () => {
  const [Plotly, setPlotly] = useState();
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

  useEffect(() => {
    if (Plotly && data.length > 0) {
      const trace = {
        x: data.map(row => row['games']), // replace 'games' with your actual column name
        y: data.map(row => row['points_scored']), // replace 'points_scored' with your actual column name
        mode: 'markers',
        type: 'scatter'
      };

      const layout = {
        title: 'NFL Stats'
      };

      Plotly.newPlot('scatterplot', [trace], layout);
    }
  }, [Plotly, data]);

  return (
    <div id="scatterplot"></div>
  );
};

export default ScatterPlotComponent;