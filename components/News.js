import { Flex, Box, Button, useColorMode, Heading, Text } from "@chakra-ui/core";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from 'axios';

export const NewItem = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'white', dark: 'black' }
    const color = { light: 'black', dark: 'white' }

    const deleteRegister = async (uuid) => {

      console.log(uuid)
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
      window.location = "/"
  };

    return (
          <>
          <Box as="a" href={props.element.link} p="3" m="4" borderWidth="1px" rounded="lg" flexBasis="40%"
            bg={bgColor[colorMode]} color={color[colorMode]}>
              <Flex>
                <Box>
                <Heading as="h3" size="lg" mb="2">{props.element.title}</Heading>
                </Box>
              </Flex>
            <Text fontSize="lg">{props.element.body}</Text>
          </Box>
          <Box flexBasis="5%">
            <EditIcon color="teal" size="xs" onClick={() => { alert('Edit ' + + props.element.uuid) }}/>
            <DeleteIcon color="teal" size="xs" onClick={() => { deleteRegister(props.element.uuid) }}/>
          </Box>
          </>
    )
}
NewItem.defaultProps = {
    title: "NewItem Title",
    body: "Body from NewItem",
    link: "https://nextjs.org/docs"
}

