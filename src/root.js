import React, { Component } from 'react';

import App from './AppNavigationState'
import codePush from 'react-native-code-push'

export default class Root extends Component {
    componentDidMount(){
        codePush.sync();
    }

    render() {
        return (
            <App />
        );
    }
}
