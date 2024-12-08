// src/screens/LaptopListScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import LaptopItem from "../components/LaptopItem";

// Data laptop dengan gambar lokal
const laptopsData = [
  {
    id: "1",
    name: "MacBook Pro",
    specs: '16" Retina, 1TB SSD, 32GB RAM, Apple M1 Pro',
    image: require("../../assets/images/macbook-pro.jpg"),
  },
  {
    id: "2",
    name: "Dell XPS 13",
    specs: '13.4" FHD, 512GB SSD, 16GB RAM, Intel i7',
    image: require("../../assets/images/dell-xps-13.jpg"),
  },
  {
    id: "3",
    name: "HP Spectre x360",
    specs: '15.6" 4K OLED, 1TB SSD, 16GB RAM, Intel i7',
    image: require("../../assets/images/hp-spectre.jpg"),
  },
  {
    id: "4",
    name: "Asus ROG Zephyrus",
    specs: '14" FHD, 1TB SSD, 32GB RAM, Nvidia RTX 3070',
    image: require("../../assets/images/asus-rog.jpg"),
  },
  {
    id: "5",
    name: "Lenovo ThinkPad X1 Carbon",
    specs: '14" FHD, 512GB SSD, 16GB RAM, Intel i7',
    image: require("../../assets/images/lenovo-thinkpad.jpg"),
  },
  {
    id: "6",
    name: "Microsoft Surface Laptop 4",
    specs: '13.5" PixelSense, 512GB SSD, 16GB RAM, Intel i7',
    image: require("../../assets/images/surface-laptop.jpg"),
  },
  {
    id: "7",
    name: "Acer Swift 3",
    specs: '14" FHD, 256GB SSD, 8GB RAM, Ryzen 5',
    image: require("../../assets/images/acer-swift.jpg"),
  },
  {
    id: "8",
    name: "Razer Blade 15",
    specs: '15.6" 4K OLED, 1TB SSD, 32GB RAM, Nvidia RTX 3080',
    image: require("../../assets/images/razer-blade.jpg"),
  },
  {
    id: "9",
    name: "Gigabyte Aero 15",
    specs: '15.6" 4K OLED, 1TB SSD, 16GB RAM, Nvidia RTX 3070',
    image: require("../../assets/images/gigabyte-aero.jpg"),
  },
  {
    id: "10",
    name: "MSI GS66 Stealth",
    specs: '15.6" FHD, 1TB SSD, 32GB RAM, Nvidia RTX 3070',
    image: require("../../assets/images/msi-gs66.jpg"),
  },
  {
    id: "11",
    name: "Huawei MateBook X Pro",
    specs: '13.9" 3K, 512GB SSD, 16GB RAM, Intel i7',
    image: require("../../assets/images/huawei-matebook.jpg"),
  },
  {
    id: "12",
    name: "Samsung Galaxy Book Pro",
    specs: '15.6" FHD, 512GB SSD, 16GB RAM, Intel i7',
    image: require("../../assets/images/samsung-galaxy.jpg"),
  },
  {
    id: "13",
    name: "Apple MacBook Air M2",
    specs: '13.6" Retina, 256GB SSD, 8GB RAM, Apple M2',
    image: require("../../assets/images/macbook-air.jpg"),
  },
  {
    id: "14",
    name: "Dell Alienware X17",
    specs: '17.3" FHD, 1TB SSD, 32GB RAM, Nvidia RTX 3080',
    image: require("../../assets/images/dell-alienware.jpg"),
  },
  {
    id: "15",
    name: "HP Omen 15",
    specs: '15.6" FHD, 1TB SSD, 16GB RAM, Nvidia RTX 3070',
    image: require("../../assets/images/hp-omen.jpg"),
  },
];

const LaptopListScreen = () => {
  const [laptops, setLaptops] = useState(laptopsData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setLaptops(laptopsData);
    } else {
      setLaptops(
        laptopsData.filter((laptop) =>
          laptop.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  const renderLaptopItem = ({ item }) => <LaptopItem laptop={item} />;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Daftar Laptop</Text>
      </View>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari laptop..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Laptop List */}
      <FlatList
        data={laptops}
        renderItem={renderLaptopItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  searchInput: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
});

export default LaptopListScreen;
