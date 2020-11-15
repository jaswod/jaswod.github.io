import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Heading, Link, Text, Code, Flex, Box, Button } from "@chakra-ui/core";
import { AddIcon } from "@chakra-ui/icons";
import { NewItem } from '../components/News'
import useSWR, {mutate} from 'swr'
import axios from 'axios';

export default function Home() {
  const { data, error } = useSWR('/api/news')

  const deleteRegister = async (uuid) => {
    let url = `/api/news/delete`;
    await axios.post(url,{
        uuid: uuid
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error)
    })
    mutate('/api/news')
  }

  const whenError = function() {
    console.log(error)
    return <Text>failed to load</Text>
  }
  const untilLoad = function() {
    return <Text>loading...</Text>
  }
  const load = function() {
    return(
      data.map((elem, index) => (
        <NewItem key={index} element={elem.content} deleteFunction={deleteRegister} />
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
          My <Link color="teal.500" href="https://nextjs.org">blog</Link>!
        </Heading>

        <Text fontSize="xl" mt="2">
          Get started by editing <Code fontSize="x1">pages/index.js</Code>
        </Text>

        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">
          { (error) && whenError() }
          { (data) ? load() : untilLoad() }
        </Flex>
        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800px" mt="10">
          <Link color="teal.500" href="news/add">
            <Button>
              <AddIcon color="teal" size="xs" />
            </Button>
          </Link>
        </Flex>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/agustim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by agustim
        </a>
      </footer>
    </div>
  )
}
