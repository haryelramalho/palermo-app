import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Later, I think that I'll need to add a navigation to blackList
const REDUX_PERSIST_CONFIG = {
  active: true,
  key: 'root',
  storage: AsyncStorage,
};

export default REDUX_PERSIST_CONFIG;
