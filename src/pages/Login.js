import React, { Component } from 'react'
import { Flex, WhiteSpace, InputItem,WingBlank,Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
import '../assets/styles/Login.scss'


export default class Login extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Flex justify="center" align="center">
                    <img className="logo" src={require('../assets/imgs/logo.jpg')} alt=''></img>
                </Flex>
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                <InputItem
                    placeholder="请输入手机号"
                >
                    <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem>
                <WhiteSpace size="xs" />
                <InputItem
                    placeholder="请输入密码"
                >
                    <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem>
               
                <WhiteSpace size="xl" />
                <Button className='btn'>登陆</Button>
                <WhiteSpace size="sm" />
                <Flex justify="between">
                  <Link to="./Reg">手机快速注册</Link>
                  <Link to="./Reg">忘记密码?</Link>
                </Flex>
                </WingBlank>
               


            </div>
        )
    }
}
