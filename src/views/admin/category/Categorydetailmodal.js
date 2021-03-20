import React, { useContext } from 'react'
import { Modal } from 'antd';
import categorycontext from '../../../context/Categorycontext'

function Categorydetailmodal(props) {

    const { modalvisible, setmodalvisible } = useContext(categorycontext);

    return (
        <>
            <Modal title="Category Detail" visible={modalvisible} onOk={() => setmodalvisible(false)} onCancel={() => setmodalvisible(false)} cancelButtonProps={{ style: { display: 'none' } }}>
                <p><b>ID:</b> {props.categorydetail.id}</p>
                <p><b>Name:</b>  {props.categorydetail.name}</p>
                <p><b>Description:</b> {props.categorydetail.description}</p>
            </Modal>
        </>
    )
}

export default Categorydetailmodal
