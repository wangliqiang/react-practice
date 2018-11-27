import * as actionTypes from './actionTypes';

export const changeTabs = (selectedTab) => ({
  type: actionTypes.CHANGE_TABS,
  selectedTab
})