import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import useFetch from '../../../hooks/useFetch'
import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '@/constants'
import NearbyJobCard from '@/components/common/cards/nearby/NearbyJobCard'

const Nearbyjobs = () => {
  const {
    isLoading,
    error,
    data: jobsData,
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
        <Text>{error}</Text>
      </View>
    )
  }

  return (
    <View>
      {/* Header Section */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nearby Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cards Section */}
      {(jobsData?.data || []).map(job => (
        <NearbyJobCard key={job._id} job={job} />
      ))}
    </View>
  )
}

export default Nearbyjobs

