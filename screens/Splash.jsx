import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Inter_900Black,Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as Font from "expo-splash-screen";
import { useEffect } from "react";

Font.preventAutoHideAsync();

export default function SplashScreen() {
  const [loaded, error] = useFonts({
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      Font.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar barStyle="light-content" />
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 48,
            textAlign: "center",
            fontFamily: "Inter_700Bold",
          }}
        >
          RealTimeChat
        </Text>
      </View>
    </SafeAreaView>
  );
}
