import React, {useContext} from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import categorycontext from '../../../context/Categorycontext';

function Categoryupdatemodal(props) {

    const {setcategories,updatemodalvisible,setupdatemodalvisible} = useContext(categorycontext);
   

    const onFinish = () =>{

    }

    return (
        <>
        
        <Form
                    onFinish={onFinish}
                    initialValues={{name:'deneme', description:props.categoryupdate.description}}
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

 

            {/* <Modal title="Category Update" visible={updatemodalvisible} onOk={() => setupdatemodalvisible(false)} onCancel={() => setupdatemodalvisible(false)}>
           </Modal> */}
        </>
    )
}

export default Categoryupdatemodal
