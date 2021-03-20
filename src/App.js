import Categorylist from "./views/admin/category/Categorylist";

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './App.css'
import { Categoryprovider } from "./context/Categorycontext";
import Updatecategory from "./views/admin/category/Updatecategory";
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <>
      <BrowserRouter>

        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">Categories</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>MKK</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-content">

              <Switch>
                <Route exact path='/Category'>

                  <Categoryprovider>
                    <Categorylist></Categorylist>
                  </Categoryprovider>

                </Route>

                <Route path='/Category/update/:id'>
                  <Updatecategory></Updatecategory>
                </Route>

              </Switch>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

      </BrowserRouter>

    </>
  );
}

export default App;
