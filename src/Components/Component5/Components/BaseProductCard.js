import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  TouchableOpacity,
} from 'react-native';

const BaseProductCard = ({
  onChangeBPC,
  valuesFields,
  pickerItems,
  isFieldsActive,
  pressButton,
  stylesBPC,
  textOnButton,
}) => {
  // eslint-disable-next-line no-shadow
  const mapDataPicker = pickerItems => {
    return pickerItems.map(it => {
      return <Picker.item value={it} label={it} key={it} />;
    });
  };
  console.log(stylesBPC);
  const {title, weight, size, country} = valuesFields;
  return (
    <View style={styles.GoodsCard}>
      <Text style={styles.TextTitle}> Product Info </Text>
      <Text style={styles.TextForFields}> Product title </Text>
      <TextInput
        placeholder={'title'}
        style={[
          styles.InputStyle,
          isFieldsActive ? null : stylesBPC.unableElement,
        ]}
        onChangeText={onChangeBPC('title')}
        maxLength={10}
        editable={isFieldsActive}
        value={title}
      />
      <Text style={styles.TextForFields}> Product weight </Text>
      <TextInput
        placeholder={'weight'}
        style={[
          styles.InputStyle,
          isFieldsActive ? null : stylesBPC.unableElement,
        ]}
        onChangeText={onChangeBPC('weight')}
        maxLength={5}
        editable={isFieldsActive}
        value={weight}
      />
      <Text style={styles.TextForFields}> Product size </Text>
      <TextInput
        placeholder={'size'}
        style={[
          styles.InputStyle,
          isFieldsActive ? null : stylesBPC.unableElement,
        ]}
        onChangeText={onChangeBPC('size')}
        maxLength={8}
        editable={isFieldsActive}
        value={size}
      />
      <Text style={styles.TextForFields}> Сountry of manufacture </Text>

      {isFieldsActive ? (
        <Picker
          selectedValue={country}
          style={styles.Picker}
          onValueChange={onChangeBPC('country')}>
          {mapDataPicker(pickerItems)}
        </Picker>
      ) : (
        <Text style={styles.TexInfo}> {country}</Text>
      )}

      <TouchableOpacity
        style={[
          styles.Button,
          isFieldsActive ? stylesBPC.ableElement : stylesBPC.unableElement,
        ]}
        disabled={!isFieldsActive}
        onPress={pressButton}>
        <Text> {textOnButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BaseProductCard;

const styles = StyleSheet.create({
  GoodsCard: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    height: 690,
  },
  InputStyle: {
    borderWidth: 2,
    width: 320,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#8bf6ff',
  },
  TextTitle: {
    fontSize: 25,
    fontStyle: 'italic',
    padding: 5,
  },
  TextForFields: {
    fontSize: 25,
    alignSelf: 'flex-start',
  },
  Picker: {
    height: 200,
    width: 200,
  },
  ButtonsDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0093c4',
    width: 175,
    height: 65,
    borderRadius: 60,
    margin: 10,
    marginTop: 40,
  },
  TextButton: {
    fontSize: 25,
  },
  VievInfo: {
    flex: 1,
    alignItems: 'center',
  },
  TexInfo: {
    marginTop: 15,
    fontSize: 25,
  },
});
