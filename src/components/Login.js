import React, {Component} from 'react';
import {Platform, StyleSheet,TextInput,ToastAndroid,KeyboardAvoidingView,TouchableOpacity,AsyncStorage, Text, View} from 'react-native';



export default class Login extends Component{

  static navigationOptions = {
    header: null
  }
  
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: ""
    }
  }
  _loadInitialState = async () =>{
    var value = await AsyncStorage.getItem('user')
    if(value!== null){
      this.props.navigation.navigate('Profile')
    }
  }
  componentDidMount() {
    this._loadInitialState().done();
  }

  login= ()=>{
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);

    this.props.navigation.navigate('Profile',{
      Mohamd: 'mohamed'
    })

    // axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
    //   console.log(response)
    // }).catch(error=>{
    //   console.log(error)
    // })
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

      
      <View style={styles.container} >
            <Text style={styles.header}>Login</Text>
            <TextInput style={styles.textInput} placeholder='User Name'
            onChangeText={(value)=> this.setState({username: value})}
            underlineColorAndroid='transparent'
            />
             <TextInput style={styles.textInput} placeholder='Password'
            onChangeText={(value)=> this.setState({password: value})}
            underlineColorAndroid='transparent'
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>this.login()}
                >
                  <Text>Log In </Text>
                </TouchableOpacity>
            
       </View>
       </KeyboardAvoidingView>
    );
  }


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper:{
    flex: 1
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  btn:{
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center'
  }
});
