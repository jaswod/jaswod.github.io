import { Flex, Box, Link, useColorMode, Heading, Text } from "@chakra-ui/core";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export const NewItem = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'white', dark: 'black' }
    const color = { light: 'black', dark: 'white' }

    return (
          <>
          <Box as="a" href={props.element.link} p="3" m="4" borderWidth="1px" rounded="lg" flexBasis="35%"
            bg={bgColor[colorMode]} color={color[colorMode]}>
              <Flex>
                <Box>
                <Heading as="h3" size="lg" mb="2">{props.element.title}</Heading>
                </Box>
              </Flex>
            <Text fontSize="lg">{props.element.body}</Text>
          </Box>
          <Box flexBasis="5%">
            <Link href={`/posts/${props.element.uuid}`} >
              <EditIcon color="teal" size="xs"/>
            </Link>
            <DeleteIcon color="teal" size="xs" onClick={() => { props.deleteFunction(props.element.uuid) }}/>
          </Box>
          </>
    )
}
NewItem.defaultProps = {
    title: "NewItem Title",
    body: "Body from NewItem",
    link: "https://nextjs.org/docs"
}

