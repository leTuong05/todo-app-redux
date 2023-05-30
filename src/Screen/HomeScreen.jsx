import React from 'react'
import { Card } from 'react-bootstrap'
import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'
const HomeScreen = () => {
    return (
        <div>
            <h1 className='text-center text-info'>To do list</h1>
            <Card>
                <Card.Header className='text-center'>
                    A to do List using redux
                </Card.Header>
                <TodoListForm />
            </Card>
            <h1 className='text-center'>Todo List</h1>
            <TodoListList />
        </div>
    )
}

export default HomeScreen