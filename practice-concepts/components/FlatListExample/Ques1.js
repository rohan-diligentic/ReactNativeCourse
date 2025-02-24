import { StyleSheet, FlatList, Text, View } from 'react-native'

//Create a FlatList that renders 100 items, each displaying a unique ID 

const Ques1 = () => {

  const getData = () => {
    const data = [];
    for (let i = 0; i <= 100; i++) {
      data.push({ id: i.toString(), Value: `Input no. ${i + 1}` })
    }
    return data;
  }

  const getRenderedData = () => {

  }

  return (
    <View>
      <FlatList data={getData()} renderItem={({ item }) => {
        return (<View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Line - {item.Value}</Text>
        </View>)
      }} keyExtractor={item => item.id}>

      </FlatList>
    </View>
  )
}


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'green',
    marginTop: 20,
    flex: 1
  },
  textStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10
  }
})

export default Ques1;