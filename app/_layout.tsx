  import { Stack } from 'expo-router';
  import store  from './controller/store'
  import { Provider } from "react-redux";

  export default function RootLayout() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
