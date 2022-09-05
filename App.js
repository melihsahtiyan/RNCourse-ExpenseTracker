import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./store/redux/store";

import UpdateExpenseScreen from "./screens/UpdateExpenseScreen";
import Dashboard from "./components/root/Dashboard";

import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Dashboard} name="Dashboard" />
            <Stack.Screen component={UpdateExpenseScreen} name="Update" />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
