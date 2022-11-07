import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'



const Register = () => {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container} >

            <Text style={{
                fontWeight: 'bold', textAlign: "center", paddingTop: 30,
                fontSize: 40, fontFamily: 'monospace', color: 'black'
            }}>
                Uber
            </Text>
            <View >
                <CustomInput
                    style={styles.input}
                    placeholder={'Name'}
                    value={name}
                    setValue={setName}
                />
                <CustomInput
                    style={styles.input}
                    placeholder={'Phone'}
                    value={phone}
                    setValue={setPhone}
                />
                <CustomInput
                    style={styles.input}
                    placeholder={'Email'}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    style={styles.input}
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton text={'Register'} />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#0000'
    }
})