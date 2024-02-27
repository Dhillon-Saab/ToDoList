import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/Header';
import TaskL from './components/ToDoForm';
import Tasks from './components/ToDoList';


export default function App() {
  
  const [task, setTask] = useState([
    // { taskName: 'Get to Collage And attend lectures', taskId: 1 },
    // { taskName: 'Get to Collage', taskId: 2 }
  ]);

  
  const removeTask=(taskId) => {
    setTask((press) => {return press.filter(task => task.taskId != taskId)});
    
  }
  const updateList = (text) => {
    setTask((newTask) => { return [{ taskName: text, taskId: Math.random().toString() }, ...newTask] });
  }

  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        <TaskL updateList={updateList} />
      </View>

      <View style={styles.list}>
		   <FlatList keyExtractor={(item) => item.taskId} data={task} renderItem={({ item }) => (
        <Tasks item={item} removeTask={removeTask} />

      )} />
	    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },    
  formWrapper:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top:50,
    width: '100%',
    paddingHorizontal: 20,
  },
  list: {
    backgroundColor: 'gray',
    // marginTop: 20,
	  flex:4,
    padding: 10,
  },
  content:{
	  padding: 10,
	  flex: 1,
	  backgroundColor: 'gray',
  }

});
