import {SafeAreaView, StyleSheet} from 'react-native';
import DrawerNav from './src/Navigations/DrawerNav';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import 'react-native-gesture-handler';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DrawerNav />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
