import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

type Prop = {};
export default class Board extends Component<Prop> {
    constructor(prop, n, m) {
        super(prop);
        this.state = {board: new Array(n) };
        for(var i = 0; i < n; ++i) {
            this.state.board[i] = new Array(m);
        }

        for(var i = 0; i < n; i++) {
            for(var j = 0; j < m; j++) {
                this.state.board[i][j] = new Boolean(false);
            }
        }
    }

    _renderRow = row => {
        return (
            <View>
                { row.forEach(element => {
                    // console.log("Printing element");
                    <Text style={style.elements}>{element ? "True" : "False"}</Text> 
                    })
                }
            </View>
        );
    }

    render() {
        return (
            <View style={style.container}>
                {
                    this.state.board.forEach(this._renderRow)
                }
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    element: {
      fontSize: 20,
      color: 20  
    },
});