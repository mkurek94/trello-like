import TaskBoard from "@/components/TaskBoard";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <TaskBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
