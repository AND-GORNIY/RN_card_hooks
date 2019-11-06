import React from 'react';
import {View} from 'react-native';
import BaseProductCard from './BaseProductCard';

const UpdateCard = ({
  setInfo,
  pressButton,
  stateProduct,
  isFieldsActive,
  countries,
  stylesBPC,
  text,
}) => {
  return (
    <View>
      <BaseProductCard
        onChangeBPC={setInfo}
        valuesFields={stateProduct}
        pickerItems={countries}
        isFieldsActive={isFieldsActive}
        pressButton={pressButton}
        stylesBPC={stylesBPC}
        textOnButton={text}
      />
    </View>
  );
};

export default UpdateCard;
