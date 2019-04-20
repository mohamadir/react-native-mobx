import React, { Component } from 'react'
import {Platform,FlatList ,StyleSheet,TextInput,ToastAndroid, KeyboardAvoidingView,TouchableOpacity,AsyncStorage, Text, View} from 'react-native';
import axios from 'axios'
import { ListItem,List, SearchBar} from 'react-native-elements'



export default class UsersList extends Component {
    constructor(props){
        super(props)

        this.state={
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          query: '',
          error: null,
          refreshing: false
        }
      
     
    }
    componentDidMount(){
      console.log(this.props.navigation.getParam('Mohamd', 'Nothing'))
      const {seed,page}= this.state
      const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`
      this.setState({loading: true})
         axios.get(url).then(response => {
        
          console.log(response.data.results)
          this.setState({data: response.data.results,loading: false})
          
          }).catch(error=>{
            console.log(error)
          })
    }

    renderSeperator = () =>{
      return(
        <View 
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}/>
      );
    }

    renderHeader = () =>{
      return(
        <SearchBar
          placeholder="Type here.." 
          lightTheme
          onChangeText={(query)=>{
              this.setState({query})
          }}
          style={{backgroundColor: '#fff'}}
          round
        />
      );
    }
    renderItem = (item) =>{
      console.log(`IN RENDER ITEM ${item.name} `)
      return(
        <View
        style={{width:'100%',backgroundColor: '#ccc',height: 100}}
        >
          <Text> {item.name} </Text>
        </View>
      );
    }


  render = ()=> {
    return (
          <FlatList
            data={this.state.data}
            renderItem={({item})=>{
              //this.renderItem(item)
               return (<ListItem
                leftAvatar={{source: {uri: item.picture.thumbnail}}}
                title={`${item.name.title} ${item.name.first} ${item.name.last}`}
                subtitle ={`${item.email}`}
                containerStyle={{borderBottomWidth:0}}
                onPress={()=>{
                  ToastAndroid.show('clicked', ToastAndroid.SHORT);
                }}
              />) 
            }}
            keyExtractor={item=>item.email}
            ListHeaderComponent = {this.renderHeader}
            ItemSeparatorComponent={this.renderSeperator}
          /> 

    )
  }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
})
