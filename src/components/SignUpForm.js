import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import functions from '../constants/googleCloundFunctions';
import axios from 'axios';
import PropTypes from 'prop-types';

class SignUpForm extends Component {
    state = { phone: '', error: '' };

    handleSubmit = async () => {
        const { phone } = this.state;
        console.log(phone);
        try {
            await axios.post(functions.createUser, { phone });
            await axios.post(functions.requestOneTimePassword, { phone });
        } catch (err) {
            this.setState({ error: 'Something went wrong '})
        }

    }
    render() {
        return (
            <View>
                <Text style={styles.formTitle}>SIGN UP</Text>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel labelStyle={styles.formLabel}>Phone</FormLabel>
                    <FormInput inputStyle={styles.formInput} onChangeText={phone => this.setState({ phone })} />
                </View>
                <Button title="Submit" onPress={this.handleSubmit} backgroundColor={"#341f97"} color={"#fff"}/>
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
})

SignUpForm.propTypes = {};

export default SignUpForm;
