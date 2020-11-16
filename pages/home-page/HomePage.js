import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container,Content, List, ListItem, Text, Body, Button, Icon, Left, Right, Thumbnail } from 'native-base';
import actions from "../../redux/actions";

export class HomePage extends Component {

    componentDidMount() {
        this.props.startGetUser();
    }

    openDetail = (user) => {
        this.props.selectUser(user);
        this.props.navigation.navigate('Detail');
    }

    render() {

        if(this.props.users == undefined){
            return <Text>Loading</Text>
        }

        return (
            <Container>
            <Content>
                <List>
                    {
                        this.props.users.map((item, index) => {
                            return (
                                <ListItem thumbnail
                                    button
                                    key={index}
                                    onPress={() => {this.openDetail(item)}}
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
}

const mapStateToProps = (state) => ({
    users: state.app.users
})

const mapDispatchToProps = dispatch => ({
    startGetUser: () => actions.startGetUser(dispatch),
    selectUser: (user) => dispatch(actions.selectUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
