import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input';


const Login = () => {

  const [value, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Container>

        <Input 
          label="Username"
          onChangeText={txt => onChangeText(txt)}
          value={value}
          icon={<Text>Hide</Text>}
          iconPosition="right"
          placeholder="username"
        />

        <Input 
          label="Password"
          onChangeText={txt => onChangeText(txt)}
          value={value}
          icon={<Text>Hide</Text>}
          iconPosition="right"
          placeholder="xxxxxx"
        />
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
})

export default Login
