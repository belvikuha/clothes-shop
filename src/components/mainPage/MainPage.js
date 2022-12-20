import React from 'react';
import './main.css'
import backImg1 from './img/1.png';
import backImg2 from './img/2.png'
import backImg3 from './img/3.png'
const MainPage = () => {
    return (
        <div className='main'>
            <div className="welcome">
                <div className="mainText">
                    <h1>Нова колекція</h1>
                    <div className='line'></div>
                    <h2>переглянути новинки &gt; </h2>
                </div>
               <img src={backImg1} alt=""draggable="false" /><img src={backImg2} alt=""draggable="false" /><img src={backImg3} alt=""draggable="false" />
            </div>
            <div className="subscribeForm">
                <h1>Дізнайся першою про новинки</h1>
                <input type="text" placeholder="Ваш e-mail*"/>
                <input type="submit" value='ПІДПИСАТИСЯ'></input>
            </div>
        </div>
    );
};

export default MainPage;