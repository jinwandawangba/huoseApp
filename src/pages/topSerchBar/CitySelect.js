import React, { Component } from 'react'
import axios from 'axios'
import { Flex } from 'antd-mobile';
import '../../assets/styles/CityList.scss'


export default class citySelect extends Component {
    state = {
        cityList: { hotCity: [], cityList: [] }
    }
    render() {
        let { cityList } = this.state
        return (
            <div>
                <div className='hotCity'>
                    热门城市
                </div>
                <Flex wrap="wrap" justify="start">
                    {
                        // console.log(this.state.cityList.hotCity)
                        this.state.cityList.hotCity.map((v, i) =>
                            <div className='hotCityName' key={i}>{v}</div>
                        )

                    }
                </Flex>
                <div>
                    {
                        this.state.cityList.cityList.map(v =>
                            //    <div>{v.title}</div>
                                v.child.map((k,i) =>
                                <div key={i}>{k}</div>
                                )
                        )
                    }
                </div>

            </div>
        )
    }

    componentDidMount() {
        axios.get('./cityList.json').then(res => {
            console.log(res.data)
            this.setState({
                cityList: res.data
            })
        })
    }
}
