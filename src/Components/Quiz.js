import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import "../Components/QuizPage.css";

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    return (
        <>
        <div className="headingContainer">
            <h1 className="text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50"><span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#3A1078] to-[#2F58CD] lg:inline">Examopedia</span></h1>                       
        </div>
        <hr />
        <br />

        <div className="studentInformation">
            <span>Name: <b>{name}</b></span>
            <span>Email ID: <b>{email}</b></span>
        </div>
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
        </>

    )
    
}


const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }

    //To print in Your answer Div
    // console.log(ans)
    if(ans==="a"){
        console.log(quizzes[current].a);
    }
    else if(ans==="b"){
        console.log(quizzes[current].b);
    }
    else if (ans==="c"){
        console.log(quizzes[current].c)
    }
    else{
        console.log(quizzes[current].d)
    }


    return (
        <>

        <div className="mainAssessmentContainer">
            <div className="answerContainer w-[40%] border shadow-lg rounded-md overflow-hidden mr-5 bg-[rgb(239,245,245)]">
                <div className=' border-2 text-4xl'>Your Answer's</div>
                <br />
                <div className="answerAppend">
                    <ol>
                        <li>1 Answer</li>
                        <li>2 Answer</li>
                        <li>3 Answer</li>
                        <li>4 Answer</li>
                        <li>5 Answer</li>
                    </ol>
                </div>

            </div>
            <div className='w-[70%] border shadow-lg rounded-md overflow-hidden'>
                <div className='text-4xl flex items-center justify-center'>Attempt Your Question Here</div>
                <br />
                <div className='p-2 text-3xl'> {current + 1}) {quizzes[current].question}</div>
                <div className='grid grid-cols-2 mt-3'>
                    <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
                    <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
                    <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
                    <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-white cursor-pointer bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-2' onClick={() => setAns("")}>Reset</div>
                    <div className='text-white cursor-pointer bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-2' onClick={saveHandler}>Save & Next</div>
                    <div className='text-white cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 mt-2' onClick={() => setExit(true)}>Exit</div>
                </div>
            </div>  
        </div>
        </>
    )
}