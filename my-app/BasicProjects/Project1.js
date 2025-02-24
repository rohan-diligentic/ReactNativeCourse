import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function Project1() {

  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function addInputHandler() {
    setGoals((currentGoals) => [...currentGoals, text]);
    // setText('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter here..'
          style={styles.textInput}
          onChangeText={goalInputHandler} value={text}></TextInput>
        <Button title='Add Goal' onPress={addInputHandler} />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView alwaysBounceVertical={true}>
          {goals.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
    width: '60%',
    borderBottomColor: 'green',
    padding: 8
  },
  goalContainer: {
    width: '99%',
    marginTop: 10,
    marginBottom: 15
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  goalText: {
    color: 'white'
  }
});

