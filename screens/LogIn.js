import { View, Text, TextInput, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Keyboard, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import Colors from '../constants/Colors'
import assets from '../constants/assets'
import Button from '../components/Button'
import StyledTextInput from '../components/StyledTextInput'

const LogIn = (props) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState(props?.route?.params?.email || '')
    const [error, setError] = useState('')
    const onLogIn = () => {

        auth
            .signInWithEmailAndPassword(email, password)
            .then((result) => { console.log(result) })
            .catch((error) => setError(error.message))
    }
    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


                <View style={{ padding: 15, flex: 1, width: '100%', justifyContent: 'center', }}>
                    <KeyboardAvoidingView behavior='position'>



                        <Image source={assets.logo} style={{ width: 210, height: 70, marginBottom: 20, alignSelf: 'center' }} />

                        <StyledTextInput
                            style={{ marginBottom: 20 }}
                            placeholder='Email'
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            value={email}
                            isClearable
                            autoCapitalize={'none'}

                        />
                        <StyledTextInput
                            placeholder='Password'
                            onChangeText={setPassword}
                            value={password}
                            isClearable
                            autoCapitalize={'none'}
                            secureTextEntry
                        />

                        <TouchableWithoutFeedback
                            onPress={() => { }}
                        >

                            <View style={{ alignSelf: 'flex-end', paddingVertical: 20 }}>
                                <Text style={{ color: Colors.primary, fontWeight: 'bold' }}>{"Forgot password?"}</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <Button
                            title='Log in'
                            onPress={onLogIn}
                            style={{ marginBottom: 30 }}

                            disabled={!email || !password}
                        />
                    </KeyboardAvoidingView>

                </View>

            </TouchableWithoutFeedback>
            <View style={{ flexDirection: 'row', justifyContent: 'center', height: 100, alignItems: 'center', position: 'absolute', bottom: 0, width: '100%', borderTopColor: Colors.gray, borderTopWidth: 1 }}>


                <Text style={{ color: Colors.darkgray }}>Dont have an account?</Text>


                <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate('SignUp')}
                >
                    <View>

                        <Text style={{ marginLeft: 5, color: Colors.primary, fontWeight: 'bold' }}>Sign Up.</Text>
                    </View>

                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default LogIn