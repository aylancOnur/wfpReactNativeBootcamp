import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';

import {Navigation} from './navigation';

import store from './redux';

const App = props => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export {App};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
