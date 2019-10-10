import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, List, ListItem, Text, Body, Button, Icon } from 'native-base';
import { connect } from 'react-redux'

export class DetailPage extends Component {
  
    static navigationOptions = {
        title: 'Detail'  
    };

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
                    <ListItem>
                        <Button iconLeft>
                            <Icon name="phone"/>
                            <Text>โทร: </Text>
                        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
