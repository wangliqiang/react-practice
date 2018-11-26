import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

export const changeTabs = (selectedTab) => ({
  type: actionTypes.CHANGE_TABS,
  selectedTab
})