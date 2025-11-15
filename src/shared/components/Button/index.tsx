import React from "react"
import { Button } from "react-native"

type ButtonProps = {
  title: string

  onPress: () => void
}

export function ButtonComponent({ title, onPress }: ButtonProps) {
  return <Button title={title} onPress={onPress} />
}
