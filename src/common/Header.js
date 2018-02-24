import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Header = () => {
return(
  <View style={styles.container}>
    <Text style={styles.text}>Login</Text>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f8f8f8',
    shadowOpacity:0.8,
    shadowOffset:{width:0,height:2},
    shadowColor:'#ddd',
    elevation:2,
    height:60,
    paddingTop:15,
    justifyContent:'center', //vertical
    alignItems:'center' //horizontal
  },
  text:{
    fontSize:20
  }
});

export {Header} ;
