import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import * as Font from "expo-font";
import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {ChatProvider} from './src/state/ChatProvider';


export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
  });

  if (!fontsLoaded) return null

  return (
    <GestureHandlerRootView>
      <ChatProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ChatProvider>
    </GestureHandlerRootView>
  );
}
