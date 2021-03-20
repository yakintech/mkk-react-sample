import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import baseservice from '../../../services/baseservice'
import { Form, Input, Button } from 'antd'


function Updatecategory() {

    let { id } = useParams();

    const [category, setcategory] = useState({});

    useEffect(() => {
        baseservice.get(`/api/categories/${id}`).then((res) => {
            setcategory(res);
            console.log(res);
        })
    }, []);






    const onFinish = (values) => {

    }

    return (
        <>
            <Form
                onFinish={onFinish}
                initialValues={{name:category.name}}
            >
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input category name!' }]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Updatecategory
