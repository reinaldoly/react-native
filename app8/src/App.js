import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyAKnY8Fv9y4qtUy059hI8STxhoiAEYLkuA',
            authDomain: 'whatsapp-clone-12793.firebaseapp.com',
            databaseURL: 'https://whatsapp-clone-12793.firebaseio.com',
            projectId: 'whatsapp-clone-12793',
            storageBucket: 'whatsapp-clone-12793.appspot.com',
            messagingSenderId: '508080520208'
          };
          firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
