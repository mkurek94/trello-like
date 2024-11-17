import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";

const TaskBoard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <TaskList />
    </View>
  );
};

export default TaskBoard;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    }
})