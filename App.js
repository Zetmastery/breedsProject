import React from 'react';
import type {Node} from 'react';
import {ScrollView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from './navigation/navigation';
//screens
import Main from './Screens/Main';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
