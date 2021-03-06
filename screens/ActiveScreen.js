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
import { TODOS } from '../utils/data';
import TodoItem from '../components/TodoItem';


export default class ActiveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TODOS,

    };
  }
  static navigationOptions = {
    title: 'Your Active Todo List',
    headerStyle: {
      backgroundColor: '#1a1a1a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  
  render() {
    const { todoList } = this.state;
    return (<ScrollView contentContainerStyle={styles.container}>
      {
        todoList.map(item => {
          if(item.status === 'Active')
          return (
            <TodoItem key={item.id} data={item}  />
          );
        })
      }

    </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    marginTop: 15,
    paddingVertical: 10,
    justifyContent: 'space-around'
  },
  
});
