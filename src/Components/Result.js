import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
// import {image} from "../Assets/congratulations.png";

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <>
        <div>
            <img src="../Assets/congratulations.png" alt="" />
        </div>
        
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='text-white cursor-pointer bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-2'>Play again</button>
            </div>
        </div>
        </>
    )
}
