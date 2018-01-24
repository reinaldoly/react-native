import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          if (route.id === 'a') {
            return (<CenaPrincipal />);
          }
          if (route.id === 'b') {
            return (<CenaClientes />);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
