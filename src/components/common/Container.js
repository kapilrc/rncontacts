import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={styles.wrapper, style}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 20,
    
  }
})

export default Container
