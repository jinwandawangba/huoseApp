import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, Radio, Button, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'
import '../assets/styles/Reg.scss'

export default class Reg extends Component {
    render() {
        return (
            <div>
                <WingBlank size="lg">
                    <InputItem placeholder="请输入手机" />
                    <InputItem placeholder="请输入密码" />
                    <InputItem placeholder="请输入验证码" extra="获取验证码" />
                    <WhiteSpace size="xl" />
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)} defaultChecked={false}>我已同意用户《用户服务协议》以及《隐私政策》</Radio>
                    <WhiteSpace size="xl" />
                    <Button className='btn'>注册</Button>
                    <WhiteSpace size="sm" />
                    <Link to="./Reg">忘记密码？</Link>

                </WingBlank>
            </div>
        )
    }
}
