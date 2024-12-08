// App.js
import React from "react";
import { View } from "react-native";
import LaptopListScreen from "./src/screens/LaptopListScreen";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <LaptopListScreen />
    </View>
  );
};

export default App;
