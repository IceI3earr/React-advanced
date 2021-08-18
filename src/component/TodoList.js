import React,{ useState, useCallback, useEffect } from 'react'
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import './TodoList.css'
import List from './List'
import { v4 } from 'uuid'

const TODO_APP_STORAGE_KEY =  'TODO_APP'
export default function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [textInput, settextInput] = useState('')

    useEffect(() => {
        const strogedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
        if (strogedTodoList) {
            setTodoList(JSON.parse(strogedTodoList));
        }
    }, []);

    useEffect(() => {
       localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList)); 
    }, [todoList]);

    const onTextInputChange = useCallback((e) =>{
        settextInput(e.target.value)
    },[]);

    const onAddBtnClick = useCallback(
        (e) => {
          setTodoList([
            { id: v4(), name: textInput, isCompleted: false },
            ...todoList,
          ]);
    
          settextInput('');
        },
        [textInput, todoList]
      );

    const onCheckBtnClick = useCallback((id) => {
        setTodoList((prevState) => 
            prevState.map(todo => 
                todo.id === id? { ...todo, isCompleted: true } : todo
                )
            );
        },[]);  
    const onBtnDel = (id) => {
        setTodoList((nextState) => 
            nextState.filter(el => 
                el.id !== id
                )
            );
    }

    return (
        <>
        <div className='todo-list'>
            <div className='text-todo'>
                <h1>Todo List</h1>
            </div>
            <div className='textfield-todo'>
                <Textfield name='add-todo' placeholder='What needs to be done ?' 
                elemAfterInput={
                    <Button 
                        isDisabled={!textInput} 
                        appearance='primary' 
                        onClick={onAddBtnClick}
                    >
                        Add
                    </Button>   
                }
                css={{padding:'2px 4px 2px'}}
                value={textInput}
                onChange={onTextInputChange}
                ></Textfield>
                <List todoList={todoList} onCheckBtnClick={onCheckBtnClick} onBtnDel={onBtnDel}/>
            </div>
        </div>
        </>
    )
}
