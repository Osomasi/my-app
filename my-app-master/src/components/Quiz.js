import React, {useState, useContext} from "react";
import { QuizContext } from "../Helpers/contexts";
import {Questions} from '../Helpers/QuestionBank'

    function Quiz(){
        //calling the Score attribute and using setScore to edit as quiz continues
        const { score, setScore, setGameState } = useContext(QuizContext)

        //setting Questions to start from 0 in array with the function
        //ref Question Bank.js for Questions array with the "usestate function"       
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [optionChosen, setOptionChosen] = useState("");
        const [currentScore] = ("");
        
        const nextQuestion = () =>{
            if (Questions[currentQuestion].answer == optionChosen){
                setScore( score + 1);
            }
            //console log
            //alert(score);
            setCurrentQuestion(currentQuestion + 1);
        };

        const finishQuiz =() =>{
            if (Questions[currentQuestion].answer == optionChosen){
                setScore( score + 1);
            }
            setGameState("endScreen");
        }

        


        //display Question using .promt
        return( <div className="Quiz">
            <h1 className="questions">{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("optionA")}> {Questions[currentQuestion].optionA} </button>
                <button onClick={() => setOptionChosen("optionB")}> {Questions[currentQuestion].optionB} </button>
                <button onClick={() => setOptionChosen("optionC")}> {Questions[currentQuestion].optionC} </button>
                <button onClick={() => setOptionChosen("optionD")}> {Questions[currentQuestion].optionD} </button>                            
                
                </div>
            
            {currentQuestion === Questions.length -1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ): (
            <button onClick={nextQuestion}>Next Question</button>
            )}
            <h3> Current Score: {score} </h3>

        </div>
    
        );
    }
    



export default Quiz;
