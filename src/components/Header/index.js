import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return(
    <LinearGradient 
      style={styles.header}
      colors={['#1ED6FF', '#97C1FF']}
    >
      <Text style={styles.date}>13/03/2021</Text>
      <Text style={styles.city}> Aracaju </Text>

      <Ionicons 
        name="cloud"
        color='#FFF'
        size={150}
      />

      <Text style={styles.temp}>35°</Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '93%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  date: {
    color: '#FFF',
    fontSize: 17
  },
  city: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  temp: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold'
  }
})