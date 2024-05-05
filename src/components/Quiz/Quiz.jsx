import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

function Quiz() {

    let [index,setIndex] = useState(0)
    let [qus,setQus] = useState(data[index])
    let [lock,setLock] = useState(false)
    let [score,setScore] = useState(0)
    let [result,setResult] = useState(false )

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    let option_array = [option1,option2,option3,option4]

    const next = ()=>{
        if (lock === true) {
            if (index === data.length-1) {
                setResult(true)
                return 0
            }
            setIndex(++index)
            setQus(data[index])
            setLock(false)
            option_array.map((Option)=>{
                Option.current.classList.remove("wrong")
                Option.current.classList.remove("correct")
                return null
            })
        }
    }

    const checkAns =(e,ans)=>{
        if (lock == false) {
            if (qus.ans===ans) {
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev=>prev+1) 
            }else{
                e.target.classList.add("wrong")
                setLock(true)
                option_array[qus.ans-1].current.classList.add("correct")
            }
        }
        
    }
    const reset = ()=>{
        setIndex(0)
        setQus(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
    }

  return (
    <div className='container'>
        <h1>Quiz</h1>
       
        {result?<></>
        :
        <><h2>{index+1}.{qus.question}</h2>
        <ul>
            <li ref={option1} onClick={(e)=>checkAns(e,1)}>{qus.option1}</li>
            <li ref={option2} onClick={(e)=>checkAns(e,2)}>{qus.option2}</li>
            <li ref={option3} onClick={(e)=>checkAns(e,3)}>{qus.option3}</li>
            <li ref={option4} onClick={(e)=>checkAns(e,4)}>{qus.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className='index'>{index+1} of {data.length} Questions</div></>}
        {result?
        <>
        <div className='result'>
            <h2>You scored {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button>
        </div>
        </>
        :
        <></>
        }
    </div>
  )
}

export default Quiz