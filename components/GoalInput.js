import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import GoalItem from "./GoalItem";

const GoalInput = props => {
  const [enteredGoal, SetEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    SetEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    SetEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter text"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonSize}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonSize}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  buttonSize: {
    width: "40%"
  }
});

export default GoalInput;
