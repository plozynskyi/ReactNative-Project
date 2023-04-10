import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { CustomButtonCreatePost } from "../../components/CustomButtonCreatePost";
import { HeaderBackButton } from "../../components/HeaderBackButton";

const MainTab = createBottomTabNavigator();

const Home = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: 88,
          borderBottomWidth: 1,
          borderColor: "#BDBDBD",
        },
        headerTitleStyle: {
          color: "#212121",
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          letterSpacing: -0.408,
        },
        headerTitleAlign: "center",
        tabBarStyle: {
          height: 83,
          borderTopWidth: 1,
          borderColor: "#BDBDBD",
        },
      }}
    >
      <MainTab.Screen
        options={({ route }) => ({
          title: "Posts",
          // tabBarStyle: ((route) => {
          //   const routeName = getFocusedRouteNameFromRoute(route) ?? "Posts";
          //   if (routeName !== "Posts") {
          //     return { display: "none" };
          //   }
          //   return { height: 88, borderTopWidth: 1, borderColor: "#F6F6F6" };
          // })(route),
          // tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? "#FF6C00" : "#212121"}
            />
          ),
        })}
        name="Posts"
        component={PostsScreen}
      />

      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          title: "Create Post",
          headerLeft: () => null,
          headerRight: () => <HeaderBackButton />,
          tabBarIcon: () => <AntDesign name="plus" size={13} color="#ffffff" />,
          tabBarButton: (props) => <CustomButtonCreatePost {...props} />,
        }}
        name="Create Post"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FF6C00" : "#212121"}
            />
          ),
        }}
        name="Профіль"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default Home;
