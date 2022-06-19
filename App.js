import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Button, TextInput } from 'react-native';
import Header from './components/Header';
import Meals from './components/Meals';

export default function App() {

  const [meals, setMeals] = useState([
    { name: 'Jollof Rice',      price: '600',  id: '1'},
    { name: 'Fried Rice',       price: '600',  id: '2' },
    { name: 'White Rice',       price: '600',  id: '3' },
    { name: 'Fried Chiken',     price: '500',  id: '4' },
    { name: 'Shawarma',         price: '1000', id: '5'  },
    { name: 'Burger',           price: '1200', id: '6'  },
    { name: 'Milkshake',        price: '2000', id: '7'  },
    { name: 'Stir-fry Noodles', price: '750',  id: '8'  },
    { name: 'Stir-fry Pasta',   price: '600',  id: '9'  },
    { name: 'Beef',             price: '200',  id: '10'  },
    { name: 'Meatpie',          price: '300',  id: '11'  },
    { name: 'Cake Slice',       price: '300',  id: '12'  },
    { name: 'Cupcake',          price: '100',  id: '13'  },
    { name: 'Chips',            price: '500',  id: '14'  },
  ]);


  return (
    <View style={styles.container}>
      <FlatList 
        ListHeaderComponent={<Header />}
        keyExtractor={(item) => item.id}
        data={meals}
        renderItem={({ item }) => (
          <>
            <Meals meals={item} /> 
          </>
        )}
      />
    </View>

  )

}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 2,
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
});
