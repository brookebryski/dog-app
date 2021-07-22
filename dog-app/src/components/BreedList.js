import React from 'react'

const BreedList = props => {
  const pics = props.pics.map((pic) => {
    return <img src={pic} ></img>
  });

    return <div>{pics}</div>
};

export default BreedList;