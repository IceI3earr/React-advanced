import React from 'react'
import Todo from './Todo'

export default function List({todoList, onCheckBtnClick, onBtnDel}) {
    return (
        <>
            {
                todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} onBtnDel={onBtnDel}/> 
                ))
            }
        </>
    )
}
