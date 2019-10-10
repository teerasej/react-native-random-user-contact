import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Content, List, ListItem, Text, Body, Button, Icon, Left, Right, Thumbnail } from 'native-base';
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

        if(this.props.users == undefined){
            return <Text>Loading</Text>
        }

        return (
            <Content>
                <List>
                    {
                        this.props.users.map((item, index) => {
                            return (
                                <ListItem thumbnail
                                    button
                                    onPress={() => this.props.selectUser(item)}
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
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.app.users
})

const mapDispatchToProps = dispatch => ({
    startGetUser: () => actions.startGetUser(dispatch),
    selectUser: (user) => actions.selectUser(user)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
