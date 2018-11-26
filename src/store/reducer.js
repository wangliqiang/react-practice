import { combineReducers } from 'redux-immutable';
import { reducer as TabbarReducer } from '../common/tabbar/store';

const reducer = combineReducers({
  tabbar: TabbarReducer
})

export default reducer;