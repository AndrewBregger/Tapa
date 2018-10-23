import React, {Component} from 'react';
import Board from './Board'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

type Props = {};
export default class Tapa extends Component<Props> {
    // constructor(n)

    constructor(prop) {
        super(prop)
        this.state = {board: new Array(prop.n) };
        for(var i = 0; i < prop.n; ++i) {
            this.state.board[i] = new Array(prop.m);
        }

        for(var i = 0; i < prop.n; i++) {
            for(var j = 0; j < prop.m; j++) {
                this.state.board[i][j] = new Boolean(false);
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Board board={this.state.board}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: "100%",
        width: "80%",
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ff3f4f'
    }
});