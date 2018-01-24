//Import
import React, { Component } from 'react';
import { View, Image } from 'react-native';

const topo = require('../../imgs/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={topo} />
            </View>
        );
    }
}

export default Topo;
