import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [text, setText] = useState('');
  const [getValue, setGetValue] = useState('');
  const saveValue = () => {
    if(text){
      AsyncStorage.setItem('asyncdemo', text);
      setText('');
      alert('Data is saved');
    } else {
      alert('Please enter some data');
    }
  }
  const showValue = () => AsyncStorage.getItem('asyncdemo').then(value => setGetValue(value));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          AsyncStorage in React Native
        </Text>
        <TextInput
          placeholder="Enter Text to save here"
          value={text}
          onChangeText={(data) => setText(data)}
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          onPress={saveValue}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showValue} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>GET</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}> {getValue} </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lavender'
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20
  },
  textStyle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'darkblue',
    padding: 10,
    marginTop: 32,
    minWidth: 250
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18, 
    fontWeight: 'bold'
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'darkblue',
  }
});