import { ApolloClient, InMemoryCache } from '@apollo/client'

// stepzen whoami --apikey for getting api key

const client = new ApolloClient({
  uri: 'https://lebbeke.stepzen.net/api/plucking-markhor/__graphql',
  headers: {
    Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
  },
  cache: new InMemoryCache(),
})

export default client
