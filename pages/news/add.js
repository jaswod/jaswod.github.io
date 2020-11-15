import React, { useState } from 'react';
import { Heading, Input, FormControl, FormLabel, Flex, Box, Button, CircularProgress } from "@chakra-ui/core";
import axios from 'axios';
// import { ErrorMessage } from "../../components/ErrorMessage"

export default function NewAdd() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [link, setLink] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true)

        setError(false)

        let url = `/api/news/add`;
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
                    <Heading as="h1">Add New</Heading>
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
                        <Input
                            type="textarea"
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
                                'Add'
                            )}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    )
}