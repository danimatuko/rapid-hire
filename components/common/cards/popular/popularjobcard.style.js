import { StyleSheet } from 'react-native'

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants'

const styles = StyleSheet.create({
  container: (selectedJob, job) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === job.job_id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, job) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === job.job_id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.small,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, job) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === job.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedJob, job) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === job.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
})

export default styles
