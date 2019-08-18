import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    // uid should be typically called "key"
    setCourseGoals([...courseGoals, { uid: Math.random().toString(), value: goalTitle}]);
  };

  const onDeleteGoalHandler = () => {
    return console.log("On Delete");
  };

  return (
    <View style={styles.screen} >
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={onDeleteGoalHandler} />}
        keyExtractor={(item, index) => item.uid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
