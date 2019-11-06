//@flow
import React, {Component} from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
// import Component1Container from '../Component1';
// import Component2Container from '../Component2';
// import Component4Container from '../Component4';
import Component5App from '../Component5';
type Props = {};
type State = {};
class FormApp extends Component<Props, State> {
  render() {
    return (
      <ScrollView style={styles.ViewApp}>
        <SafeAreaView>
          {/* <Component1Container />
        <Component2Container /> */}
          {/* <Component4Container /> */}
          <Component5App />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
export default FormApp;

const styles = StyleSheet.create({
  ViewApp: {
    flex: 1,
    backgroundColor: '#4fc3f7',
  },
});
