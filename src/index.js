import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import data from './data';

ReactDOM.render(
  <>
    <h1 className="header">Top netflix series list</h1>
    <div className="d-flex justify-content-start cards">
      {data.map((series) => {
        return <Card imgsrc={series.imageUrl} title={series.name} linkUrl={series.url} description={series.description} />;
      })}
    </div>
  </>,
  document.getElementById('root')
);
