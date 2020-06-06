import {createStore} from 'redux';
import {MakeStore, createWrapper} from 'next-redux-wrapper';
import reducer from './reducers';

const makeStore: MakeStore = () => createStore(reducer);
export const wrapper = createWrapper(makeStore, {debug: true});