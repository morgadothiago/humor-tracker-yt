import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { ButtonComponent } from "./shared/components/Button"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ButtonComponent onPress={() => console.log("Button pressed")}>
        <Text>Press Me</Text>
      </ButtonComponent>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
