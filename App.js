import React, { useState } from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // uid should be typically called "key"
    setCourseGoals([...courseGoals, { uid: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const onDeleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== goalId);
    });
  };

  return (
    <View style={styles.screen} >
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} />
      <FlatList
        data={courseGoals}
        renderItem={
          itemData => (
            <GoalItem
              id={itemData.item.uid}
              title={itemData.item.value}
              onDelete={onDeleteGoalHandler}
            />
            )
        }
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
