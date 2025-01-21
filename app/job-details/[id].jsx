import { useLocalSearchParams, useRouter, Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import ScreenHeaderBtn from '@/components/common/header/ScreenHeaderBtn' // Ensure correct import
import { COLORS, icons } from '@/constants'

const JobDetails = () => {
  const params = useLocalSearchParams()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.left} onPress={() => {}} /> // Add a basic onPress handler for now
          ),
          headerTitle: '',
        }}
      />
      <Text>Job Details Screen</Text>
    </SafeAreaView>
  )
}

export default JobDetails
