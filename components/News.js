import { Box, useColorMode, Heading, Text } from "@chakra-ui/core";

export const NewItem = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'white', dark: 'black' }
    const color = { light: 'black', dark: 'white' }

    return (
          <Box as="a" href={props.link} p="6" m="4" borderWidth="1px" rounded="lg" flexBasis="45%"
            bg={bgColor[colorMode]} color={color[colorMode]}>
            <Heading as="h3" size="lg" mb="2">{props.title}</Heading>
            <Text fontSize="lg">{props.body}</Text>
          </Box>
    )
}
NewItem.defaultProps = {
    title: "NewItem Title",
    body: "Body from NewItem",
    link: "https://nextjs.org/docs"
}

