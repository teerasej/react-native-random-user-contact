import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, List, ListItem, Text, Body, Button, Icon } from 'native-base';
import { connect } from 'react-redux'

import actions from "../../redux/actions";

export class DetailPage extends Component {


    render() {
        return (
            <Content padder>
                <List>
                    <ListItem>
                        <Text>ชื่อ:</Text>
                    </ListItem>
                    <ListItem>
                        <Text>นามสกุล:</Text>
                    </ListItem>
                </List>
                <Button iconLeft block 
                style={{
                    marginTop: 10
                }}>
                    <Icon name="call" />
                    <Text>โทร: </Text>
                </Button>
            </Content>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
