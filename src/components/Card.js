import React from 'react';

function Card(props) {
  return (
    <>
      {/* <div className="d-flex justify-content-between cards"> */}
      <div className="card w-50 m-2 p-2">
        <img src={props.imgsrc} alt="image here" className="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.linkUrl} className="btn btn-warning">
          Watch Now
        </a>
      </div>
      {/* </div> */}
    </>
  );
}

export default Card;
