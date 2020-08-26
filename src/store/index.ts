import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;