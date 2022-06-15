import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, editData, updateData } from '../Redux-saga/Action/action';

const Home = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const [discription, setDiscription] = useState();
    const data = useSelector((state) => state?.reducer?.data);
    const Editable_Data = useSelector((state)=>state?.reducer?.isEdit)
    const id = useSelector((state)=>state?.reducer?.id)
    const Add = () => {
        let obj = { title, discription }
        if(Editable_Data){
            dispatch(updateData(obj,id))
        }else{
            dispatch(addData(obj));
        }
        setTitle("")
        setDiscription("")
    }
    const deleteRecord = (id) =>{
        dispatch(deleteData(id))
    }
    const EditRecord = (id) =>{
        dispatch(editData(id))
    }
    useEffect(()=>{
        console.log(123131323,Editable_Data);
        setTitle(Editable_Data?.title)
        setDiscription(Editable_Data?.discription)
    },[Editable_Data])
    return (
        <div>

            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Saga Crud Revision</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='form-section'>
                            <h5>Form-Section</h5>
                        </div>
                        <div className='row-first'>
                            <Row>
                                <Col><input type="text"
                                    placeholder='title'
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title ? title : "" }
                                /></Col>
                                <Col><input type="text"
                                    placeholder='discription'
                                    onChange={(e) => setDiscription(e.target.value)}
                                    value={discription ? discription : ""}
                                /></Col>
                            </Row>
                        </div>
                        <div className='row-second'>
                            <Row>
                                <Col>
                                    <Button variant="success" onClick={Add}>
                                        {
                                            Editable_Data ? "Update" : "Save"
                                        }
                                        </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div className='table-heading'>
                            <h5>Table-Section</h5>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Discription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item,id)=>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.discription}</td>
                                    <td>
                                        <Button variant='info' onClick={()=>EditRecord(id)}>Edit</Button>
                                        <Button variant='danger' onClick={()=>deleteRecord(id)}>Delete</Button>
                                    </td>
                                </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;