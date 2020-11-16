import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Heading, Input, FormControl, FormLabel, Flex, Box, Button, CircularProgress, Textarea, Link } from "@chakra-ui/core";
import axios from 'axios';
// import { ErrorMessage } from "../../components/ErrorMessage"

export default function NewUpdate() {
    const router = useRouter()
    const { uuid } = router.query
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getRegister = async (uuid) => {
        if (title === '' && uuid) {
            let url = `/api/posts/${uuid}`
            console.log(url)
            await axios.get(url)
            .then(function(response){
                setTitle(response.data.content.title)
                setBody(response.data.content.body)
                setLink(response.data.content.link)
            })
            .catch(function(error){
                console.log(error)
            })
        }
    }
    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true)

        setError(false)

        let url = `/api/posts/update/${uuid}`;
        await axios.post(url,{
            object: JSON.stringify({title: title, body: body, link: link})
        })
        .then(function (response){
            console.log(response);
            setIsLoading(false)
        })
        .catch(function (error){
            console.log(error)
        })
        window.location = "/"
    };

    getRegister(uuid)

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            >
                <Box textAlign="center">
                    <Heading as="h1">Update Post</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        {/* {error && <ErrorMessage message={error} />} */}
                        <FormControl isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input
                            type="text"
                            placeholder="My Title"
                            size="lg"
                            value={title}
                            onChange={event => setTitle(event.currentTarget.value)}
                        />
                        </FormControl>
                        <FormControl isRequired>
                        <FormLabel>Body</FormLabel>
                        <Textarea
                            placeholder="Body" 
                            size="lg"
                            value={body}
                            onChange={event => setBody(event.currentTarget.value)}
                        />
                        </FormControl>
                        <FormControl isRequired>
                        <FormLabel>Link</FormLabel>
                        <Input
                            type="text"
                            placeholder="http://url.url"
                            size="lg"
                            value={link}
                            onChange={event => setLink(event.currentTarget.value)}
                        />
                        </FormControl>
                        <Button
                            variantColor="teal"
                            variant="outline"
                            type="submit"
                            width="full"
                            mt={4} >
                            {isLoading ? (
                                <CircularProgress
                                isIndeterminate
                                size="24px"
                                color="teal"
                                />
                            ) : (
                                'Update'
                            )}
                        </Button>
                        <Link href="/">
                            <Button
                                variantColor="teal"
                                variant="outline"
                                width="full"
                                mt={4} >
                                    Cancel
                            </Button>
                        </Link>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}