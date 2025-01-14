import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PopularJobCard;

