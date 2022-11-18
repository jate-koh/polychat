import { Button, Icon, IconButton, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IconFe from "react-native-vector-icons/Feather";
import IconIo from "react-native-vector-icons/Ionicons";
import IconMa from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/Home";

import FriendsStackScreen from "../screens/Friends/FriendsStackScreen";
import ChatStackScreen from "./Chat";
// import ChatStackScreen from "../screens/Chat/ChatStackScreen";
import AssistanceStackScreen from "../screens/Assistance/AssistanceStackScreen";
import ProfileStackScreen from "./Profile";

const HomeTab = createBottomTabNavigator();

const SOSIcon = () => {
  return (
    <Button
      variant="solid"
      style={{
        border: "4px solid white",
        borderRadius: "100%",
        backgroundColor: "#eb3434",
        width: 50,
        height: 50,
        bottom: 20,
      }}
      onPress={() => alert("SOS")}
    >
      SOS
    </Button>
  );
};

const HomeTabIcon = ({ focused, icon, text }) => {
  return (
    <>
      {/* <Icon
        as={icon}
        color={focused ? '#188ffc' : '#1f2937'}
        name={text}
        size={4}
      /> */}
      {icon}
      <Text color={focused ? "#188ffc" : "#1f2937"} fontSize="12px" textAlign="center" w="64px">
        {text}
      </Text>
    </>
  );
};

const HomeTabScreen = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="ProfileHome"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <HomeTab.Screen
        name="ChatHome"
        component={ChatStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            HomeTabIcon({
              focused,
              icon: (
                <IconIo
                  name="chatbubble-outline"
                  size="16px"
                  color={focused ? "#188ffc" : "#1f2937"}
                />
              ),
              text: "Chat",
            }),
        }}
      />
      <HomeTab.Screen
        name="AssistanceHome"
        component={AssistanceStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            HomeTabIcon({
              focused,
              icon: (
                <IconMa
                  name="hand-heart-outline"
                  size="16px"
                  color={focused ? "#188ffc" : "#1f2937"}
                />
              ),
              text: "Assistance",
            }),
        }}
      />
      <HomeTab.Screen
        name="SOS"
        component={HomeScreen}
        options={{
          tabBarButton: () => SOSIcon(),
        }}
      />
      <HomeTab.Screen
        name="FriendsHome"
        component={FriendsStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            HomeTabIcon({
              focused,
              icon: (
                <IconFe
                  name="users"
                  size="16px"
                  color={focused ? "#188ffc" : "#1f2937"}
                />
              ),
              text: "Friends",
            }),
        }}
      />
      <HomeTab.Screen
        name="ProfileHome"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            HomeTabIcon({
              focused,
              icon: (
                <IconFe
                  name="user"
                  size="16px"
                  color={focused ? "#188ffc" : "#1f2937"}
                />
              ),
              text: "Profile",
            }),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabScreen;