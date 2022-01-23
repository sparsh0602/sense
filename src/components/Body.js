import React from 'react';
import intro from './intro.mp3'
import eye from './eye.mp3'
import ear from './ear.mp3'
import nose from './nose.mp3'
import tongue from './tongue.mp3'
import skin from './skin.mp3'
import fun from './fun.mp3'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Body() {
    const introSound = new Audio(intro);
    const eyeSound =new Audio(eye);
    const earSound=new Audio(ear);
    const noseSound=new Audio(nose);
    const tongueSound=new Audio(tongue);
    const skinSound=new Audio(skin);
    const funSound=new Audio(fun);
    let sound =true;
    const handleIntro = () => {
        let introButton = document.querySelector('.introButton')
        introButton.style.opacity = "0";
        let classDetails = document.querySelector('.introDetails');
        classDetails.style.display = "block";
        let nextButton = document.querySelector('.nextButton1');
        nextButton.style.display = "block";
        if(sound===true)
        {
        setTimeout(() => {
            
            introSound.play();
        }, 300);
        let funButton=document.querySelector('.funButton');
        funButton.style.display="none";

    }
}
    const handleNext1 = () => {
        introSound.pause();
        let classDetails = document.querySelector('.introDetails');
        classDetails.innerHTML = "<div>&#128064; </div> <br />The eye is the sense organ of sight. The <br /> eye is shaped like a ball and is located in bony <br/> sockets in the skull.";
        if(sound===true){
        setTimeout(() => {
            
            eyeSound.play();
        }, 500);
    }
        let nextButton = document.querySelector('.nextButton1');
        nextButton.style.display="none";
        let nextButton2 = document.querySelector('.nextButton2');
        nextButton2.style.display="block";

        
    }
    const handleNext2 = () => {
        eyeSound.pause();
        let classDetails = document.querySelector('.introDetails');
        classDetails.innerHTML = "<div>&#128066; </div> <br />The ear is the organ that enables hearing and<br/>in mammals, balance. In mammals, the ear is<br/> usually described as having three parts—the <br/>outer ear, the middle ear and the inner ear.";
        if(sound===true)
        {
        setTimeout(() => {
            
            earSound.play();
        }, 500);
    }
        let nextButton = document.querySelector('.nextButton2');
        nextButton.style.display="none";
        let nextButton2 = document.querySelector('.nextButton3');
        nextButton2.style.display="block";
    }
    const handleNext3 = () => {
        earSound.pause();
        let classDetails = document.querySelector('.introDetails');
        classDetails.innerHTML = "<div> &#128067;</div> <br />The human nose is the most protruding part of<br/> the face. It bears the nostrils and is the first<br/> organ of the respiratory system.";
        if(sound===true)
        {
        setTimeout(() => {
            
            noseSound.play();
        }, 500);
    }
        let nextButton = document.querySelector('.nextButton3');
        nextButton.style.display="none";
        let nextButton2 = document.querySelector('.nextButton4');
        nextButton2.style.display="block";
    }
    const handleNext4 = () => {
        noseSound.pause();
        let classDetails = document.querySelector('.introDetails');
        classDetails.innerHTML = "<div> &#128069;</div> <br />The tongue manipulates food for mastication <br/>and swallowing as part of the digestive<br/> process, and is the primary organ of taste.";
        if(sound===true)
        {
        setTimeout(() => {
            
            tongueSound.play();
        }, 500);
    }
        let nextButton = document.querySelector('.nextButton4');
        nextButton.style.display="none";
        let nextButton2 = document.querySelector('.nextButton5');
        nextButton2.style.display="block";
    }
    const handleNext5 = () => {
        tongueSound.pause();
        let classDetails = document.querySelector('.introDetails');
        classDetails.innerHTML = "<div> &#128118;</div> <br /><p>Skin contain specialized sensory nerve <br/>structures that detect touch, surface <br/>temperature, and pain</p>";
        if(sound===true)
        {
        setTimeout(() => {
            
            skinSound.play();
        }, 500);
    }
        let nextButton = document.querySelector('.nextButton5');
        nextButton.style.display="none";
        let nextButton2 = document.querySelector('.nextButton6');
        nextButton2.style.display="block";
        
    }
    const handleNext6 = () => {
        skinSound.pause();
        let classDetails = document.querySelector('.introDetails');
        classDetails.innerHTML="<span>FUN TIME!!<br/>QUIZ TIME!!</br>CLICK ON QUIZ!!</span>"
      
        if(sound===true)
        {
        setTimeout(() => {
            
            funSound.play();
        }, 700);
    }
        let nextButton = document.querySelector('.nextButton6');
        nextButton.style.display="none";
        let funButton=document.querySelector('.funButton2');
        funButton.style.display="block";
       
    }
    const handleSoundButton=()=>{
        if(sound===true)
        {
        sound=false;
        let soundButton=document.querySelector('.soundButton');
        soundButton.innerHTML="SOUND🔇";
        skinSound.pause();
        earSound.pause();
        introSound.pause();
        eyeSound.pause();
        noseSound.pause();
        tongueSound.pause();
        funSound.pause();
        }
        else
        {
        sound=true;
        let soundButton=document.querySelector('.soundButton');
        soundButton.innerHTML="SOUND🔊";
        let nextButton1 = document.querySelector('.nextButton1');
        let nextButton2 = document.querySelector('.nextButton2');
        let nextButton3 = document.querySelector('.nextButton3');
        let nextButton4 = document.querySelector('.nextButton4');
        let nextButton5 = document.querySelector('.nextButton5');
        let nextButton6 = document.querySelector('.nextButton6');
        let funButton=document.querySelector('.funButton2');

        if(nextButton1.style.display==='block')
            introSound.play();
            if(nextButton2.style.display==='block')
            eyeSound.play();
            if(nextButton3.style.display==='block')
            earSound.play();
            if(nextButton4.style.display==='block')
            noseSound.play();
            if(nextButton5.style.display==='block')
            tongueSound.play();
            if(nextButton6.style.display==='block')
            skinSound.play();
            if(funButton.style.display==='block')
            funSound.play();
        }
        console.log(sound);
    }
    return <div>
        <button className="soundButton" onClick={handleSoundButton}>Sound🔊</button>
        <div className="bodyContainer">
            <button className="introButton" onClick={handleIntro}>LEARN</button>
            <button className="nextButton1" onClick={handleNext1}>NEXT &#10145;&#65039;</button>
            <button className="nextButton2" onClick={handleNext2}>NEXT &#10145;&#65039;</button>
            <button className="nextButton3" onClick={handleNext3}>NEXT &#10145;&#65039;</button>
            <button className="nextButton4" onClick={handleNext4}>NEXT &#10145;&#65039;</button>
            <button className="nextButton5" onClick={handleNext5}>NEXT &#10145;&#65039;</button>
            <button className="nextButton6" onClick={handleNext6}>NEXT &#10145;&#65039;</button>
            <Link className="funButton" to="/quize">SKIP TO QUIZ</Link>
            <Link className="funButton2" to="/quize">GO TO QUIZ</Link>
            
            <p className="introDetails">Sense organ are the specialized organs <br />composed of sensory neurons, which help us<br /> to perceive and respond to our surroundings.<br />
                There are five sense organs –<br />
                Eyes &#128065;<br />
                Ears &#128066;<br />
                Nose &#128067;<br />
                Tongue &#128069;<br />
                Skin &#128118;<br /></p>
        </div>


    </div>;
}

