import React, { useState, useEffect } from 'react';
import { Body, Container, Header, CreatePostForm, Post } from './style';

import postApi from '../../actions/api/data.api'
import { formatDistanceToNow } from 'date-fns'

import trash from '../../assets/images/trash.svg'
import edit from '../../assets/images/edit.svg'

const InitialState = {
    "username": "",
    "title": "",
    "content": "",
}


const MainScreen = () => {
    const [posts, setPosts] = useState()
    const [newPost, setNewPost] = useState({ ...InitialState })
    const [loading, setLoading] = useState(false)

    const handleTime = (date) => {
        const result = formatDistanceToNow(
            new Date(date),
            { addSuffix: true },
            { includeSeconds: true }
        )
        return result
    }

    const newPosts = async () => {
        try {
            const response = await postApi.createPost(newPost.username, newPost.title, newPost.content)
            setNewPost(response)
        } catch (error) {
            console.log(error)
        }
    }


    const loadPosts = async () => {
        try {
            setLoading(true)
            const response = await postApi.getAllPosts()
            setPosts(response)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <>
            <Body>
                <Container>
                    <Header>
                        <h1 className="title-header">CodeLeap Network</h1>
                    </Header>

                    <CreatePostForm onSubmit={newPosts} loading={loading}>
                        <h1 className="title-create-post">Hey John, What’s on your mind?</h1>

                        <p className="p-create-post">Title</p>
                        <input className="input-create-post" type="text" placeholder="Hello World" required
                            value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />

                        <p className="p-create-post">Content</p>
                        <textarea className="text-input-create-post" placeholder="Content Here..." required
                            value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        />

                        {newPost.title.length > 0 && newPost.content.length > 0 ?
                            <button className="button-create-post" type="submit">CREATE</button>
                            :
                            <button className="button-create-post-disabled" disabled
                                title="Please, fill in the title and content fields!">CREATE</button>
                        }
                    </CreatePostForm>

                    {posts && posts.results.map(post => (
                        <Post key={post.id}>
                            <div className="header-post">
                                <h1 className="header-post-title">{post.title}</h1>
                                <div className="header-btns-post">
                                    <button type="submit" className="header-post-btn"><img src={trash} alt="trash icon" /></button>
                                    <button type="buttom" className="header-post-btn"><img src={edit} alt="edit icon" /></button>
                                </div>
                            </div>

                            <div className="div-info-post">
                                <span className="div-info-username-post">@{post.username}</span>
                                <span className="div-info-time-post">{handleTime(post.created_datetime)}</span>
                            </div>

                            <div className="content-post">{post.content}</div>
                        </Post>
                    ))}
                </Container>
            </Body>
        </>
    );
}

export default MainScreen;