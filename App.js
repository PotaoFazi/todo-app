import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import ToDoScreen from "./screens/ToDoScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoScreen title="Today's tasks" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6ec",
  },
});
