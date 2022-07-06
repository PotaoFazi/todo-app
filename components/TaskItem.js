import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const TaskItem = (props) => {
  return (
    <View style={styles.rowItem}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
        <FontAwesome
          style={{ paddingRight: 10 }}
          name="square"
          size={24}
          color="#4bb3f5"
        />
        <Text>{props.name} </Text>
      </View>
      <View>
        <Entypo name="circle" size={15} color="#4bb3f5" />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  rowItem: {
    marginVertical: 10,
    marginHorizontal: "5%",
    maxWidth: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
