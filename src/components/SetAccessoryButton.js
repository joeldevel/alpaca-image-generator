import React from 'react';

function SetAccessoryButton(props) {
  // function handleClick(e) {
  //   console.log(e.target);
  //   e.target.classList.toggle('active');
  // }
  return <button className="btn-apply-style" onClick={ props.handleSetActive } title={props.title}>{props.title}</button>;
}

export default SetAccessoryButton;