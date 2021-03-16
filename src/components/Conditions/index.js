import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';

export default function Conditions() {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather 
          name='wind' 
          size={23} 
          color='#1ED6FF'
        />
        <Text>7 km/h</Text>
      </View>
      <View style={styles.condition}>
        <MaterialCommunityIcons 
          name='weather-sunset-up' 
          size={23} 
          color='#1ED6FF'
        />
        <Text>05:22 am</Text>
      </View>
      <View style={styles.condition}>
        <MaterialCommunityIcons 
          name='weather-sunset-down' 
          size={23} 
          color='#1ED6FF'
        />
        <Text>06:00 pm</Text>
      </View>
      <View style={styles.condition}>
        <Feather 
          name='droplet' 
          size={23} 
          color='#1ED6FF'
        />
        <Text>65</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    flexDirection: 'row',
    width: '93%',
    justifyContent: 'space-around',
  },
  condition: {
    alignItems: 'center',
    justifyContent: 'center'
  },
})