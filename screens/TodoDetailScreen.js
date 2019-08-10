import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput, Button,
} from 'react-native';
export default class TodoDetailScreen extends Component {

  

  render() {
    console.log(this.props.navigation)
    const { navigation } = this.props;
    const todoItem = navigation.getParam('data');
    const {
      status, body, id
    } = todoItem;
    return (
      <View style={styles.container}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.body}>{id}: {body}</Text>
      </View>)
  }
}

TodoDetailScreen.navigationOptions = {
 
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    marginTop: 15,
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  status: {
    fontSize:30,
    fontWeight:'500',
    color: '#b3ffff',
    marginHorizontal: 30,
    marginLeft:10,
  },
  body: {
    fontSize:25,
    fontWeight:'100',  
    color: '#b3ffff',
    marginHorizontal: 30,
  },
  
});
