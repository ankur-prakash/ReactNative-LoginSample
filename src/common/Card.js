import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = (props) => {
return (
  <View style={styles.container}>
    {props.children}
  </View>
);
}

const styles = StyleSheet.create({
container:{

    borderWidth: 1.0,
    marginTop: 20,
    shadowOpacity: 0.8,
    elevation: 2,
    margin: 8,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#ddd'
}
});

export {Card} ;
