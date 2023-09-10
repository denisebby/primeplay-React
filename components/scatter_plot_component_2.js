import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const ScatterPlotComponent = () => {
  const [Plotly, setPlotly] = useState();
  const [data2, setData] = useState();

  useEffect(() => {
    import('plotly.js/dist/plotly.min.js').then(Plotly => {
      setPlotly(Plotly.default);

      const data2 = Papa.parse('offense_2022.csv', {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        }
      });

      console.log("hi from scatter_plot_component.js")
      const data = [{
        x: data2.map(row => row['games']), //[1, 2, 3, 0, 5],
        y: data2.map(row => row['points_scored']), // [1, 6, 3, 6, 5],
        mode: 'markers',
        type: 'scatter'
      }];

      const layout = {
        title: 'NFL Stats'
      };

      Plotly.newPlot('scatterplot', data, layout);
    });
  }, []);

  return (
    <div id="scatterplot"></div>
  );
};

export default ScatterPlotComponent;
