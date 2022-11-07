import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'



const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container} >

            <Text style={{
                fontWeight: 'bold', textAlign: "center", paddingTop: 30,
                fontSize: 40, fontFamily: 'monospace', color: 'white'
            }}>
                Uber
            </Text>
            <View >
                <CustomInput
                    placeholder={'Email'}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton text={'Login'} />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})