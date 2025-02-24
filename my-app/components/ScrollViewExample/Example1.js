import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native';

//Data
const DATA = [
  {
    id: "1",
    title: "Data Structures"
  },
  {
    id: "2",
    title: "STL"
  },
  {
    id: "3",
    title: "C++"
  },
  {
    id: "4",
    title: "Java"
  },
  {
    id: "5",
    title: "Python"
  },
  {
    id: "6",
    title: "CP"
  },
  {
    id: "7",
    title: "ReactJs"
  },
  {
    id: "8",
    title: "NodeJs"
  },
  {
    id: "9",
    title: "MongoDb"
  },
  {
    id: "10",
    title: "ExpressJs"
  },
  {
    id: "11",
    title: "PHP"
  },
  {
    id: "12",
    title: "React Native"
  },
  {
    id: "13",
    title: "MySql"
  },
  {
    id: "14",
    title: "MongoDb"
  },
  {
    id: "15",
    title: "PostGre"
  },
];


const Example1 = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headText}>Example 1 of ScrollView</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter text...' style={styles.inputBox}></TextInput>

        <Button title='Add Task' />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {DATA.map((item) => {
          return <View style={styles.scrollText} key={item.id}>
            <Text>{item.title}</Text>
          </View>
        })}
      </ScrollView>

    </>

  )
}


const styles = StyleSheet.create({
  header: {
    marginLeft: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    width: '94%',
    borderRadius: 10
  },
  headText: {
    textAlign: 'center',
    fontSize: 17
  },
  inputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    width: '94%',
    marginLeft: 10
  },
  scrollText: {
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginTop: 10,
    borderRadius: 8
  },
  scrollContainer: {
    width: '94%',
    marginLeft: 10,
    marginBottom: 10
  }
})
export default Example1;