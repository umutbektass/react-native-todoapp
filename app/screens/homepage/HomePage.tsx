import {
  Pressable,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "./Style";

type CourseGoal = {
  id: number;
  text: string;
};

const HomePage = () => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [courseGoals, setCourseGoal] = useState<CourseGoal[]>([]);
  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };
  const addGoalHandler = () => {
    setCourseGoal((currentCourseGoals) => {
      const newId: number =
        currentCourseGoals.length > 0
          ? currentCourseGoals[courseGoals.length - 1].id + 1
          : 1;
      return [...currentCourseGoals, { id: newId, text: enteredGoalText }];
    });

    setEnteredGoalText("");
  };
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.goalItem} key={item.id}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    );
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
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#7AB2D3" : "#4A628A" },
            styles.button,
          ]}
          onPress={addGoalHandler}
        >
          <Text style={styles.buttonText}> ADD GOAL </Text>
        </Pressable>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
         data={courseGoals}
          renderItem={({item})=>{
            return (
              <View style={styles.goalItem} key={item.id}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
            )
          }}
          keyExtractor={item=>item.id.toString()}
          />
      </View>
    </View>
  );
};

export default HomePage;
