import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Content, List, ListItem, Text, Body, Button, Icon, Left, Right, Thumbnail, Spinner } from 'native-base';
import { Types } from "../redux/actions";
import { startGetUser } from '../redux/action-start-get-user';
import { useEffectAsync } from 'useeffectasync';

export default function HomePage({ navigation }) {


    const users = useSelector(state => state.users)
    console.log('users', users)
    const dispatch = useDispatch()

    useEffect(() => {
        startGetUser(dispatch)
    }, [])


    const openDetail = (user) => {
        dispatch({
            type: Types.USER_SELECTED,
            payload: user
        })
        navigation.navigate('Detail');
    }



    if (!users) {
        return (
            <Spinner/>
        )
    }

    return (
        <Container>
            <Content>
                <List>
                    {
                        users.map((item, index) => {
                            return (
                                <ListItem thumbnail
                                    button
                                    key={index}
                                    onPress={() => { openDetail(item) }}
                                >
                                    <Left>
                                        <Thumbnail source={{ uri: item.picture.thumbnail }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.name.first} {item.name.last}</Text>
                                        <Text note>{item.phone}</Text>
                                    </Body>
                                    <Right></Right>
                                </ListItem>
                            )
                        })
                    }

                </List>
            </Content>
        </Container>
    )
}

