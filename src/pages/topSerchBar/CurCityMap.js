import React, { Component } from 'react'
import '../../assets/styles/CurCityMap.scss'

export default class curCityMap extends Component {
    render() {
        return (
            <div>
                <div id='mapBox'>
                 地图页
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.showCityInfo()
    }

   
    //获取用户所在城市信息
     showCityInfo() {
        // 获取存放地图盒子id
        var map = new window.AMap.Map("mapBox", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    // 当前城市名称
                    // var cityinfo = result.city;
                    // 当前城市经纬度
                    var citybounds = result.bounds;
                    // console.log(citybounds)
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });
    }
   
}
