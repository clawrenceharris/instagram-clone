import { View, Text, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React from 'react'
import StyledTextInput from '../components/StyledTextInput'
import { useState } from 'react'
import Button from '../components/Button'
import Colors from '../constants/Colors'

const SignUpPassword = (props) => {
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>


            <View style={{ padding: 40, alignItems: 'center' }}>


                <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Create a Password</Text>
                <Text style={{ textAlign: 'center', fontSize: 16, color: Colors.darkgray, marginVertical: 15 }}>Create your password for loggin in and out of your account.</Text>

                <StyledTextInput
                    placeholder='Password'
                    style={{ marginVertical: 10 }}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    autoCapitalize={'none'}
                />

                <Button
                    onPress={() => props.navigation.navigate('SignUpBirthday', { ...props.route.params, password })}
                    title={'Next'}
                    disabled={password.length < 6}
                    style={{ marginVertical: 15 }}
                />

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', height: 100, alignItems: 'center', position: 'absolute', bottom: 0, width: '100%', borderTopColor: Colors.gray, borderTopWidth: 1 }}>


                <Text style={{ color: Colors.darkgray }}>Already have an account?</Text>


                <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate('LogIn')}
                >
                    <View>

                        <Text style={{ marginLeft: 5, color: Colors.primary, fontWeight: 'bold' }}>Sign In.</Text>
                    </View>

                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}

export default SignUpPassword