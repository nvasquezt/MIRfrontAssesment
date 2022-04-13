/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTimer } from 'react-timer-hook';
import PropTypes from 'prop-types';

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes} = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div>
      <span>0{minutes}</span>:{seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}
      {seconds === 0 && minutes === 0 ? <span>Time's up!</span>: null}
    </div>

  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + Math.floor(Math.random() * 300));
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

MyTimer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
};


