//@flow
import {SAVE_PRODUCT_INFO} from '../types/types';

export type ProductInfoType = {
  title: string,
  weight: string,
  size: string,
  country: string,
  countries: [string],
};

export const saveProductInfoAct = (productInfo: ProductInfoType) => {
  return {
    type: SAVE_PRODUCT_INFO,
    payload: productInfo,
  };
};
