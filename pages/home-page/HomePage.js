import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Content, List, ListItem, Text, Body, Button, Icon } from 'native-base';

export class HomePage extends Component {
    
    static navigationOptions = {
        title: 'Contacts'  
    };

    render() {
        return (
            <Content padder>
                <List>
                    <ListItem>
                        <Text>Hello</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
