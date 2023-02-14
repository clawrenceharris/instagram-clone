import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StyledTextInput from '../components/StyledTextInput'
import Colors from '../constants/Colors'
import Button from '../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUpBirthday = () => {
    const [date, setDate] = useState(new Date())
    const onChange = (event, selectedDate) => {

        if (event.type === 'dismissed') {
            Alert.alert(
                'picker was dismissed',
                undefined,
                [
                    {
                        text: 'great',
                    },
                ],
                { cancelable: true },
            );
            return;
        }

        if (event.type === 'neutralButtonPressed') {
            setDate(new Date(0));
        } else {
            setDate(selectedDate);
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>


            <View style={{ padding: 40, alignItems: 'center' }}>


                <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Add your birthday</Text>
                <Text style={{ textAlign: 'center', fontSize: 16, color: Colors.tint, marginVertical: 15 }}>This won't be part of your public profile.</Text>

                <StyledTextInput
                    editable={false}

                />

            </View>

            <View style={{ padding: 10, alignItems: 'center', position: 'absolute', bottom: 0, width: '100%', borderTopColor: Colors.gray, borderTopWidth: 1 }}>



                <Button
                    onPress={() => props.navigation.navigate('SignUpBirthday', { ...props.route.params, password })}
                    title={'Next'}
                    style={{ marginVertical: 15 }}
                />
                <DateTimePicker
                    testID="dateTimePicker"
                    display='spinner'
                    maximumDate={new Date('2023')}
                    minimumDate={new Date('1920')}
                    value={date || new Date()}
                    textColor={Colors.white}
                    accentColor={Colors.accent}
                    onChange={onChange}

                />


            </View>


        </SafeAreaView>
    )
}

export default SignUpBirthday