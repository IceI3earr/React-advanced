import React from 'react'
import Button from '@atlaskit/button'
import styled, {css} from 'styled-components'

const ButtuonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &,
    &:hover {
      ${(p) =>
        p.isCompleted &&
        css`
        .list{
            text-decoration: line-through;
        }
        `}
`;
export default function Todo({todo, onCheckBtnClick, onBtnDel}) {
    return (
        <>
            <ButtuonStyled 
                isCompleted={todo.isCompleted}
                shouldFitContainer 
                iconBefore={
                    !todo.isCompleted && (<span className='check-icon' >
                        <input type='checkbox' 
                            onClick={() => {
                                onCheckBtnClick(todo.id);
                                console.log(todo);
                            }}
                        >
                        </input>
                    </span>)
                }
                iconAfter={
                    <button
                        onClick={() =>{
                            onBtnDel(todo.id)
                            console.log(todo.id);
                        }}
                    >
                        Del
                    </button>
                }
            >
                <span className = 'list'>
                    {todo.name}
                </span>
                            
            </ButtuonStyled>
        </>
    )
}
