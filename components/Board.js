import React, {Component} from 'react';
import Cell from "./Cell";
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

type Prop = {};
export default class Board extends Component<Prop> {
    // constructor(prop, n, m) {
    //     super(prop);
    // }

    // _renderRow = row => {
    //     return (
    //         <View>
    //             { row.forEach(element => {
    //                 // console.log("Printing element");
    //                 <Text style={style.elements}>{element ? "True" : "False"}</Text> 
    //                 })
    //             }
    //         </View>
    //     );
    // }

    render() {
        return (
            <View style={style.container}>
                <View style={style.row}>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </View>
                <View style={style.row}>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </View>
                <View style={style.row}>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 4,
        width:"100%",
        height:"50%",
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        // alignItems: 'baseline',
        backgroundColor: '#554345'
    },
    row: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
});