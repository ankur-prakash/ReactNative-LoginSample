import React from 'react'; // for jsx
import {TouchableOpacity,Text} from 'react-native';

const Button = ({style,title,onPress}) => {

return (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={{alignSelf:'center'}}>{title}</Text>
  </TouchableOpacity>
);

}

export {Button};
