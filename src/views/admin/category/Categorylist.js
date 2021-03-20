import React, { useState, useEffect, useContext } from 'react';
import baseservice from '../../../services/baseservice';
import { Table, Button, Spin, Popconfirm, message } from 'antd'
import Categorydetailmodal from './Categorydetailmodal';
import categorycontext from '../../../context/Categorycontext';
import '../../../assets/css/category/categorylist.css'
import Addcategory from './Addcategory';
import {useHistory} from 'react-router-dom'
import Categoryupdatemodal from './Categoryupdatemodal';


function Categorylist() {

    let history = useHistory();
    const { setmodalvisible, categories, setcategories, setupdatemodalvisible } = useContext(categorycontext);

    const [loading, setloading] = useState(true);
    const [categorydetail, setcategorydetail] = useState({});
    const [updatecategory, setupdatecategory] = useState({});


    const categorycolumns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Detail',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => getdetail(id)} type='primary'>Detail</Button>
        },
        {
            title: 'Update',
            dataIndex: 'id',
            render: (id) => <Button type='primary' onClick={() => getupdate(id)}>Update</Button>
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            render: (id) => <Popconfirm
                title="Are you sure to delete this category?"
                onConfirm={() => confirmdelete(id)}
                okText="Yes"
                cancelText="No"
            ><Button type="primary" danger>Delete</Button>
            </Popconfirm>
        }

    ];


    const getcategories = () => {
        baseservice.get('/api/categories').then((result) => {
            setcategories(result);
            setloading(false);
        })
    }

    const getdetail = (id) => {
        baseservice.get(`/api/categories/${id}`).then((res) => {
            setcategorydetail(res);
            setmodalvisible(true);
        })
    }

    const getupdate = (id) =>{
        
        history.push(`/Category/update/${id}`);
        // baseservice.get(`/api/categories/${id}`).then((res) => {
        //     setupdatecategory(res);
        //     setupdatemodalvisible(true);
        // })
    }


    const confirmdelete = (id) => {

        baseservice.delete(`/api/categories/${id}`).then((res) => {
            getcategories();
            message.success('Category deleted!');
        })


    }


    useEffect(() => {
        getcategories();
    }, []);

    return (
        <>
            <Addcategory></Addcategory>
            {/* <div className='categoryheader'>
                <Button type="primary">Add Category</Button>

            </div> */}
            <Spin tip="Loading..." spinning={loading}>
                <Table dataSource={categories} columns={categorycolumns} />;
            </Spin>

            <Categorydetailmodal categorydetail={categorydetail}></Categorydetailmodal>
            {/* <Categoryupdatemodal categoryupdate={updatecategory}></Categoryupdatemodal> */}
        </>
    )
}



export default Categorylist




