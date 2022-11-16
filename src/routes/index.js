import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeTabScreen from "./Home";
import LoginStackScreen from "./Login";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginStackScreen} />
          <Stack.Screen name="Home" component={HomeTabScreen} />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
