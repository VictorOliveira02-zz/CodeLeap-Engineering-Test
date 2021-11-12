import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns'
import { useSelector } from 'react-redux'

import postApi from '../../actions/api/data.api'

import { Body, Container, Header, CreatePostForm, Post } from './style';

import ModalEdit from '../../components/ModalEdit/index'
import ModalDelete from '../../components/ModalDelete/index'

const InitialState = {
    title: "",
    content: "",
}


const MainScreen = () => {
    const user = useSelector(state => state.username)

    const [posts, setPosts] = useState()
    const [newPost, setNewPost] = useState({ ...InitialState })

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
            const response = await postApi.createPost(user, newPost.title, newPost.content)
            setNewPost(response)
        } catch (error) {
            console.log(error)
        }
    }


    const loadPosts = async () => {
        try {
            const response = await postApi.getAllPosts()
            setPosts(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadPosts()
    }, [])
    console.log(posts)
    return (
        <>
            <Body>
                <Container>
                    <Header>
                        <h1 className="title-header">CodeLeap Network</h1>
                    </Header>

                    <CreatePostForm onSubmit={newPosts}>
                        <h1 className="title-create-post">Hey {user}, What’s on your mind?</h1>

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
                                    {user === post.username &&
                                        <ModalDelete loadPost={() => loadPosts()} id={post.id} />
                                    }
                                    {user === post.username &&
                                        <ModalEdit loadPost={() => loadPosts()} id={post.id} postTitle={post.title} postContent={post.content} />
                                    }
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