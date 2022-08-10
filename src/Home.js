import './index.css'
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPendng, error } = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) => {

    //     const newBlogs = blogs.filter((e) => e.id !== id)
    //     setBlogs(newBlogs)
    // }


    return (
        <Box className="home">
            {error && <Box>{error}</Box>}
            
            {isPendng && <Box>Loading...</Box>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((e)=> e.author === 'mario')} title="Dennis's Blog" /> */}
        </Box>
    );
}

export default Home;