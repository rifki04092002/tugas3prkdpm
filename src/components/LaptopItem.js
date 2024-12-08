// src/components/LaptopItem.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LaptopItem = ({ laptop }) => {
  return (
    <View style={styles.container}>
      {/* Gambar Laptop */}
      <Image source={laptop.image} style={styles.image} />

      {/* Nama dan Spesifikasi */}
      <Text style={styles.name}>{laptop.name}</Text>
      <Text style={styles.specs}>{laptop.specs}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  specs: {
    fontSize: 14,
    color: "#777",
  },
});

export default LaptopItem;
