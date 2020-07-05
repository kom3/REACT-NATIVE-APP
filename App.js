import React, { useState, useEffect } from 'react';
import { Button, View, Text, StatusBar, SafeAreaView, ScrollView,
  TouchableOpacity, TextInput, FlatList, SectionList} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


import ReadNote from './components/readnote';
import styles from './appstyle'

function HomeScreen({ navigation }) {
  const [noteList, updatenotelist] = useState([])

  useEffect(() => {
    alert('componentDidMount');
    fetch("https://api.github.com/users/kom3/repos")
      .then(response => response.json())
      .then((responseJson) => {
        num_of_repos = responseJson.length
        repo_list = []
        for (i = 0; i < num_of_repos; i++) {
          repo_list.push({ "id": i, "title": responseJson[i]["name"] })

        }
        console.log(repo_list)
        updatenotelist(repo_list)
      })
      .catch(error => console.log(error))
  }, []);

  // const [notes_scroll_list, HandleScolllist] = useState([])
  var notes_scroll_list = ''
  for (i = 0; i < noteList.length; i++) {
    notes_scroll_list += i + '. ' + noteList[i] + '\n'
  }
  console.log(notes_scroll_list)

  const Item = ({ title }) => {
    return (
      <TouchableOpacity onPress={() =>{alert(`Opening `+title)}} >
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="blue" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.flexdisplay}>
          <TextInput
            style={styles.serachbar}
            placeholder='Search by git user name...'
          />
          <FontAwesome style={{fontSize:18}} name='search' />
          </View>
          <FlatList
            data={noteList}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text style={styles.bigBlue}>Developer: Kom's Creations</Text>
      <Text style={styles.red, styles.smfont}>Contact: komsitsolutions@gmail.com</Text>
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to home"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Contact Us" component={NotificationsScreen} />
        <Drawer.Screen name="Readnote" component={ReadNote} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}