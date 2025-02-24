import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function GoalsProject() {

  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  // Handles input text from the user
  const handleInput = (textEntered) => {
    setText(textEntered);
  }

  // Add goal to the list
  const addGoal = () => {
    if (text.trim()) { // Prevent adding empty goals
      setGoals((currentGoals) => [...currentGoals, text]);
      setText(''); // Clear input after adding goal
    }
  }

  // Delete goal based on the index
  const deleteGoal = (index) => {
    // Create a new array excluding the goal at the specified index
    const newGoals = goals.filter((_, goalIndex) => goalIndex !== index);
    setGoals(newGoals);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Set the Goals</Text>
      </View>

      {/* Input Box for goals setting */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter text here...'
          style={styles.inputBox}
          onChangeText={handleInput}
          value={text} // Bind the input text to the state
        />
        <TouchableOpacity style={styles.button} onPress={addGoal}>
          <Text style={styles.buttonText}>Add Goal</Text>
        </TouchableOpacity>
      </View>

      {/* List of Goals */}
      <View style={styles.listContainer}>
        <Text style={styles.goalList}>List of Goals</Text>
        <ScrollView>
          {goals.map((goalName, index) => {
            return (
              <View style={styles.goalView} key={index}>
                <Text style={styles.goalText}>{goalName}</Text>
                {/* Display the delete button in a row */}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteGoal(index)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'coral'
  },
  header: {
    padding: 15,
    marginTop: 28,
    width: '96%',
    marginLeft: 7,
    borderRadius: 18,
    backgroundColor: 'coral'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',

  },

  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '96%',
    marginLeft: 8,
    justifyContent: 'space-between'
  },
  inputBox: {
    padding: 8,
    marginTop: 10,
    width: '71%',
    marginBottom: 7,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 9,
    marginTop: 3,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  goalView: {
    width: '96%',
    borderRadius: 8,
    marginLeft: 7,
    marginTop: 7,
    backgroundColor: 'lightgrey',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalText: {
    textAlign: 'left',
    flex: 1,
    color: 'black'
  },
  goalList: {
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    width: '96%',
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    backgroundColor: 'lightgreen',
    borderBottomColor: 'black',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 10,
    marginLeft: 10,
  }
});
