import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const TaskDetails = () => {
  const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Id: {id}</Text>
    </View>
  )
}

export default TaskDetails

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        color: "#FFF",
        fontSize: 20
    }
})