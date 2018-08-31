import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Container, Content, Left, Right, Icon, Header, Item, Input } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }}>
              <Left style={{ flexDirection: 'row' }} >
                  <Icon name='md-menu' style={{ color: '#ffffff', marginRight: 15 }} />
                  <FAIcon name='amazon' style={{ fontSize: 32, color: '#ffffff' }}/>
              </Left>
              <Right>
                <Icon name="md-cart" style={{ color: '#ffffff' }} />
              </Right>
          </Header>
          <View style={{ position: 'absolute', left: 0, right: 0, top: 90, height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }} >
            <TouchableOpacity>
              <View style={{ width: 100, backgroundColor: '#e7e7e7eb', height: 50, borderRadius: 4, padding: 10 }} >
                <Text style={{ fontSize: 12 }} >Shop by</Text>
                <Text style={{ fontWeight: 'bold'}} >Category</Text>
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, height: '100%', marginLeft: 5, justifyContent: 'center' }} >
              <Item style={{ backgroundColor: '#ffffff', paddingHorizontal: 10, borderRadius: 4 }} >
                <Icon name='search' style={{ fontSize: 20, paddingTop: 5 }} />
                <Input placeholder="Search" />
              </Item>
            </View>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});