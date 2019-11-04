import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {useFiveSecondMessage} from './useFiveSecondMessage';

type Props = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  validationResult: string,
  cardType: string,
  isloading: boolean,
};

const Component2 = ({
  cardNumber,
  expirationDate,
  cvv,
  firstName,
  lastName,
  validationResult,
  isloading,
  cardType,
}) => {
  const {update} = useFiveSecondMessage({
    cardNumber,
    expirationDate,
    cvv,
    firstName,
    lastName,
  });

  if (update && validationResult && !isloading) {
    return (
      <View style={styles.textDirect}>
        <Text style={styles.textStyle}>
          Card info: ************{cardNumber.substr(12, 4)}
        </Text>
        <Text style={styles.textStyle}> Name: {firstName} </Text>
        <Text style={styles.textStyle}> Surname: {lastName}</Text>
        <Text style={styles.textStyle}> CardType: {cardType}</Text>
      </View>
    );
  }

  if (
    update &&
    !isloading &&
    (cardNumber || expirationDate || cvv || firstName || lastName || cardType)
  ) {
    return (
      <View style={styles.textDirect}>
        <Text style={styles.textStyle}> Error </Text>
      </View>
    );
  }

  return null;
};

const mapStateToProps = store => {
  return {
    cardNumber: store.userInfo.cardNumber,
    expirationDate: store.userInfo.expirationDate,
    cvv: store.userInfo.cvv,
    firstName: store.userInfo.firstName,
    lastName: store.userInfo.lastName,
    validationResult: store.userInfo.validationResult,
    isloading: store.userInfo.isloading,
    cardType: store.userInfo.cardType,
  };
};

const Component2Container = connect(mapStateToProps)(Component2);

const styles = StyleSheet.create({
  textDirect: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  textStyle: {
    fontSize: 25,
  },
});

export default Component2Container;
