import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'



const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container} >

            <Text style={{
                fontWeight: 'bold', textAlign: "center", paddingTop: 30,
                fontSize: 40, fontFamily: 'monospace', color: '#000'
            }}>
                Uber
            </Text>
            <View >
                <CustomInput
                style = {{borderBottomWidth: 1,
    borderBottomColor: '#000',}}
                    placeholder={'Email'}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                style = {{borderBottomWidth: 1,
    borderBottomColor: '#000',}}
                    placeholder={'Password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <CustomButton
                        style={{ height: 40, width: 100 }}
                        text={'Login'} />


                </View>
                <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
                    <Text style={styles.txt}>Not a Member? Register Now!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    txt: {
        textDecorationLine: 'underline'
    }
})