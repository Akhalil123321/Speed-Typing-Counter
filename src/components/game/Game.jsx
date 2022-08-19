import React from "react"
import { motion } from "framer-motion"  
import ReactHooks from "../reactHooks/ReactHooks"
import './game.css'
const Render = () => {
    const{
        inputRef, 
        text,
        timerStart,
        time,
        count,
        counterC,
        transition,
        startTiming,
        handleChange
    }=ReactHooks()
    return(
        <div>
            <h1>How fast do you type?</h1>
            <textarea
            ref={inputRef}
            onChange={handleChange}
            value={text}
            spellcheck="false"
            disabled={!timerStart}
            />
            <h4>Time remaining: {time}</h4>
            <button disabled={timerStart} className='start-btn' onClick={startTiming}>Start</button>
            <h1 id="word-count"> </h1>
            <motion.div
                key={count}
                className={counterC}
                initial={{opacity:0, fontSize:'5vw'}}
                animate={{opacity:1, fontSize:'18vw'}}
                exit= {{opacity:0, x:100}}
                transition={transition}
                >{count}
            </motion.div>
        </div>
        
    )
}

export default Render