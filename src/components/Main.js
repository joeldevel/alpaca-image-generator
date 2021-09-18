import React, { useState } from 'react';
import SetAccessoryButton from './SetAccessoryButton';

function Main() {
  const [activeSetting, setActiveSetting] = useState("");
  const [activeCategoryOptions, setActiveCategoryOptions] = useState([]);
  const [images, setImages] = useState([
     {title:"backgrounds" , src:'./images/alpaca/backgrounds/blue60.png'},
     {title: "ears" , src:'./images/alpaca/ears/default.png'},
     {title: "neck", src:'./images/alpaca/neck/default.png'},
     {title: "hair", src:'./images/alpaca/hair/default.png'},
     {title: "nose", src:'./images/alpaca/nose.png'},
     {title: "eyes", src:'./images/alpaca/eyes/default.png'},
     {title: "mouth", src:'./images/alpaca/mouth/default.png'},
     {title: "accessories", src:''},
     {title: "leg", src:'./images/alpaca/leg/default.png'},
    ]);

  const featuresCategories = [
    { title: 'hair', options: ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short'] },
    { title: 'ears', options: ['default', 'tilt-backward', 'tilt-forward'] },
    { title: 'mouth', options: ['astonished', 'default', 'eating', 'laugh', 'tongue'] },
    { title: 'neck', options: ['bend-backward', 'bend-forward', 'default', 'thick'] },
    { title: 'eyes', options: ['angry', 'default', 'naughty', 'panda', 'smart', 'star'] },
    { title: 'leg', options: ['bubble-tea', 'cookie', 'default', 'game-console', 'tilt-backward', 'tilt-forward'] },
    {
      title: 'backgrounds',
      options: ['blue50', 'darkblue30', 'green50', 'grey40', 'red50', 'yellow50',
        'blue60', 'darkblue50', 'green60', 'grey70', 'red60', 'yellow60',
        'blue70', 'darkblue70', 'green70', 'grey80', 'red70', 'yellow70'
      ]
    },
    { title: 'accessories', options: ['earings', 'flower', 'glasses', 'headphone'] }
  ];

  function handleSetActive(e) {
    setActiveSetting(prevState => {
      fillOptions(e.target.title);
      return e.target.title;
    });
  }

  function handleSetStyle(e) {
    const newImages = images.map(i => {
      if(i.title===activeSetting) {
        i.src = `./images/alpaca/${activeSetting}/${e.target.title}.png`;
      }
      return i;
      });
     setImages(newImages);
  }

  function fillOptions(title) {
    const { options } = featuresCategories.find(e => e.title === title);
    setActiveCategoryOptions(options);
  }

  return (
    <main className="main" >
    <div className="image-display">
    <div className="alpaca-frame">
    {images.map(i=><img src={i.src} className={`alpaca-img ${i.title}`} alt="" key={i.src}/>)}
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
      {featuresCategories.map(e=><SetAccessoryButton title={e.title} handleClick={handleSetActive}/>)}
      </div>
    </div>
    <div className="styles-container">
      <h3 className="options-title">style</h3>
      <div className="options-btn-container">
      { activeCategoryOptions.map(e => <SetAccessoryButton title={e} handleClick={handleSetStyle}/>)}
      </div>
    </div>
    </div>
  </main>
  );
}

export default Main;