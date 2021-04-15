import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import colors from '../../assets/theme/colors';

const Input = ({onChangeText, style, value, icon, iconPosition, placeholder, label}) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inner}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 12
  },
  inner: {
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  input: {
    height: 20,
    margin: 12,
    padding: 20,
    borderColor: 'grey'
  },
  textInput: {
    flex: 1
  },
  label: {
    // margin: 12
  }
});

export default Input
