import Modal from './Modal'
import Backdrop from './Backdrop'
import { useState } from 'react'

const Todo = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const deleteHandler = () => {
    setModalIsOpen(true)
  }

  const closeModalHandler = () => {
    setModalIsOpen(false)
  }
  return (
    <div className='card'>
      <h2>{text}</h2>
      <div>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo
