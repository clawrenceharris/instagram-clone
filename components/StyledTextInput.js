import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle, TextInputProps, useColorScheme, Image, TouchableOpacity } from 'react-native'
import React, { ComponentProps, FC } from 'react'
import Colors from '../constants/Colors'
import assets from '../constants/assets'




const StyledTextInput = ({ icon, style, isClearable, value, onChangeText, error, ...props }) => {
    const colorScheme = useColorScheme()
    return (
        <View style={{ width: '100%' }}>

            <View style={{
                position: 'absolute',
                top: 13,
                left: 15,
                zIndex: 1,
                paddingRight: 10
            }}>
                {icon}

            </View>

            <TextInput

                style={{
                    height: 45,
                    backgroundColor: Colors.lightgray,
                    padding: 5,

                    borderRadius: 6,
                    borderWidth: 0.5,
                    borderColor: !error ? Colors.gray : Colors.red,
                    fontSize: 16,
                    paddingLeft: icon ? 45 : 10,
                    color: Colors.tint,

                    ...style

                }}
                placeholderTextColor={Colors.darkgray}
                selectionColor={Colors.accent}
                {...props}
                value={value}
                onChangeText={onChangeText}
            />

            {value?.length > 0 && isClearable &&

                <TouchableOpacity
                    onPress={() => onChangeText('')}
                    style={{ padding: 3, backgroundColor: '#C8C8C8', position: 'absolute', top: 15, right: 15, borderRadius: 50 }}>
                    <Image source={assets.close} style={{ width: 8, height: 8, tintColor: Colors.lightgray }} />
                </TouchableOpacity>}
        </View>
    )
}




export default StyledTextInput