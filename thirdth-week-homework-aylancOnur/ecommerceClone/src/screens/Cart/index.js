import React from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    title: 'First Item',
    image:
      'https://productimages.hepsiburada.net/s/203/200-200/110000176085382.jpg',
    price: '999,99',
  },
  {
    title: 'Second Item',
    image:
      'https://productimages.hepsiburada.net/s/128/200-200/110000078076147.jpg',
    price: '999,99',
  },
  {
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/37/200-200/10535529054258.jpg',
    price: '999,99',
  },
  {
    title: 'Fourth Item',
    image:
      'https://productimages.hepsiburada.net/s/86/200-200/110000028292419.jpg',
    price: '999,99',
  },
  {
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/191/200-200/110000158504254.jpg',
    price: '999,99',
  },
  {
    title: 'Fourth Item',
    image:
      'https://productimages.hepsiburada.net/s/192/200-200/110000159031047.jpg',
    price: '999,99',
  },
  {
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/14/320-320/8842800332850.jpg',
    price: '999,99',
  },
];

const mapStateToProps = state => {
  return {app: state.app};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const cart = props.app.cart;
  console.log('CART COMPONENT', cart);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(d, i) => i + ''}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.item.image}} />
            <View>
              <Text style={styles.title}>{item.item.title}</Text>
              <Text style={styles.price}>{item.item.price} TL</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity>
                <Text style={styles.icon}>
                  <Icon name="plus" size={20} color="#ff6600" />
                </Text>
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>1</Text>
                <Text style={styles.icon}>
                  <Icon name="minus" size={20} color="#ff6600" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        estimatedItemSize={200}
      />
    </View>
  );
});

export {Cart};
