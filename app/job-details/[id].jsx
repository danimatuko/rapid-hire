import { useLocalSearchParams, Stack } from 'expo-router'
import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'
import ScreenHeaderBtn from '@/components/common/header/ScreenHeaderBtn'
import { COLORS, icons } from '@/constants'
import { Company, JobAbout, JobFooter } from '@/components'
import useFetch from '../../hooks/useFetch'

const JobDetails = () => {
  const params = useLocalSearchParams()
  const [refreshing, setRefreshing] = useState(false)

  const { isLoading, data, error } = useFetch('job-details', {
    job_id: params.id,
  })

  const onRefresh = () => {}

  if (isLoading) {
    return <ActivityIndicator size='large' color={COLORS.primary} />
  }

  if (error) {
    return (
      <Text style={{ color: COLORS.error, textAlign: 'center' }}>
        Something went wrong. Please try again later.
      </Text>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension='60%'
              handlePress={() => {}}
            />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
          />
        }
      >
        <View>
          <Company company={data?.company} />
          <JobAbout description={data?.description} />
          <JobFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails
