//@flow
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CreateCard from './Components/CreateCard';
import {connect} from 'react-redux';
import {saveProductInfoAct} from '../../actions/saveProductInfoAct';
import {useComponent5} from './useComponent5';
import UpdateCard from './Components/UpdateCard';

const Component5App = ({saveProductInfo, countries}) => {
  const {
    stateProduct,
    stateAccess,
    setInfo,
    pressButton,
    pressCreate,
    pressUpdate,
  } = useComponent5(saveProductInfo, countries);

  const {isFieldsActive, isCreateActive, isUpdateActive} = stateAccess;
  const stylesBPC = {
    unableElement: styles.unableElement,
    ableElement: styles.ableElement,
  };
  return (
    <View>
      <View style={styles.ButtonsDirection}>
        <TouchableOpacity
          style={[
            styles.Button,
            isCreateActive ? styles.ableElement : styles.unableElement,
          ]}
          onPress={pressCreate}>
          <Text style={styles.TextButton}> Create </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.Button,
            isUpdateActive ? styles.ableElement : styles.unableElement,
          ]}
          onPress={pressUpdate}>
          <Text style={styles.TextButton}> Update </Text>
        </TouchableOpacity>
      </View>
      {isFieldsActive ? (
        <CreateCard
          setInfo={setInfo}
          stateProduct={stateProduct}
          countries={countries}
          isFieldsActive={isFieldsActive}
          pressButton={pressButton}
          stylesBPC={stylesBPC}
          text={'Save'}
        />
      ) : (
        <UpdateCard
          setInfo={setInfo}
          stateProduct={stateProduct}
          countries={countries}
          isFieldsActive={isFieldsActive}
          pressButton={pressButton}
          stylesBPC={stylesBPC}
          text={'Update'}
        />
      )}
    </View>
  );
};

const mapStateToProps = store => {
  return {
    countries: store.productInfo.countries,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    saveProductInfo: productInfo => dispatch(saveProductInfoAct(productInfo)),
  };
};

const Component5AppContainer = connect(
  mapStateToProps,
  mapDispatchToprops,
)(Component5App);

export default Component5AppContainer;

const styles = StyleSheet.create({
  ButtonsDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 175,
    height: 65,
    borderRadius: 60,
    margin: 10,
  },
  TextButton: {
    fontSize: 25,
  },
  unableElement: {
    backgroundColor: '#7EC7CC',
  },
  ableElement: {
    backgroundColor: '#0093c4',
  },
});
