import React from 'react'
import { Container, Content, List, ListItem, Text, Body, Left, Right, Thumbnail } from 'native-base';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { createAction_UserSelected } from '../../redux/actions';

export default function HomePage() {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const users = useSelector(state => state.users)

    const openDetail = (user) => {
        dispatch(createAction_UserSelected(user))
        navigation.navigate('Detail')
    }

    if (users == undefined) {
        return <Text>Loading</Text>
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
