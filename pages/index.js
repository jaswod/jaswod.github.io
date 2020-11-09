import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Heading, Link, Text, Code, Flex, Box } from "@chakra-ui/core";
import { NewItem } from '../components/News'
import useSWR from 'swr'

export default function Home() {
  const { data, error } = useSWR('/api/news')

  const whenError = function() {
    return <Text>failed to load</Text>
  }
  const untilLoad = function() {
    return <Text>loading...</Text>
  }
  const load = function() {
    return(
      data.map((elem, index) => (
        <NewItem key={index} title={elem.title} body={elem.body} link={elem.link} />
      ))
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" fontSize="big" mb="2">
          Welcome to <Link color="teal.500" href="https://nextjs.org">Next.js!</Link>!
        </Heading>

        <Text fontSize="xl" mt="2">
          Get started by editing <Code fontSize="x1">pages/index.js</Code>
        </Text>

        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">
          { (error) && whenError() }
          { (data) ? load() : untilLoad() }
        </Flex>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
