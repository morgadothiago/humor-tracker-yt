import React from "react"
import { Button, TouchableOpacity } from "react-native"

type ButtonProps = {
  children: React.ReactNode
  onPress: () => void
}

export function ButtonComponent({ children, onPress }: ButtonProps) {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
}
