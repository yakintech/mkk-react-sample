import { Button } from 'antd'
import {getdetail}  from '../Categorylist'

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
        render: (id) => <Button onClick={() =>  getdetail(id)} type='primary'>Detail</Button>
    }
];

export default categorycolumns;