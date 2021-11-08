import React from 'react';
import { Body, Container, Header, CreatePostDiv, Post } from './style';

const MainScreen = () => {
    return (
        <>
            <Body>
                <Container>
                    <Header>
                        <h1 className="title-header">CodeLeap Network</h1>
                    </Header>

                    <CreatePostDiv></CreatePostDiv>

                    <Post></Post>

                </Container>
            </Body>
        </>
    );
}

export default MainScreen;