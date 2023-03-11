import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignInScreen';
import { SignUp } from '../screens/SignUpScreen';
import { SelectLocation } from '../screens/SelectLocationScreen';
import { ForgotPassword } from '../screens/ForgotPasswordScreen';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="signin">
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="selectlocation" component={SelectLocation} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="bottomnavigator" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}
