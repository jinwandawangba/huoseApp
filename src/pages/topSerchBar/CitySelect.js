import React, { Component } from 'react'
// import axios from 'axios'
import { Flex } from 'antd-mobile';
import '../../assets/styles/CityList.scss'
import city from '../../json/city.json'
import BScroll from 'better-scroll'



export default class citySelect extends Component {
    state = {
        cityList: city

    }
    render() {
        let { cityList } = this.state
        console.log(cityList)
        return (
            <div className='allContent'>
                <div className='leftBox' id='leftBox'>
                    <ul className='content'>
                        <div className='hotCity'>
                            热门城市
                       </div>
                        <Flex wrap="wrap" justify="start">
                            {

                                cityList.hot.map((v, i) =>
                                    <div className='hotCityName' key={i}>{v}</div>
                                )

                            }
                        </Flex>
                        <div>
                            {
                                cityList.list.map(v =>
                                    <div id={v.title}>
                                        <div>{v.title}</div>{
                                            v.city.map(k =>
                                                <div className='leftList'>{k}</div>
                                            )
                                        }
                                    </div>

                                )
                            }
                        </div>
                    </ul>

                </div>
                <div className='rightList'>{
                    cityList.list.map(v =>
                        <div className='childList' >
                            <div onClick={this.clickTitle.bind(this)}>{v.title}</div>
                        </div>

                    )
                }

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.leftDiv = new BScroll(
            document.getElementById("leftBox"),
            {
                probeType: 3,//实时派发滚动事件
                click: true //允许点击事件的发生
            }
        )
    }

    clickTitle(e){
       this.leftDiv.scrollToElement(document.getElementById(e.target.innerHTML),800)

    }
}
