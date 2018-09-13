import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({ backgroundColor }) => {
    return (
       <View style={[ styles.divider, { backgroundColor }]} />
    );
}

const styles = StyleSheet.create({
    divider: {
        width: '90%',
        marginVertical: 30,
        marginHorizontal: 10,
        height: 2
    }
});

export default Divider;
