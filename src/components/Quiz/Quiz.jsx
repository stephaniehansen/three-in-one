import React, { useState } from 'react';
import styles from "./Quiz.module.scss";

const Quiz = () => {
  const ANSWER = "pizza";
  const [userAnswer, setUserAnswer] = useState();
  const [result, setResult] = useState(null);

  const submit = e => {
    e.preventDefault();
    setResult(userAnswer === ANSWER ? true : false)
  }

  const getResult = () => result ? "Correct!" : "Incorrect, try again!";

  return (
    <>
      <h1>Quiz</h1>
      <form>
        <p>What is an Italian dish with a flat dough base called?</p>
        <input type="text" name="answer" id="answer" onInput={e => setUserAnswer(e.target.value.toLowerCase())} />
        <input type="submit" value="Submit" onClick={submit}/>
      </form>
      <p>{result !== null ? getResult() : null}</p>
    </>
  )
}

export default Quiz;
