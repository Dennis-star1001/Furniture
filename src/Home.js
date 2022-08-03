import './index.css'
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum.....', author: 'Dennis', id: '1' },
        { title: 'Welcome party', body: 'lorem ipsum.....', author: 'mario', id: '2' },
        { title: 'Web dev top tips', body: 'lorem ipsum.....', author: 'mario', id: '3' }
    ]);



    return (
        <Box className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((e)=> e.author === 'mario')} title="Dennis's Blog" />
        </Box>
    );
}

export default Home;