import React from 'react'
import { View } from 'react-native'
import { Content, List, ListItem, Text, Body, Button, Icon } from 'native-base';
import {  useSelector } from 'react-redux'

import { Type } from "../redux/actions";
import { makeCall } from '../redux/action-make-call';

export default function DetailPage() {

    const user = useSelector(state => state.selectedUser)


    return (
        <Content padder>
            <List>
                <ListItem>
                    <Text>ชื่อ: {user.name.first}</Text>
                </ListItem>
                <ListItem>
                    <Text>นามสกุล: {user.name.last}</Text>
                </ListItem>
            </List>
            <Button iconLeft block
                onPress={() => { makeCall(user.phone) }}
                style={{
                    marginTop: 10
                }}>
                <Icon name="call" />
                <Text>โทร: {user.phone}</Text>
            </Button>
        </Content>
    )
}
