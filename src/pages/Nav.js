import React, { Component } from 'react'
import '../assets/styles/Nav.scss'
import { Flex, Carousel, TabBar, WingBlank, SearchBar, WhiteSpace } from 'antd-mobile';
import axios from 'axios'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            citySite: "北京",
            data: ['1', '2', '3'],
            imgHeight: 176,
            imgUrl: [
                { url: require('../assets/imgs/房子.png'), name: '新房' },
                { url: require('../assets/imgs/房态.png'), name: '二手房' },
                { url: require('../assets/imgs/房子.png'), name: '商铺' },
                { url: require('../assets/imgs/房态.png'), name: '写字楼' },
                { url: require('../assets/imgs/房子.png'), name: '卖房' },
                { url: require('../assets/imgs/房态.png'), name: '海外房产' },
                { url: require('../assets/imgs/房子.png'), name: '小区房价' },
                { url: require('../assets/imgs/房态.png'), name: '问答' },
            ],
            loansList: [
                { url: require('../assets/imgs/房贷计算.png'), name: '房贷计算' },
                { url: require('../assets/imgs/贷款.png'), name: '贷款' },
                { url: require('../assets/imgs/知识.png'), name: '知识' },
                { url: require('../assets/imgs/扫一扫.png'), name: '扫一扫' },
            ],
            houseInfoList: []

        };
    }
    componentDidMount() {
        setTimeout(() => {
            // 轮播图组件所用
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        // 发送请求
        axios.get('http://localhost/gethouselist.php').then((res) => {
           
            this.setState({
                
                houseInfoList: res.data
            })
           
        })

        // 调用高德API函数
        this.showCityInfo()
    }
        //获取用户所在城市信息
         showCityInfo() {
            var that = this
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        // 当前城市名称
                        var cityinfo = result.city;
                         // 当前城市经纬度
                        // var citybounds = result.bounds;
                        console.log(cityinfo)
                        that.setState({
                            citySite: cityinfo
                        })
                    }
                } else {
                    that.setState({
                        citySite: '获取信息失败'
                    })
                }
            });
        }

    // 点击动态添加跳转地址
    clickNewUrl(url){
        window.location.href="/#/"+url
    }

    render() {
        let { houseInfoList,data,loansList,imgUrl}=this.state
        return (

            <div>
                {/* 头部搜索框三块 */}
                <div className='topBar'>
                    <div className='curCity' onClick={this.clickNewUrl.bind(this,'city')}>{this.state.citySite}▼</div>
                    <div className='tpCenter'>
                        <SearchBar placeholder="挑好房，上蜗牛房产App" maxLength={8}  onClick={this.clickNewUrl.bind(this,'search')}/>
                    </div>
                    <img src={require('../assets/imgs/地址.png')} onClick={this.clickNewUrl.bind(this,'map')}></img>

                </div>

                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>

                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="首页"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                            data-seed="logId"
                        >
                            {/* {this.renderContent('Life')} */}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title=""
                            key="Koubei"
                            badge={'new'}
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                            }}
                            data-seed="logId1"
                        >
                            {/* {this.renderContent('Koubei')} */}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="推荐"
                            key="Friend"
                            dot
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }}
                        >
                            {/* {this.renderContent('Friend')} */}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="我的"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                            {/* {this.renderContent('My')} */}
                        </TabBar.Item>
                    </TabBar>
                </div>

                <WhiteSpace size="xs" />
                <WhiteSpace size="xs" />
                <WhiteSpace size="xs" />
                <Flex wrap="wrap" justify="around">
                    {
                        imgUrl.map((v, i) => {

                            return (
                                <div className='clfy' key={i} >

                                    <img src={v.url} className='imgList'></img>


                                    <div>{v.name}</div>
                                </div>


                            )
                        })
                    }


                </Flex>
                <div className='houseEncy'>房产全百科，专业的买房攻略</div>
                <Flex wrap="wrap" justify="around">
                    {
                        loansList.map((v, i) => {

                            return (
                                <div className='clfy' key={i}>

                                    <img src={v.url} className='loansList'></img>
                                    <div>{v.name}</div>
                                </div>


                            )
                        })
                    }
                </Flex>
                {/* 猜你喜欢  */}

                {
                    houseInfoList.map((v, i) => {

                        return (
                            <div className='houseList' key={i}>
                                <Flex justify="between">
                                    <div>
                                        <Flex justify="start">
                                            <img src={'http://127.0.0.1:80' + v.imgs} className='houseImg'></img>
                                            <div className='centerContent'>
                                                <div className='houseName'>{v.name}</div>
                                                <div>{v.type}</div>
                                                <div>{v.area}</div>
                                            </div>
                                        </Flex>

                                    </div>

                                    <div className='price'>
                                        {v.price}
                                    </div>
                                </Flex>

                            </div>


                        )
                    })
                }








            </div >
        )
    }
}
