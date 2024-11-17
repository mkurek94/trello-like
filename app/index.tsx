import TaskList from "@/components/TaskList";
import TaskListItem from "@/components/TaskListItem";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <TaskList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})
