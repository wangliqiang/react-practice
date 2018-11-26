import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
  selectedTab: 'blueTab',
  hidden: false,
  fullScreen: true,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TABS:
      return state.set('selectedTab',action.selectedTab)
    default:
      return state;
  }
}