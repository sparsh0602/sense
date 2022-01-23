import React from 'react';
import m1 from './m1.mp3'
import m2 from './m2.mp3'
import m3 from './m3.mp3'
import m4 from './m4.mp3'
import m5 from './m5.mp3'
import correct from './correct.mp3'
import wrong from './wrong.mp3'
import score from './score.mp3'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Quiz() {
    const q1 = new Audio(m1);
    const q2 = new Audio(m2);
    const q3 = new Audio(m3);
    const q4 = new Audio(m4);
    const q5 = new Audio(m5);
    const ca = new Audio(correct);
    const wa = new Audio(wrong);
    const sc = new Audio(score);
    const body = document.querySelector('body');
    body.style.backgroundColor = "purple";
    let arr = [false, false, false, false, false];
    let ques = [{
        q: 'This sense organ helps us to taste delicious food',
        op1: { text: "EARS", correct: "false" },
        op2: { text: "TONGUE", correct: "true" },
        op3: { text: "NOSE", correct: "false" }
    },
    {
        q: 'This sense organ helps us to listen to our favorite music',
        op1: { text: "EARS", correct: "true" },
        op2: { text: "TONGUE", correct: "false" },
        op3: { text: "NOSE", correct: "false" }
    },
    {
        q: 'This sense organ helps us to smell',
        op1: { text: "EARS", correct: "false" },
        op2: { text: "TONGUE", correct: "false" },
        op3: { text: "NOSE", correct: "true" }
    },
    {
        q: 'This sense organ helps us to see our favourite TV shows',
        op1: { text: "EARS", correct: "false" },
        op2: { text: "TONGUE", correct: "false" },
        op3: { text: "EYES", correct: "true" }
    },
    {
        q: 'This sense organ is used to touch ',
        op1: { text: "EARS", correct: "false" },
        op2: { text: "TONGUE", correct: "false" },
        op3: { text: "SKIN", correct: "true" }
    },
    ]

    function showQues(idx) {

        setTimeout(() => {

            if (idx === 0) {
                q1.play();
                q2.pause();
                q3.pause();
                q4.pause();
                q5.pause();
            }
            else if (idx === 1) {
                q1.pause();
                q2.play();
                q3.pause();
                q4.pause();
                q5.pause();
            }

            if (idx === 2) {
                q1.pause();
                q2.pause();
                q3.play();
                q4.pause();
                q5.pause();
            }
            if (idx === 3) {
                q1.pause();
                q2.pause();
                q3.pause();
                q4.play();
                q5.pause();
            }
            if (idx === 4) {
                q1.pause();
                q2.pause();
                q3.pause();
                q4.pause();
                q5.play();
            }
        }, 500);
        
     

        let question = document.querySelector('.flexQuestion');
        question.innerText = ques[idx].q;
        let op1 = document.querySelector('#option1');
        let op2 = document.querySelector('#option2');
        let op3 = document.querySelector('#option3');
        op1.style.display="none";
        op2.style.display="none";
        op3.style.display="none";
        setTimeout(() => {
            op1.style.display="block";
            
        }, 3000);
        setTimeout(() => {
            
            
            op2.style.display="block";
        }, 3500);
        setTimeout(() => {
            op3.style.display="block";
            
        }, 4000);
        
        op1.innerHTML = ques[idx].op1.text;
        op2.innerHTML = ques[idx].op2.text;
        op3.innerHTML = ques[idx].op3.text;


        op1.addEventListener('click', () => {
            if (ques[idx].op1.correct === "true") {
                op1.style.backgroundColor = "green";
                arr[idx] = true;
            
            }
            else {
                op1.style.backgroundColor = "red";
                // wa.play();
            }

            if (ques[idx].op2.correct === "true")
                op2.style.backgroundColor = "green";
            else
                op2.style.backgroundColor = "red";


            if (ques[idx].op3.correct === "true")
                op3.style.backgroundColor = "green";
            else
                op3.style.backgroundColor = "red";


        }
        )


        op2.addEventListener('click', () => {
            if (ques[idx].op1.correct === "true")
                op1.style.backgroundColor = "green";
            else
                op1.style.backgroundColor = "red";

            if (ques[idx].op2.correct === "true") {
                op2.style.backgroundColor = "green";
                arr[idx] = true;
               
            }
            else {
                op2.style.backgroundColor = "red";
            }
            if (ques[idx].op3.correct === "true")
                op3.style.backgroundColor = "green";
            else
                op3.style.backgroundColor = "red";


        })

        op3.addEventListener('click', () => {
            if (ques[idx].op1.correct === "true")
                op1.style.backgroundColor = "green";
            else
                op1.style.backgroundColor = "red";

            if (ques[idx].op2.correct === "true")
                op2.style.backgroundColor = "green";
            else
                op2.style.backgroundColor = "red";
            if (ques[idx].op3.correct === "true") {
          
                op3.style.backgroundColor = "green";
                arr[idx] = true;
            }
            else {
                op3.style.backgroundColor = "red";
                
            }
        })
        return;

    }

    let idx = 0;

    const startButton = () => {
        if (idx > 4) {
            q1.pause();
            q2.pause();
            q3.pause();
            q4.pause();
            q5.pause();
            sc.play();
            let next = document.querySelector('.quizNext');
            let level = document.querySelector('.level1');
            let container = document.querySelector('.introPage');
            let startAgain = document.querySelector('.startAgain');
            let againPage = document.querySelector('.lastPage');
            againPage.style.display = "block";
            startAgain.style.display = "block"

            container.style.display = "none";
            next.style.display = "none";
            level.style.display = "none";
            let count = 0;
            for (let i = 0; i < 5; i++) {
                if (arr[i] === true)
                    count++;
                arr[i] = false;
            }


            let score = document.querySelector('.score')
            console.log(count);
            score.style.display = "block"
            if (count < 3)
                score.innerHTML = "YOUR SCORE:<br/>" + count + "/5 <br/> 🥲";
            if (count >= 3)
                score.innerHTML = "YOUR SCORE:<br/>" + count + "/5 <br/> 😃";

        }
        else {
            let op1 = document.querySelector('#option1');
            let op2 = document.querySelector('#option2');
            let op3 = document.querySelector('#option3');


            op1.style.backgroundColor = "#7FFFD4"
            op2.style.backgroundColor = "#7FFFD4"
            op3.style.backgroundColor = "#7FFFD4"




            let next = document.querySelector('.quizNext');
            let level = document.querySelector('.level1');
            let container = document.querySelector('.introPage');


            container.style.display = "none";
            next.style.display = "block";
            level.style.display = "block";
            showQues(idx);
            idx++;
        }

    }

    const startAgain = () => {
        for (let i = 0; i <= 4; i++) {
            arr[i] = false;
        }
        idx = 0;
        startButton();
        let againPage = document.querySelector('.lastPage');
        againPage.style.display = "none";
    }


    return (<div>
        <div className="quizContainer">
            <div className="introPage">
                <button className="startButton" onClick={startButton}>START</button><br />
            </div>
            <button className="quizNext" onClick={startButton}>NEXT</button>
            <div className="level1">
                <p className="level">IDENTIFY THE ORGAN</p>
                <div className="level1flex">
                    <div className="flexItem">
                        <p className="flexQuestion" id="1"></p>
                        <div className="gridConatiner">
                            <button type="radio" className="gridItem" id="option1"></button>
                            <button type="radio" className="gridItem" id="option2"></button>
                            <button type="radio" className="gridItem" id="option3"></button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="lastPage">
                <div className="score">SCORE</div>
                <Link className="startAgain" to='/quize'>START AGAIN</Link>
            </div>
        </div>
    </div>
    )
}
