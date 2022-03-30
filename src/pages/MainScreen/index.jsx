import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from 'date-fns'
import { useSelector } from 'react-redux'

import createPost from '../../actions/api/post'
import getAllPosts from '../../actions/api/get'

import { Container, Div, Header, CreatePostForm, Post } from './style';
import { Dimmer, Loader, Icon } from 'semantic-ui-react'

import ModalEdit from '../../components/ModalEdit/index'
import ModalDelete from '../../components/ModalDelete/index'

import { useHistory } from "react-router-dom";
import { LOADING_PAGE } from "../../Navigation/routes";

const InitialState = {
    title: "",
    content: "",
}


const MainScreen = () => {
    const user = useSelector(state => state.username)
    const history = useHistory();

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

    const logOut = () => {
        history.push(LOADING_PAGE);
    }

    const newPosts = async () => {
        try {
            setLoading(true)
            const response = await createPost(user, newPost.title, newPost.content)
            setNewPost(response)
            await loadPosts()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const loadPosts = async () => {
        try {
            setLoading(true)
            const response = await getAllPosts()
            setPosts(response)
            setNewPost({ ...InitialState })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <>
            <Container loading={loading}>
                <Div>
                    <Header>
                        <h1 className="title-header">CodeLeap Network</h1>
                        <Icon
                            onClick={() => logOut()}
                            style={{ color: 'white', cursor: 'pointer' }}
                            flipped='horizontally'
                            name='sign-out'
                            size='big'
                            title='Log-Out'
                        />
                    </Header>

                    <CreatePostForm>
                        <h1 className="title-create-post">Hey {user}, What's on your mind?</h1>

                        <p className="p-create-post">Title</p>
                        <input className="input-create-post" type="text" placeholder="Hello World" required
                            value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />

                        <p className="p-create-post">Content</p>
                        <textarea className="text-input-create-post" placeholder="Content Here..." required
                            value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        />

                        {newPost.title.length > 0 && newPost.content.length > 0 ?
                            <button className="button-create-post" type="button" onClick={() => newPosts()} >CREATE</button>
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
                </Div>
            </Container>

            <Dimmer inverted active={loading} page>
                <Loader content="Loading..." />
            </Dimmer>
        </>
    );
}

export default MainScreen;