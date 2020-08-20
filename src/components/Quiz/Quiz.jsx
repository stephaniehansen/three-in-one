import React, { useState } from 'react';
import styles from "./Quiz.module.scss";

import { TextField, Button } from '@material-ui/core';

const Quiz = () => {
  const ANSWER = "pizza";
  const [userAnswer, setUserAnswer] = useState();
  const [result, setResult] = useState(null);

  const submit = e => {
    e.preventDefault();
    setResult(userAnswer === ANSWER ? true : false)
  }

  const handleChange = e => {
    e.preventDefault();

    console.log(e);
  }

  const getResult = () => result ? "Correct!" : "Incorrect, try again!";

  return (
    <section className={styles.quiz}>
      <h1>Quiz</h1>
      <span className={styles.question}>
          What is an Italian dish with a flat dough base called?
        </span>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formField}>
            <TextField 
              id="answer" 
              label="Enter Answer"
              onInput={e => setUserAnswer(e.target.value.toLowerCase())}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formButton}>
          <Button 
              type="submit"
              variant="contained" 
              color="primary" 
              onClick={submit}>
                Submit
            </Button>
          </div>
        </form>
      </div>
      <span className={styles.quizResult}>
        {result !== null ? getResult() : null}
      </span>
    </section>
  )
}

export default Quiz;

