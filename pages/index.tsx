import type { NextPage } from 'next'
import { Text,  } from '@chakra-ui/react'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Text as="p" fontSize="xl" align="center" marginTop={6}>
        現在の人数は<Text as="big">N人</Text>です。
      </Text>
    </>
  )
}

export default Home
