import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import ListaItens from './src/components/ListaItens'

export default class app4 extends Component {
  render() {
    return (
      <View style={styles.container}>
       <ListaItens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});

AppRegistry.registerComponent('app4', () => app4);
