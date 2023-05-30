import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'
import { deleteList, toogle } from '../redux/actions/listAction'
const TodoListList = () => {
    //useSelector dùng để lấy State từ redux store vào trong component function
    //Tham số của useSelector là một callback function (nhận vào toàn bộ state của store và trả về giá trị muốn lấy)
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todoItems);
    const { todoList, repeat } = data; //const todoList = data.todoList
    //console.log(todoList);
    const handleToggle = (name) => {

        dispatch(toogle(name));

    }
    const handleDelete = (name) => {
        dispatch(deleteList(name))
    }
    if (todoList) {
        return (
            <div>
                {repeat && <h2>Todo đã có !!!</h2>}
                <ListGroup>
                    {todoList.map((list, index) => (

                        <ListGroup.Item key={index}>
                            <Row>
                                <Col md={8}>
                                    {list.name}
                                </Col>
                                <Col md={2}>
                                    <Button variant='success'>
                                        <span onClick={() => handleToggle(list.name)}>{list.complete === true ? (<i className="fa-solid fa-check"></i>) : (<i className="fa-solid fa-pen"></i>)

                                        }</span>
                                    </Button>
                                </Col>
                                <Col md={2}>
                                    <Button>
                                        <span onClick={() => handleDelete(list.name)}><i className="fa-solid fa-trash"></i></span>
                                    </Button>
                                </Col>
                            </Row>

                        </ListGroup.Item>
                    ))}

                </ListGroup>
            </div>
        )
    } else {
        return (
            <h1>Nothing todo</h1>
        )
    }

}

export default TodoListList