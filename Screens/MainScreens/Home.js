import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

import PostsScreen from './PostsScreen/PostsScreen/';
import CreatePostsScreen from './CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';

import { CustomButtonCreatePost } from '../../components/Buttons/CustomButtonCreatePost';
import { HeaderBackButton } from '../../components/Buttons/HeaderBackButton';
import { LogOutButton } from '../../components/Buttons/LogOutButton';

const MainTab = createBottomTabNavigator();

const Home = ({ route, navigation }) => {
  const { login, email, image, posts } = route.params;
  return (
    <MainTab.Navigator
      initialRouteName={'Posts'}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height: 88,
          borderBottomWidth: 1,
          borderColor: '#BDBDBD',
        },
        headerTitleStyle: {
          color: '#212121',
          fontFamily: 'Roboto-Medium',
          fontSize: 17,
          letterSpacing: -0.408,
        },
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 88,
          borderTopWidth: 1,
          borderColor: '#F6F6F6',
        },
      }}
    >
      <MainTab.Screen
        initialParams={{ login, email, image }}
        options={() => ({
          headerShown: false,
          headerLeft: () => null,
          headerRight: () => <LogOutButton navigation={navigation} />,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? '#FF6C00' : '#212121'}
            />
          ),
        })}
        name="PostsScreen"
        component={PostsScreen}
      />

      <MainTab.Screen
        initialParams={{ login, email, image, posts }}
        options={{
          headerShown: true,
          title: 'CreatePost',
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => null,
          tabBarIcon: () => <AntDesign name="plus" size={13} color="#ffffff" />,
          tabBarButton: props => <CustomButtonCreatePost {...props} />,
        }}
        name="CreatePost"
        component={CreatePostsScreen}
      />

      <MainTab.Screen
        initialParams={{ login, email, image, posts }}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? '#FF6C00' : '#212121'}
            />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default Home;
