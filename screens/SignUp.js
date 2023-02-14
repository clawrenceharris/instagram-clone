import { View, Text, TextInput, Image, Modal, TouchableOpacity, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import Colors from '../constants/Colors'
import assets from '../constants/assets'
import Button from '../components/Button'
import StyledTextInput from '../components/StyledTextInput'

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const emailEndings = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@aol.com']
    const [emailEnding, setEmailEnding] = useState('')
    const [error, setError] = useState('')
    const [showModal, setShowModal] = useState(false)
    const onNextPress = () => {
        setEmail(email.trim())
        if (isValidEmail()) {
            db.collection('users')
                .where('email', '==', email)
                .get()
                .then(query => {
                    if (query.docs.length > 0) {

                        setShowModal(true)
                    }
                    else {
                        setError('')
                        props.navigation.navigate('SignUpName', { email })

                    }
                }).catch((e) => setError(e))
        }
        else {
            setError('Please enter a valid email.')
        }


    }
    const onEmailEndingPress = (item) => {
        setEmailEnding(item);
        if (email.indexOf('@') >= 0)
            setEmail(email.replace(email.substring(email.indexOf('@'), email.length), item))
        else
            setEmail(email + item)

    }

    const onEmailChange = (value) => {
        setEmail(value)
        if (!value.length) {
            setEmailEnding('')
        }
    }
    const onCreateNewAccount = () => {
        props.navigation.navigate('SignUpName', { email })
    }
    const isValidEmail = () => {
        return email.indexOf('.') <= (email.length - 1) - 2 &&
            email.indexOf('@') >= 1 &&
            email.substring(email.indexOf('@'), email.indexOf('.')).length > 1
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                <Image source={assets.chevron_left} style={{ width: 28, height: 28, resizeMode: 'contain', margin: 10 }} />
            </TouchableWithoutFeedback>
            <Modal
                transparent
                visible={showModal}
                animationType='fade'


            >
                <View style={{ flex: 1, backgroundColor: '#00000020', justifyContent: 'center', alignItems: 'center' }}>


                    <View style={{ backgroundColor: Colors.background, width: '70%', height: 310, borderRadius: 20 }}>
                        <View style={{ padding: 10, width: '100%', alignItems: 'center', }}>
                            <Text style={{ marginTop: 20, textAlign: 'center', width: '60%', fontWeight: 'bold', fontSize: 18 }}>This Email is on Another Account</Text>
                            <Text style={{ marginTop: 20, textAlign: 'center', color: Colors.darkergray, fontSize: 16 }}>{"You can log into the account associated with that email or you can use that email to make a new account."}</Text>

                        </View>
                        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>


                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('LogIn', { email })}
                                style={{ borderTopWidth: 1, borderTopColor: Colors.gray, alignItems: 'center', padding: 15 }}>
                                <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 16 }}>Log into existing account</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={onCreateNewAccount}
                                style={{ borderTopWidth: 1, borderTopColor: Colors.gray, alignItems: 'center', padding: 15 }}>
                                <Text style={{ color: Colors.tint, fontSize: 16 }} >Create new account</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </Modal>

            <View style={{ paddingHorizontal: 40, alignItems: 'center' }}>


                <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>Enter Email and Password</Text>

                <StyledTextInput
                    placeholder='Email'
                    keyboardType='email-address'
                    error={error}
                    onChangeText={onEmailChange}
                    value={email}
                    isClearable
                    autoCapitalize={'none'}
                />



                <Text style={{ alignSelf: 'flex-start', marginVertical: 10, color: 'red' }}>{error}</Text>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginBottom: 20 }}>


                    {emailEndings.map((item) => (
                        <TouchableWithoutFeedback
                            key={item}
                            onPress={() => onEmailEndingPress(item)}>

                            <View style={{ marginRight: 10, padding: 5, borderRadius: 6, backgroundColor: emailEnding === item ? Colors.primary + '30' : '#EFEFEF' }}>
                                <Text style={{ color: emailEnding === item ? Colors.primary : Colors.tint }}>{item}</Text>
                            </View>
                        </TouchableWithoutFeedback>

                    ))}
                </ScrollView>





                <Button
                    onPress={onNextPress}
                    title={'Next'}
                    disabled={!email}
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

export default SignUp