import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StyledTextInput from '../components/StyledTextInput'
import Colors from '../constants/Colors'
import Button from '../components/Button'

const SignUpName = (props) => {
    const [name, setName] = useState('')

    const onNextPress = () => {
        setName(name.trim())
        props.navigation.navigate('SignUpPassword', { ...props.route.params, name })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>


            <View style={{ padding: 40, alignItems: 'center' }}>


                <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Add Your Name</Text>
                <Text style={{ fontSize: 16, color: Colors.darkgray, marginVertical: 15 }}>Add your name so friends can find you.</Text>

                <StyledTextInput
                    placeholder='Full name'
                    style={{ marginVertical: 10 }}
                    onChangeText={setName}
                    value={name}
                    autoCapitalize={'none'}
                />

                <Button
                    onPress={onNextPress}
                    title={'Next'}
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

export default SignUpName

