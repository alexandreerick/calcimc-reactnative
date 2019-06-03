import React, { Component } from 'react';

import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efedee',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  entradas: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ce183a',
    marginTop: 25,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#f2eded',
    fontWeight: 'bold',
  },
});

const Main = () => (
  <View style={styles.container}>
    <View style={styles.entradas}>
      <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} />
    </View>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Calcular</Text> 
    </TouchableOpacity>
  </View>
);

export default Main;
