import React, { useState } from 'react';
import SetAccessoryButton from './SetAccessoryButton';

function Main() {
  const [activeSetting, setActiveSetting] = useState();
  return (
    <main class="main" >
    <div class="image-display">
    <div class="alpaca-frame">
      <img src="./images/alpaca/backgrounds/blue60.png" class="alpaca-img" alt=""/>
      <img src="./images/alpaca/ears/default.png" class="alpaca-img ears" alt=""/>
      <img src="./images/alpaca/neck/default.png" class="alpaca-img neck" alt=""/>
      <img src="./images/alpaca/hair/default.png" class="alpaca-img hair" alt=""/>
      <img src="./images/alpaca/nose.png" class="alpaca-img nose" alt=""/>
      <img src="./images/alpaca/eyes/default.png" class="alpaca-img eyes" alt=""/>
      <img src="./images/alpaca/mouth/default.png" class="alpaca-img mouth" alt=""/>
      <img src="" class="alpaca-img accesory" alt=""/>
      <img src="./images/alpaca/leg/default.png" class="alpaca-img legs" alt=""/>
    </div>
    <div class="img-footer-btn-container">
      <button class="btn">random</button>
      <button class="btn">download</button>
    </div>
    </div>
    <div class="options-display">
    <div class="accessories-container">
      <h3 class="options-title">accesorize alpaca</h3>
      <div class="options-btn-container">
      <SetAccessoryButton title="hair"/>
      <SetAccessoryButton title="ears"/>
      <SetAccessoryButton title="mouth"/>
      <SetAccessoryButton title="neck"/>
      <SetAccessoryButton title="eyes"/>
      <SetAccessoryButton title="leg"/>
      <SetAccessoryButton title="background"/>
      <SetAccessoryButton title="accessories"/>
      </div>
    </div>
    <div class="styles-container">
      <h3 class="options-title">style</h3>
      <div class="options-btn-container">
      <button class="btn-apply-style">default</button>
      <button class="btn-apply-style">default</button>
      <button class="btn-apply-style">default</button>
      </div>
    </div>
    </div>
  </main>
  );
}

export default Main;