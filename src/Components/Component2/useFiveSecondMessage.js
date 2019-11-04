import {useState, useEffect} from 'react';

export const useFiveSecondMessage = userInfo => {
  const [update, setUpdate] = useState(false);
  const [timerIdState, setTimerIdState] = useState(undefined);

  const {cardNumber, expirationDate, cvv, firstName, lastName} = userInfo;

  const startTimer = () => {
    const timerID = setTimeout(() => {
      setUpdate(false);
    }, 5000);

    setUpdate(true);
    setTimerIdState(timerID);
  };
  useEffect(() => {
    if (!update) {
      return startTimer();
    }
    clearTimeout(timerIdState);
    startTimer();

    return () => clearTimeout(timerIdState);
  }, [cardNumber, expirationDate, cvv, firstName, lastName]);

  return {update};
};
