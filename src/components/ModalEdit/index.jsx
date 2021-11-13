import React, { useState } from 'react'

import { CreatePostForm } from '../../pages/MainScreen/style';
import { Modal } from 'semantic-ui-react'

import postApi from '../../actions/api/data.api'

import edit from '../../assets/images/edit.svg'

const InitialState = {
  "title": "",
  "content": "",
}

function ModalEdit(props) {
  const { id, loadPost, postTitle, postContent } = props
  const [open, setOpen] = useState(false)
  const [updatePost, setUpdatePost] = useState({ ...InitialState })

  const updatePosts = async () => {
    try {
      const response = await postApi.updatePost(id, updatePost.title, updatePost.content)
      setUpdatePost(response)
      setOpen(false)
      await loadPost()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button type="buttom" className="header-post-btn"><img src={edit} alt="edit icon" /></button>}

    >
      <CreatePostForm>
        <h1 className="title-create-post">Edit Item</h1>

        <p className="p-create-post">Title</p>
        <input className="input-create-post" type="text" placeholder={postTitle} required
          value={updatePost.title} onChange={(e) => setUpdatePost({ ...updatePost, title: e.target.value })}
        />

        <p className="p-create-post">Content</p>
        <textarea className="text-input-create-post" placeholder={postContent} required
          value={updatePost.content} onChange={(e) => setUpdatePost({ ...updatePost, content: e.target.value })}
        />

        {updatePost.title.length > 0 && updatePost.content.length > 0 ?
          <button className="button-create-post" type="button" onClick={() => updatePosts()}>SAVE</button>
          :
          <button className="button-create-post-disabled" disabled
            title="Please, fill in the title and content fields!">SAVE</button>
        }
      </CreatePostForm>
      <br />
    </Modal>
  )
}

export default ModalEdit