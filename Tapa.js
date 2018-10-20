import React, {Component} from 'react';
import Board from './Board'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

type Props = {};
export default class Tapa extends Component<Props> {
    // constructor(n)

    constructor(prop) {
        super(prop)
        board = new Board(prop, 3, 3);
    }

    render() {
        return (
            <View style={styles.container}>
                {board.render()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3f4f'
    }
});