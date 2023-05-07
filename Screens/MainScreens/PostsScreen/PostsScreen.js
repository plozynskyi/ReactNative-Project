import { createStackNavigator } from '@react-navigation/stack';

import { DefaultPostsScreen } from '../../NestedScreens/DefaultPostsScreen';
import { CommentsScreen } from '../../NestedScreens/CommentsScreen';
import { MapScreen } from '../../NestedScreens/MapScreen';

import { HeaderBackButton } from '../../../components/Buttons/HeaderBackButton';
import { LogOutButton } from '../../../components/Buttons/LogOutButton';

const NestedScreen = createStackNavigator();

const PostsScreen = ({ navigation, route }) => {
  const { login, email, image, newPost } = route.params;
  return (
    <NestedScreen.Navigator
      screenOptions={{
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
      }}
    >
      <NestedScreen.Screen
        initialParams={{
          login,
          email,
          image,
          newPost,
        }}
        name="Posts"
        component={DefaultPostsScreen}
        options={{
          headerLeft: () => null,
          headerRight: () => <LogOutButton navigation={navigation} />,
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => null,
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerLeft: () => <HeaderBackButton navigation={navigation} />,
          headerRight: () => null,
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
