import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Content, List, ListItem, Text, Body, Button, Icon } from 'native-base';
import actions from "../../redux/actions";

export class HomePage extends Component {
    
    static navigationOptions = {
        title: 'Contacts'  
    };

    componentDidMount() {
        this.props.startGetUser();
    }

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

const mapDispatchToProps = dispatch => ({
    startGetUser: () => actions.startGetUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
