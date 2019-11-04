import {useState, useCallback} from 'react';

export const useCardInfo = submCreditCard => {
  const initialLoacalState = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
  };
  const [localState, setLocalState] = useState(initialLoacalState);

  const setInfoLocal = useCallback(
    nameField => {
      return value => {
        setLocalState({...localState, [nameField]: value});
      };
    },
    [localState],
  );
  const onSubmit = () => {
    submCreditCard(localState);
  };
  return {setInfoLocal, onSubmit};
};
