import React from 'react';
import List from './List';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import * as rdx from './rdx'


const View = connect(
  rdx.mapStateToProps,
  rdx.mapDispatchToProps
)(List)

  const WrappedApp = () => (
    <Provider store={rdx.store}>
      <View />
    </Provider>
  );



export default WrappedApp;
