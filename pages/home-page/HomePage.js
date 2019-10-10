import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Content, List, ListItem, Text, Body, Button, Icon, Left, Right, Thumbnail } from 'native-base';

export class HomePage extends Component {
    
    static navigationOptions = {
        title: 'Contacts'  
    };

    openDetail = () => {
        this.props.navigation.navigate('Detail');
    }

    render() {
        return (
            <Content padder>
                <List>
                    <ListItem button onPress={() => this.openDetail()}>
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
