import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./Style";

const HomePage = () => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [courseGoals, setCourseGoal] = useState<string[]>([]);
  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };
  const addGoalHandler = () => {
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
  };
  return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            value={enteredGoalText}
            onChangeText={goalInputHandler}
          />
          <Pressable style={({pressed})=> [{backgroundColor: pressed ? '#7AB2D3'  :  '#4A628A'  },styles.button]} onPress={addGoalHandler}>
            <Text style={styles.buttonText}> ADD GOAL </Text>
          </Pressable>
        </View>
        <View style={styles.goalsContainer}>

        <ScrollView >
          {courseGoals.length > 0 ? (
            courseGoals.map((item) => (
              <View style={styles.goalItem} key={item}>
                <Text style={styles.goalText}>{item}</Text>
              </View>
            ))
          ) : (
            <Text>List of goals...</Text>
          )}
        </ScrollView>
        </View>

      </View>
  );
};

export default HomePage;
