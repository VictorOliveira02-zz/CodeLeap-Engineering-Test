import React, { useState } from "react"

import { CreatePostForm } from '../../pages/MainScreen/style';
import { Modal } from 'semantic-ui-react'

import updatePost from '../../actions/api/patch'
import edit from '../../assets/images/edit.svg'

const InitialState = {
  "title": "",
  "content": "",
}

const ModalEdit = (props) => {
  const { id, loadPost, postTitle, postContent } = props
  const [open, setOpen] = useState(false)
  const [updatePostForm, setUpdatePostForm] = useState({ ...InitialState })

  const updatePosts = async () => {
    try {
      const response = await updatePost(id, updatePostForm.title, updatePostForm.content)
      setUpdatePostForm(response)
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
      trigger={<button type="button" className="header-post-btn"><img src={edit} alt="edit icon" /></button>}

    >
      <CreatePostForm>
        <h1 className="title-create-post">Edit Item</h1>

        <p className="p-create-post">Title</p>
        <input className="input-create-post" type="text" placeholder={postTitle} required
          value={updatePostForm.title} onChange={(e) => setUpdatePostForm({ ...updatePostForm, title: e.target.value })}
        />

        <p className="p-create-post">Content</p>
        <textarea className="text-input-create-post" placeholder={postContent} required
          value={updatePostForm.content} onChange={(e) => setUpdatePostForm({ ...updatePostForm, content: e.target.value })}
        />

        {updatePostForm.title.length > 0 && updatePostForm.content.length > 0 ?
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