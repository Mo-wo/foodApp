import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Button, TextInput } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text>Eat Well</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        height: 100,
        // backgroundColor: 'coral',
        paddingTop: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(50px)',
        // margin: 15,
        // marginLeft: 10,
        // marginRight: 10,
    },
});