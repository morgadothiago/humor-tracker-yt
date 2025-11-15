import { StatusBar } from "expo-status-bar"
import { Alert, StyleSheet, Text, View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { ButtonComponent } from "./shared/components/Button"
import { useState } from "react"
export default function App() {
  // Estado do componente inicia com 0
  const [count, setCount] = useState(0)

  const handleAddNewCount = () => {
    if (count >= 0) {
      setCount(count + 1)

      Alert.alert(
        "Contador atualizado",
        `O contador agora está em ${count + 1}`
      )
    } else {
      setCount(0)
    }
  }

  const handleResetCount = () => {
    if (count > 0) {
      setCount(0)

      Alert.alert("Contador reiniciado", "O contador foi zerado com sucesso!")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Ao clicar no botão e disparado um evento que atualiza o estado e adiciona valorao contador */}
      <ButtonComponent title="Primeiro Component" onPress={handleAddNewCount} />

      <Text>Quantas vezes o botao foi apertado, {count}</Text>

      <Text>
        {count === 0 ? "Botão ainda não foi apertado" : "Botão foi apertado"}
      </Text>
      {/* Aqui estamos zerando o contador para estado inicial de 0 */}
      <ButtonComponent title="Reiniciar Contador" onPress={handleResetCount} />
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
