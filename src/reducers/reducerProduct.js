import {SAVE_PRODUCT_INFO} from '../types/types';
import type {ProductInfoType} from '../actions/saveProductInfoAct';

type ProductAction = {
  type: string,
  payload: ProductInfoType,
};

const initialState: ProductInfoType = {
  title: '',
  weight: '',
  size: '',
  country: '',
  countries: ['USA', 'UA', 'India', 'GE'],
};

export const reducerProduct = (
  state: ProductInfoType = initialState,
  action: ProductAction,
) => {
  switch (action.type) {
    case SAVE_PRODUCT_INFO:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
