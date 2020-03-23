import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/Login'
import Nav from './pages/Nav'
import Reg from './pages/Reg'
import CitySelect from './pages/topSerchBar/CitySelect'
import CurCityMap from './pages/topSerchBar/CurCityMap'
import SearchBar from './pages/topSerchBar/SearchBar'


export default class App extends Component {
    render() {
        return (
            <div>
              <HashRouter>
                  <Switch>
                      <Route path='/' exact component={Nav}/>
                      <Route path='/Login' exact component={Login}/>
                      <Route path='/Reg' exact component={Reg}/>
                      {/* 上方搜索框一级跳转 */}
                      <Route path='/city'  component={CitySelect}/>
                      <Route path='/search'  component={SearchBar}/>
                      <Route path='/map' component={ CurCityMap}/>
                  </Switch>
              </HashRouter>
            </div>
        )
    }
}
