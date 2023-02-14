import { View, Text, Button } from 'react-native'
import React from 'react'

const Landing = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                title={'Register'}
                onPress={() => props.navigation.navigate('Register')}
            />
            <Button
                title={'Log In'}
                onPress={() => props.navigation.navigate('Log In')}
            />
        </View>
    )
}

export default Landing