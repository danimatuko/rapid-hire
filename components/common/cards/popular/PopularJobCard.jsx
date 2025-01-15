import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './popularjobcard.style'

const PopularJobCard = ({ job, selectedJob }) => {
  const fallbackLogo =
    'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'

  const handleCardPress = job => {
    // Add logic for handling the card press
    console.log('Job pressed:', job)
  }

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, job)}
      onPress={() => handleCardPress(job)} // Fix: Use a function reference
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, job)}>
        <Image
          source={{
            uri: job.employer_logo || fallbackLogo,
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, job)} numberOfLines={1}>
          {job.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, job)}>
            {job?.job_publisher} -
          </Text>
          <Text style={styles.location}> {job.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
