import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import {Card,CardSection,Button,Spinner} from '../common'
import firebase from 'firebase';

class LoginForm extends Component {

constructor(props) {
  super(props)
  this.state = {email:'',password:'',isLoading:false,error:''}
}

renderActivity() {

    console.log('renderActivity',this.state.isLoading);

    if (this.state.isLoading) {
    return( <Spinner />);
    }
    return(
    <Button style={styles.button} title='Log in Now' onPress={this.loginPressed.bind(this)}/>
    );
}

renderError() {
if(this.state.error) {
  return(<Text style={{color:'red',fontSize: 18, alignSelf: 'center'}}>Authentication Failed!</Text>);
}
}

loginPressed() {

  const {email,password} = this.state;
  this.setState({isLoading:true})
  console.log('logincalled');
  console.log(email,password);
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {

    console.log('login success');
    this.setState({isLoading:false,error:''})

  }).catch(() => {

    console.log('login failed');
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

      console.log('created user');
      this.setState({isLoading:false,error:''})

    }).catch(() => {
      console.log('created user failed!!');
      this.setState({isLoading:false,error:'Authentication Failed'})
    });

  });
}
 
render() {

  const {cellContainer} = styles; //destructing

  return (
    <Card>
      <CardSection>
        <View style={cellContainer}>
          <Text style={{flex:1}}>Email</Text>
          <TextInput
            value={this.state.email}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'email-address'}
          onChangeText={text => this.setState({email:text})}
          style={{marginLeft:8,marginRight:8,flex:3}}
          placeholder='abc@gmail.com'
        />
        </View>
      </CardSection>
      <CardSection>
        <View style={cellContainer}>
          <Text style={{flex:1}}>Password</Text>
          <TextInput
            secureTextEntry
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.password}
          onChangeText={text => this.setState({password:text})}
            style={{marginLeft:8,marginRight:8,flex:3}}
            placeholder='atleast 6 characters'
           />
        </View>
        {this.renderError()}
      </CardSection>
      <CardSection style={cellContainer}>
        {this.renderActivity()}
      </CardSection>
    </Card>
  );
}
}

const styles = StyleSheet.create({

  cellContainer:{
    flexDirection:'row',
    height: 44,
    alignItems:'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  button:{
    margin: 8,
    height: 40,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    borderRadius: 8
  }
});
export {LoginForm};
