import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Task } from "./TaskList";

interface TaskListItemProps {
  task: Task
}

const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name="close" size={16} color="gray" />
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
