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
                fontSize: 40, fontFamily: 'monospace', color: '#000'
            }}>
                Uber
            </Text>
            <View >
                <CustomInput

                    placeholder={'Name'}
                    value={name}
                    setValue={setName}
                />
                <CustomInput

                    placeholder={'Phone'}
                    value={phone}
                    setValue={setPhone}
                />
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
                <View style = {{display:'flex', alignItems: 'center'}}>
                <CustomButton 
                style = {{height: 40, width: 100}}
                text={'Register'} />
                </View>
              
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

})