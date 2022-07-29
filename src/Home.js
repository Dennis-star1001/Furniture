import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home = () => {

const [name, setName] = useState('Dennis');
    const handleClick = (e) => {
     setName('Temoye')
    }


    return (
        <Box className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <Button onClick={handleClick}>Click me</Button>
           
        </Box>
    );
}

export default Home;