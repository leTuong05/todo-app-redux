import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/actions/listAction';
import { Form, Row, Col, Button } from 'react-bootstrap'
const TodoListForm = () => {
    const [list, setList] = useState(''); // giá trị khởi tạo của state =''

    const dispatch = useDispatch();
    //useDispatch cho phép gửi action lên Redux store 
    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(addList(list));
        setList(''); //khi submit xong thì sẽ ô input sẽ trống

    }
    return (
        <Form className='mx-2 my-2' onSubmit={submitHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                    <Col md={8}>
                        <Form.Control
                            type="text"
                            placeholder="Enter your list"
                            required
                            value={list} //value là giá trị của state
                            onChange={(e) => setList(e.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Button variant="primary" type="submit">
                            Add To List
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default TodoListForm