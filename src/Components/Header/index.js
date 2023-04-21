import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity><AntDesign name="arrowleft" size={24} color="#fff" /></TouchableOpacity>
      <Text style={styles.title}>Reportar</Text>
      <View style={{ width: 20 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#006557',
    paddingTop: statusBarHeight,
    paddingHorizontal: 10,
    paddingBottom: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 20,

    color: '#fff',
    textAlign: 'center',

  },
  icon: {
    paddingRight: 5,

  },
});






