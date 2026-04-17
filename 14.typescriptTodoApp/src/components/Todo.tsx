import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import type { TodoType } from '../types/Types'
import { useDispatch } from 'react-redux'
import { removeTodoById, updateTodo } from '../redux/todoSlice'

interface TodoProps {
  todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps
  const dispatch = useDispatch()

  const [editable, setEditable] = useState<boolean>(false)
  const [newTodo, setNewTodo] = useState<string>(content)

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))
  }
  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false)
  }

  return (
    <div className='todo-list'>
      {editable
        ? <input
          style={{ border: "none", outline: "none", borderBottom: "1px solid lightgrey", width: "80%" }}
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        />
        : <div>
          {content}
        </div>
      }
      <div>
        <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='todo-list-icon' />
        {editable
          ? <FaCheck
            onClick={handleUpdateTodo}
            className='todo-list-icon'
          />
          : <FaRegEdit
            onClick={() => setEditable(true)}
            className='todo-list-icon'
          />
        }
      </div>
    </div>
  )
}

export default Todo