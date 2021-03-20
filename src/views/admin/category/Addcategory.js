import React, { useContext } from 'react'
import { Form, Input, Button, message } from 'antd';
import baseservice from '../../../services/baseservice';
import categorycontext from '../../../context/Categorycontext';


function Addcategory() {

    let {categories,setcategories} = useContext(categorycontext);

    const onFinish = (values) => {

        baseservice.post('/api/categories/',values)
        .then((data)=>{

            message.success('Category added!');
            setcategories([...categories, data]);

        })
        

    }

    return (
        <>
            <Form
                onFinish={onFinish}
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

export default Addcategory


