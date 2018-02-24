import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers'
import {Header,LoginForm} from '../common'
import firebase from 'firebase';

class App extends Component {

componentWillMount(){

  firebase.initializeApp({
      apiKey: "AIzaSyC9Q9uPii5vTCYwUsfSvTnPRumrV_BZwG0",
      authDomain: "auth-80140.firebaseapp.com",
      databaseURL: "https://auth-80140.firebaseio.com",
      projectId: "auth-80140",
      storageBucket: "auth-80140.appspot.com",
      messagingSenderId: "145871084887"
    });
}

 render() {

   return (
     <Provider store={createStore(reducers)}>
    <View>
     <Header />
     <LoginForm />
   </View>
   </Provider>);
 }
}

export default App;
