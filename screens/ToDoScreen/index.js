import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TaskItem from "../../components/TaskItem";

const ToDoScreen = (props) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const showAlert = () => {
    Alert.alert("Error adding task", "Field Empty");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <ScrollView style={{ maxHeight: "80%" }}>
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <TaskItem name={item} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset="30"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5%",
            backgroundColor: "#e6e6ec",
          }}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Create new task"
            onChangeText={(text) => setTask(text)}
            value={task}
          />
          {task ? (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 100,
              }}
              onPress={() => handleAddTask()}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 8,
                borderRadius: 100,
              }}
              onPress={showAlert}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ToDoScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    paddingLeft: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  textInput: {
    width: "85%",
    backgroundColor: "white",
    paddingVertical: "2%",
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 18,
  },
});
