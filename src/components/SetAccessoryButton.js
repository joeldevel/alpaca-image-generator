import React from 'react';

function SetAccessoryButton(props) {
  const handleFunction = props.handleClick;
  return <button className="btn-apply-style" onClick={ handleFunction } title={props.title}>{props.title}</button>;
}

export default SetAccessoryButton;