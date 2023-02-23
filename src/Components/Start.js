import React, { useContext, useState } from 'react';
import { QuizContext } from '../Context/QuizHolder';
import "../Components/StartPage.css";

export default function Start() {
    const { setStart } = useContext(QuizContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = event => {
      setName(event.target.value);
    //   console.log('value is:', event.target.value);
    };
    const handleEmailChange = event => {
      setEmail(event.target.value);
    //   console.log('value is:', event.target.value);
    };
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    // console.log(localStorage)
    return (

        <div>
        <div className="headingContainer">
            <h1 className="text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50"><span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#3A1078] to-[#2F58CD] lg:inline">Examopedia</span></h1>                       
        </div>
        <hr />
        <div className="assessmentDetailsContainer">
            <h2 className='welcomeNote'>Welcome to Assessment</h2>
            <hr />
            <h3 className='welcomeInstruction'>Instructions</h3>
            <hr />
            <ol>
                <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum aperiam consectetur officia adipisci dicta enim minima. Possimus voluptates corrupti ea quaerat maxime vitae maiores hic asperiores sed eum! At, ipsa consectetur?</li>
                <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum aperiam consectetur officia adipisci dicta enim minima. Possimus voluptates corrupti ea quaerat maxime vitae maiores hic asperiores sed eum! At, ipsa consectetur?</li>
                <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum aperiam consectetur officia adipisci dicta enim minima. Possimus voluptates corrupti ea quaerat maxime vitae maiores hic asperiores sed eum! At, ipsa consectetur?</li>
                <li>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum aperiam consectetur officia adipisci dicta enim minima. Possimus voluptates corrupti ea quaerat maxime vitae maiores hic asperiores sed eum! At, ipsa consectetur?</li>
                <li>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum aperiam consectetur officia adipisci dicta enim minima. Possimus voluptates corrupti ea quaerat maxime vitae maiores hic asperiores sed eum! At, ipsa consectetur?</li>
            </ol>
        </div>

            <div className="candidateInfo">
                <span className='inputContainer'>Enter Your Name: <br /><input type="text"  className="inputFieldContainer" onChange={handleNameChange} placeholder='Enter Your Full Name' /></span>
                <span className='inputContainer'>Enter Your Email ID: <br /> <input type="email" className="inputFieldContainer" onChange={handleEmailChange} placeholder='Enter Your Email Id' /></span>
            </div>

            <div className="startBtn">
                <button className='startBtnMain text-white bg-gradient-to-br from-[#3A1078] to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[100%]' onClick={() => setStart(true)}>Start</button>
            </div>
        </div>
    )
}
