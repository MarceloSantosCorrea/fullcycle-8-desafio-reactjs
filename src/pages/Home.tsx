import {
    Divider,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => fetchAllPosts())

    function fetchAllPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data)
            })
    }
    const postItems = posts.map((post: Post) =>
        <ListItemButton component="a" href={`post/${post.id}`} key={post.id.toString()} style={{ borderBottom: '1px solid #ccc' }}>
            <ListItemText primary={post.title} key={`item-${post.id.toString()}`} />
        </ListItemButton>
    );

    return (
        <>
            <Typography component="h1" variant="h4" align="center">
                Posts
            </Typography>
            {postItems}
        </>
    );
}

export default Home;