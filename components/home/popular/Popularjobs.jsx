import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'

import useFetch from '../../../hooks/useFetch'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '@/constants'
import PopularJobCard from '@/components/common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const {
    isLoading,
    error,
    data: jobsData, // Rename `data` to `jobsData`
  } = useFetch('search', {
    query: 'React Native Developer',
    page: '1',
    num_pages: '1',
  })

  if (isLoading) {
    return (
      <View style={styles.cardsContainer}>
        <ActivityIndicator size='large' color={COLORS.primary} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.cardsContainer}>
        <Text>Something went wrong</Text>
      </View>
    )
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
          data={jobsData?.jobs || []} // Safely access the `jobs` property of `jobsData`
          renderItem={({ item }) => (
            <PopularJobCard item={item} title={item.title} />
          )}
          keyExtractor={item => item._id || item.id || item.title} // Ensure each job has a unique key
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Popularjobs
