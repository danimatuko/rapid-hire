import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "@/constants";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Simulated job data (replace with actual data from an API or context)
  const jobsData = [
    { _id: "1", title: "Software Engineer" },
    { _id: "2", title: "Product Manager" },
    { _id: "3", title: "UI/UX Designer" },
    { _id: "4", title: "Data Scientist" },
  ];

  if (isLoading) {
    return (
      <View style={styles.cardsContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.cardsContainer}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View>
      {/* Header Section */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        <FlatList
          data={jobsData} // Replace with dynamic data
          renderItem={({ item }) => (
            <View>
              <PopularJobCard item={item} title={item.title} />
            </View>
          )}
          keyExtractor={(item) => item._id} // Ensure each job has a unique `_id`
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Popularjobs;
