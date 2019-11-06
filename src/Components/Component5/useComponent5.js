import {useState, useCallback} from 'react';

export const useComponent5 = (saveProductInfo, countries) => {
  const initialStateProduct = {
    title: '',
    weight: '',
    size: '',
    country: countries[0],
  };
  const initialStateAccess = {
    isCreateActive: false,
    isUpdateActive: false,
    isFieldsActive: true,
  };

  const [stateProduct, setStateProduct] = useState(initialStateProduct);
  const [stateAccess, setStateAccess] = useState(initialStateAccess);

  const setInfo = useCallback(
    nameField => {
      return value => {
        setStateProduct({...stateProduct, [nameField]: value});
      };
    },
    [stateProduct],
  );

  const pressButton = useCallback(() => {
    setStateAccess({
      ...stateAccess,
      isFieldsActive: false,
      isUpdateActive: true,
    });
    saveProductInfo(stateProduct);
  }, [stateAccess, saveProductInfo, stateProduct]);

  const pressCreate = useCallback(() => {
    setStateProduct(initialStateProduct);
    setStateAccess({
      ...stateAccess,
      isUpdateActive: true,
      isCreateActive: false,
    });
  }, [stateProduct.isCreateActive, stateProduct.isUpdateActive]);

  const pressUpdate = useCallback(() => {
    setStateAccess({
      ...stateAccess,
      isUpdateActive: false,
      isCreateActive: true,
    });
  }, [stateProduct.isCreateActive, stateProduct.isUpdateActive]);

  return {
    stateProduct,
    stateAccess,
    setInfo,
    pressButton,
    pressCreate,
    pressUpdate,
  };
};
