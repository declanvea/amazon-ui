import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Container, Content, Left, Right, Icon, Header, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItem from '../components/RecommendedCardItem';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
          <Header style={{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }}>
              <Left style={{ flexDirection: 'row' }} >
                  <Icon onPress={()=>this.props.navigation.navigate('DrawerOpen')} name='md-menu' style={{ color: '#ffffff', marginRight: 15 }} />
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

          <Content style={{ backgroundColor: '#d5d5d6', marginTop: 70 }} >
            <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }} >
              <Text>Hello, Declan</Text>
              <View style={{ flexDirection: 'row' }} >
                <Text>Your Account </Text>
                <Icon name="arrow-forward" style={{ fontSize:18 }} />
              </View>
            </View>
            
            <Swiper autoplay={ true } style={{ height: 100 }} >
              <View style={{ flex:1 }}>
                <Image 
                  style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                  source={ require('../assets/tm.jpg') }
                />
              </View>
              <View style={{ flex:1 }}>
                <Image 
                  style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                  source={ require('../assets/golfcourse.png') }
                />
              </View>
              <View style={{ flex:1 }}>
                <Image 
                  style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                  source={ require('../assets/amazon.png') }
                />
              </View>
            </Swiper>
            <Card>
              <CardItem header>
                <Text>Your Receommendations</Text>
              </CardItem>
              <RecommendedCardItem
                itemName='M4 Driver'
                itemCreator='TaylorMade'
                itemPrice='$429.99'
                savings='50'
                imageUri={require('../assets/m4.jpg')}
                rating={5}
              />
              <RecommendedCardItem
                itemName='TP Black Copper Collection Juno'
                itemCreator='TaylorMade'
                itemPrice='$219.99'
                savings='39.99'
                imageUri={require('../assets/juno.jpg')}
                rating={4}
              />
              <RecommendedCardItem
                itemName='Stratus Tech Glove'
                itemCreator='TaylorMade'
                itemPrice='$11.99'
                savings='7.99'
                imageUri={require('../assets/glove.jpg')}
                rating={3}
              />
              <RecommendedCardItem
                itemName='MyNumber TP5X'
                itemCreator='TaylorMade'
                itemPrice='$46.99'
                savings='10.99'
                imageUri={require('../assets/TP5x.jpg')}
                rating={5}
              />
            </Card>
          </Content>
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