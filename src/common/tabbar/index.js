import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabBar } from 'antd-mobile';
import { actionCreators } from './store';
import './tabbar.scss';

class Tabbar extends Component {

  render() {

    const { selectedTab, hidden, fullScreen, changeTabs } = this.props;

    return (
      <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            title="首页"
            key="Home"
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
            selected={selectedTab === 'homeTab'}
            badge={1}
            onPress={() => {
              changeTabs('homeTab')
            }}
            data-seed="homeId"
          >
            {this.renderContent('Home')}
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
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={selectedTab === 'redTab'}
            onPress={() => {
              changeTabs('redTab')
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
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
            title="Friend"
            key="Friend"
            dot
            selected={selectedTab === 'greenTab'}
            onPress={() => {
              changeTabs('greenTab')
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="mine"
            selected={selectedTab === 'mineTab'}
            onPress={() => {
              changeTabs('mineTab')
            }}
          >
            {this.renderContent('Mine')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }


  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {pageText}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedTab: state.getIn(['tabbar', 'selectedTab']),
    hidden: state.getIn(['tabbar', 'hidden']),
    fullScreen: state.getIn(['tabbar', 'fullScreen'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeTabs(selectedTab) {
      dispatch(actionCreators.changeTabs(selectedTab));
    }
  }
}

export default connect(mapState, mapDispatch)(Tabbar);