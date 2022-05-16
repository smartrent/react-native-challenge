import React from "react";
import { View, StyleSheet } from "react-native";
import { SmartRentLogo } from "../components/SmartRentLogo";

export const Welcome = () => {
  return (
    <View style={styles.root}>
      <SmartRentLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" },
});
