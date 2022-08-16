import React, {useState, useContext} from "react";
import { QuizContext } from "../Helpers/contexts";
import {Questions} from '../Helpers/QuestionBank'

    function Quiz(){

        const { setScore, } = useContext(QuizContext)

        //setting Questions to start from 0 in array with the function
        //ref Question Bank.js for Questions array with the "usestate function"       
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [optionChosen, setOptionChosen] = useState("");
        
        const nextQuestion = () =>{
            
        };


        //display Question using .promt
        return( <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("optionA")}> {Questions[currentQuestion].optionA} </button>
                <button onClick={() => setOptionChosen("optionB")}> {Questions[currentQuestion].optionB} </button>
                <button onClick={() => setOptionChosen("optionC")}> {Questions[currentQuestion].optionC} </button>
                <button onClick={() => setOptionChosen("optionD")}> {Questions[currentQuestion].optionD} </button>

            </div>
            <button>Next Question</button>
        </div>
    
        );
    }
    



export default Quiz;
