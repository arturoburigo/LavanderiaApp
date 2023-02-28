import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { SelectLocation } from '../screens/SelectLocation';
import { ForgotPassword } from '../screens/ForgotPassword';
import { HomeScreen } from '../screens/HomeScreen';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />
      <Screen name="selectlocation" component={SelectLocation} />
      <Screen name="forgotpassword" component={ForgotPassword} />
      <Screen name="homescreen" component={HomeScreen} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
