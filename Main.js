import { View, Text, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from './redux/actions'


const Main = (props) => {
    const { currentUser } = props
    useEffect(() => {
        props.fetchUser()



    }, [])

    console.log({ currentUser })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{currentUser && currentUser.name}</Text>
        </View>
    )
}


const mapDispatchToProps = dispatch => bindActionCreators({ fetchUser }, dispatch)
const mapStateToProps = store => ({
    currentUser: store.userState.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)