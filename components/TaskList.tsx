import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";

export interface Task {
    description: string;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {description: 'First item'},
        {description: 'Second item'},
    ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>

      <FlatList data={tasks} renderItem={({item}) => (
        <TaskListItem task={item} />
      )} contentContainerStyle={{ gap: 5 }}/>

      
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  }
});
