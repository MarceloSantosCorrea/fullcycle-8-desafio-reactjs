import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowBackIosNew } from "@mui/icons-material";

async function getPost(id: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.data;
}

function Post(props: any) {

    let { id } = useParams();

    const [post, setPost] = useState({
        id: '',
        title: '',
        body: ''
    });

    useEffect(() => {
        getPost(id!).then(data => setPost(data))
    }, [id])

    return (
        <>
            <Typography component="h1" variant="h4" align="center">
                Post <strong>{post.id}</strong>
            </Typography>
            <ListItemButton component="a" href="/">
                <ArrowBackIosNew />
                voltar
            </ListItemButton>
            <List>
                <ListItem>
                    <ListItemText primary={post.title} secondary={post.body} />
                </ListItem>
            </List>
        </>
    );
}

export default Post;