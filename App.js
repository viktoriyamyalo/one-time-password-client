import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import config from './src/constants/firebaseConfig';
import SignUpForm from "./src/components/SignUpForm";
import SingInForm from "./src/components/SignInForm";
import Divider from "./src/components/common/Divider";


type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
      firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <Divider backgroundColor={'#341f97'}/>
        <SingInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#54a0ff',
    paddingVertical: 30
  },
});
