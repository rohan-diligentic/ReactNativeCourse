import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setText(enteredText)
  }
  function addInputHandler() {
    console.log(text)
    setGoals((currentGoals) => [...goals, text],);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter here..' style={styles.textInput} onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addInputHandler} />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
          {goals.map((goal) => {
            return <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomColor: 'yellow',
    paddingTop: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    width: '80%',
    borderRadius: 10,
    marginRight: 8,
    padding: 8
  },
  goalContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  goalText: {
    color: 'white'
  }

});
