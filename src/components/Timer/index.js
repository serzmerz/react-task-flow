import React from 'react';
import ReactDOM from 'react-dom';
import timer from 'react-timer-hoc';
import {convertTime} from '../../utils';

function myComponent({ timer }) {

    const stopTimer = () => {
      timer.stop();
    };

    const resumeTimer = () => {
      timer.resume();
    };

    const change = () => {
      console.log('change');
    };

    console.log(timer.tick);

    return (<div>
        <div>Started { convertTime(timer.tick * timer.delay) }.</div>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resumeTimer}>Resume</button>
        </div>
    )
}

export default timer(1000)(myComponent);