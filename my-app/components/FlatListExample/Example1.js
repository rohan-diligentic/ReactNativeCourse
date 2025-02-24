import { FlatList, View, Text, TextInput, StyleSheet } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Data Structures",
  },
  {
    id: "2",
    title: "STL",
  },
  {
    id: "3",
    title: "C++",
  },
  {
    id: "4",
    title: "Java",
  },
  {
    id: "5",
    title: "Python",
  },
  {
    id: "6",
    title: "CP",
  },
  {
    id: "7",
    title: "ReactJs",
  },
  {
    id: "8",
    title: "NodeJs",
  },
  {
    id: "9",
    title: "MongoDb",
  },
  {
    id: "10",
    title: "ExpressJs",
  },
  {
    id: "11",
    title: "PHP",
  },
  {
    id: "12",
    title: "MySql",
  },
  {
    id: "13",
    title: "PHP",
  },
  {
    id: "14",
    title: "MySql",
  },
  {
    id: "15",
    title: "PHP",
  },
  {
    id: "16",
    title: "MySql",
  },
];

export default function Example1() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlatList Example</Text>
      </View>

      {/* FlatList */}
      <View style={styles.flatStyle}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.flatView}>
                <Text style={styles.flatText}>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={true}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    borderWidth: 2,
    borderColor: "green",
    width: "94%",
    borderRadius: 10,
    marginTop: 30,
    padding: 10,
    marginLeft: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
  },
  flatView: {
    width: "94%",
    marginLeft: 10,
    backgroundColor: "yellow",
    marginTop: 10,
    paddingTop: 14,
  },
  flatText: {
    color: "black",
  },
  flatStyle: {
    flex: 1
  },
});
