import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

type Prop = {};
export default class Cell extends Component<Prop> {
    constructor(props) {
        super(props)
        this.state = {color: 'white', active: false};
    }

    updateCell() {
        console.log("Cell was pressed");
        
        this.setState(res => {
            if(this.state.active){
                return {color: 'white', active: false};
            }
            else {
                return {color: 'red', active: true};
            }
        });
    }

    render() {
        // value = this.props.value;
        return (
                <View>
                        <TouchableWithoutFeedback onPress={this.updateCell.bind(this)}>
                             <View style={{
                        // flex: 1,
                        borderColor: 'black',
                        backgroundColor: this.state.color,
                        borderWidth: 2,
                        width: 50,
                        height: 50,
                        // opacity: 5
                        }}>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
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