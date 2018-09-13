import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import functions from '../constants/googleCloundFunctions';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class SingInForm extends Component {
    state = {
        phone: '',
        code: '',
        error: ''
    };

    handleSubmit = async () => {
        const { phone, code } = this.state;
        try {
            let response = await axios.post(functions.verifyOneTimePassword, { phone, code });
            const { token } = response.data;
            firebase.auth().signInWithCustomToken(token);
        } catch (err) {
            this.setState({ error: 'Oops! Code invalid'})
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.formTitle}>SIGN IN</Text>
                <View style={{ marginVertical: 10 }}>
                    <FormLabel labelStyle={styles.formLabel}>Phone</FormLabel>
                    <FormInput inputStyle={styles.formInput} onChangeText={phone => this.setState({ phone })}/>
                    <FormLabel labelStyle={styles.formLabel}>Code</FormLabel>
                    <FormInput inputStyle={styles.formInput} onChangeText={code => this.setState({ code })}/>
                </View>
                <Button backgroundColor={"#341f97"} color={"#fff"} onPress={this.handleSubmit} title={"Submit"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formLabel: {
        color: '#341f97',
        fontWeight: '600'
    },
    formInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        color: '#341f97'
    },
    formTitle: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '900'
    }
});

SingInForm.propTypes = {};

export default SingInForm;
