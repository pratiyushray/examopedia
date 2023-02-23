import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
// import { useEffect, useState } from "react";

// import Loader from "../src/Components/Loader";


function App() {
  const { start, exit } = useContext(QuizContext);
  // const [loading,setLoading]=useState(true);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },3000)
  // })
  return (
    <>
    {/* {
      loading?
      <Loader/>
      :
      <Start/>
    } */}
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
                // console.log("none")
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default App;
