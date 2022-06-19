import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const App = (item) => {
  const meals = item.meals;
  console.log(item)
  console.log(meals)

  const handlePress = (id) => {
    console.log(id);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={styles.list} 
        onPress={() => handlePress(meals.id)}>
          <Text style={styles.meal}>{ meals.name }</Text>
          <Text style={styles.price}>{ meals.price }</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({  
  list: {
    margin: 10,
    backgroundColor: 'pink',
    padding: 15,
    // width: '100%',
  },
  meal: {
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.9,
  },
  price: {
    fontStyle: 'italic',
    fontSize: 20,
    opacity: 0.6,

  }
});

export default App;