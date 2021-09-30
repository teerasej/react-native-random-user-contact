import React from 'react'
import { Content, List, ListItem, Text, Button, Icon } from 'native-base';

import { makeCall } from "../../redux/actions";
import { useSelector } from 'react-redux';

export default function DetailPage() {

    const selectedUser = useSelector(state => state.selectedUser)

    const callUser = (phoneNumber) => {
        makeCall(phoneNumber)
    }

    return (
        <Content padder>
            <List>
                <ListItem>
                    <Text>ชื่อ: {selectedUser.name.first}</Text>
                </ListItem>
                <ListItem>
                    <Text>นามสกุล: {selectedUser.name.last}</Text>
                </ListItem>
            </List>
            <Button iconLeft block
                onPress={() => callUser(selectedUser.phone)}
                style={{
                    marginTop: 10
                }}>
                <Icon name="call" />
                <Text>โทร: {selectedUser.phone}</Text>
            </Button>
        </Content>
    )

}
