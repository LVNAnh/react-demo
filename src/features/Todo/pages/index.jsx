import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';



function TodoFeature(props) {
    const initTodoList=[
        {
            id:1,
            title:'Một',
            status:'new'
        },
        {
            id:2,
            title:'Hai',
            status:'completed'
        },
        {
            id:3,
            title:'Ba',
            status:'new'
        },
    ];

    const [todoList, setTodoList]=useState(initTodoList);
    const [filteredStatus, setfilteredStatus]=useState('all');
    const handleTodoClick=(todo, idx)=>{

        const newTodoList=[...todoList];
        console.log(todo, idx);

        newTodoList[idx]={
            ...newTodoList[idx],
            status:newTodoList[idx].status==='new'?'completed':'new',
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () =>{
        setfilteredStatus('all');
    }

    const handleShowCompletedClick = () =>{
        setfilteredStatus('completed');
    }

    const handleShowNewClick = () =>{
        setfilteredStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    console.log(renderedTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            {/* truyem data cha qua con mang todoList */}
            <TodoList 
                todoList={renderedTodoList} 
                //2. Khi click gọi hàm handleTodoClick
                onTodoClick={handleTodoClick}
            />
            <button className='border-2' onClick={handleShowAllClick}>Show All</button>
            <button className='border-2' onClick={handleShowCompletedClick}>Show Completed</button>
            <button className='border-2' onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}
export default TodoFeature;
