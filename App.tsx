import { StatusBar, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={{ backgroundColor: '#1A1A1A', flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </View>
  );
}
