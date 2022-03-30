import React, { useState } from 'react'

import { Button, Modal, Icon } from 'semantic-ui-react'
import trash from '../../assets/images/trash.svg'
import deletePost from '../../actions/api/delete'

const ModalDelete = (props) => {
  const { id, loadPost } = props
  const [open, setOpen] = useState(false)

  const delPost = async (id) => {
    try {
      await deletePost(id)
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
      trigger={<button type="button" className="header-post-btn"><img src={trash} alt="trash icon" /></button>}
    >
      <Modal.Content>
        <Modal.Description>
          Are you sure you want to <strong>DELETE</strong> this item ?
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button inverted color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button color='black' onClick={() => delPost(id)}>
          <Icon name='checkmark' /> OK
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDelete