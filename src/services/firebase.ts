import { Alert, Platform } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const CLI_ID_GOOGLE =
  Platform.OS == 'ios'
    ? '376542548983-qslooia7bu76lserru0uhcl2e9uif6me.apps.googleusercontent.com'
    : '376542548983-fmnb9rl9g96f7coe3m2s2b2v8fe3jsjc.apps.googleusercontent.com';

export function useGoogleSignin() {
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: CLI_ID_GOOGLE, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120 // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  async function handleGoogleLogin() {
    try {
      const userAuth = await GoogleSignin.signIn();
      console.log(userAuth);
      setUserName(userAuth.user.givenName); // set the user's given name
      setUserPhoto(userAuth.user.photo); // set the user's photo
      setUserEmail(userAuth.user.email); // set the user's email
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Operação cancelada pelo usuario');
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  return { handleGoogleLogin, userName, userPhoto, userEmail };
}
