/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
function States(){
    const [text, setText] = React.useState("")
    const [time, setTime] = React.useState(15)
    const [timerStart, setTimerStart] = React.useState(false)
    const [counter, setCounter] =React.useState(false)
    const [count, setCount] =React.useState(3)
    const [wordCount,setWordCount] =React.useState(0)
    const counterC = counter ? 'counter':'counter-off'
    const transition = {type: 'spring', duration: .5}
    const inputRef = React.useRef(null)
    //start game
    const startTiming = () => {
        setCounter(true)
        restart()
        setTimeout(() => setCount(2) , 1000)
        setTimeout(() => setCount(1) , 2000)
        setTimeout(() => setCount('Go') , 3000)
        setTimeout(() => setCounter(false) , 4000)
        setTimeout(()=> setTimerStart(true) , 4200)
        setTimeout(()=> inputRef.current.focus() , 4300)
        }
    //restart game 
    const restart =() => {
        setText('')
        setTime(15)
        setCount(3)
        setWordCount(0)
        document.getElementById('word-count').textContent = ''
    }
    // word counter
        const countWords =(str) => {
            const arr = str.split(' ');
            return arr.filter(word => word !== '').length;
        }
        const handleChange = (e) => {
            const {value} = e.target
            setText(value)
        }
    //Timer
        React.useEffect(() => {
            if(time > 0 && timerStart){
                setTimeout(() => {
                    setTime(time => time - 1)
                }, 1000)} 
            else {
                    setWordCount(countWords(text))
                    setTimerStart(false)
                    document.getElementById('word-count').textContent = `Word count: ${wordCount}`
            }
            }, [time, timerStart])
    return{
        inputRef, 
        text,
        timerStart,
        time,
        wordCount,
        count,
        counterC,
        transition,
        startTiming,
        handleChange
    }
}
export default States