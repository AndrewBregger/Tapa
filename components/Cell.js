import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Prop = {};
export default class Cell extends Component<Prop> {
    render() {
        // value = this.props.value;
        return (
                    <View style={styles.box}/>
                );
    }
}

const styles = StyleSheet.create({

    box: {
        // flex: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 2,
        width: 50,
        height: 50,
        // opacity: 5
    }
});