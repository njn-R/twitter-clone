import { StyleSheet, View } from 'react-native'
import Tweet from '../../components/Tweet'
import tweets from '../../assets/data/tweets'

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    backgroundColor: 'white',
  },
})
