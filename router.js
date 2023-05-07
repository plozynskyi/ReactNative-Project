import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/MainScreens/Home';
import LoginScreen from './Screens/authScreens/LoginScreen';
import RegistrationScreen from './Screens/authScreens/RegistrationScreen';

const AuthStack = createStackNavigator();

const useRout = isAuth => {
  // if (isAuth) {
  //   return <Home />;
  // }

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />

      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />

      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </AuthStack.Navigator>
  );
};

export default useRout;
