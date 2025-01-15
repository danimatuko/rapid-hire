import React from 'react'
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

const PopularJobs = () => {
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
          data={jobsData?.data || []}
          renderItem={({ item: job }) => <PopularJobCard job={job} />}
          keyExtractor={job => job?._id || `${job?.job_title}_${job?.company}`}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  )
}

export default PopularJobs
