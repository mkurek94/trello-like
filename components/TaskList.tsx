import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";

export interface Task {
  description: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { description: "First item" },
    { description: "Second item" },
  ]);

  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    setTasks([...tasks, { description: newTask }]);
    setNewTask("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo</Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
        contentContainerStyle={{ gap: 5 }}
      />

      <TextInput
        placeholder="New task"
        placeholderTextColor="gray"
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: "#FFF",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});
