import React, { useState } from 'react';
import SetAccessoryButton from './SetAccessoryButton';

function Main() {
  const [activeSetting, setActiveSetting] = useState();
  const featuresCategories = [
    {title: 'hair'}, 
    {title:'ears'}, 
    {title:'mouth'}, 
    {title:'neck'}, 
    {title:'eyes'}, 
    {title:'leg'}, 
    {title:'background'}, 
    {title:'accessories'}
  ];

  return (
    <main className="main" >
    <div className="image-display">
    <div className="alpaca-frame">
      <img src="./images/alpaca/backgrounds/blue60.png" className="alpaca-img" alt=""/>
      <img src="./images/alpaca/ears/default.png" className="alpaca-img ears" alt=""/>
      <img src="./images/alpaca/neck/default.png" className="alpaca-img neck" alt=""/>
      <img src="./images/alpaca/hair/default.png" className="alpaca-img hair" alt=""/>
      <img src="./images/alpaca/nose.png" className="alpaca-img nose" alt=""/>
      <img src="./images/alpaca/eyes/default.png" className="alpaca-img eyes" alt=""/>
      <img src="./images/alpaca/mouth/default.png" className="alpaca-img mouth" alt=""/>
      <img src="" className="alpaca-img accesory" alt=""/>
      <img src="./images/alpaca/leg/default.png" className="alpaca-img legs" alt=""/>
    </div>
    <div className="img-footer-btn-container">
      <button className="btn">random</button>
      <button className="btn">download</button>
    </div>
    </div>
    <div className="options-display">
    <div className="accessories-container">
      <h3 className="options-title">accesorize alpaca</h3>
      <div className="options-btn-container">
      {featuresCategories.map(e=><SetAccessoryButton title={e.title}/>)}
      </div>
    </div>
    <div className="styles-container">
      <h3 className="options-title">style</h3>
      <div className="options-btn-container">
      <button className="btn-apply-style">default</button>
      <button className="btn-apply-style">default</button>
      <button className="btn-apply-style">default</button>
      </div>
    </div>
    </div>
  </main>
  );
}

export default Main;