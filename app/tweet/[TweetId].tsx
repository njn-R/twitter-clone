import { Text } from 'react-native'
import Tweet from "../../components/Tweet"
import tweets from "../../assets/data/tweets"
import { useSearchParams } from "expo-router"

export default function TweetScreen() {
    const { TweetId } = useSearchParams()
    const tweet = tweets.find((singleTweet) => singleTweet.id === TweetId)

    if (!tweet) {
        return <Text>Tweet {TweetId} not found!</Text>
    }

    return (
        <Tweet tweet={tweet}/>
    )
}