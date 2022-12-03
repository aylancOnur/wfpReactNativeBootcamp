import React, {useEffect} from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addCart} from '../../redux/actions/app';

// import {FlashList} from '@shopify/flash-list';
import PropTypes from 'prop-types';
import styles from './styles';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'cart',
});

const DATA = [
  {
    id: '1',
    title: 'First Item',
    image:
      'https://productimages.hepsiburada.net/s/203/200-200/110000176085382.jpg',
    price: '999,99',
  },
  {
    id: '2',
    title: 'Second Item',
    image:
      'https://productimages.hepsiburada.net/s/128/200-200/110000078076147.jpg',
    price: '999,99',
  },
  {
    id: '3',
    title: 'Third Item',
    image:
      'https://productimages.hepsiburada.net/s/37/200-200/10535529054258.jpg',
    price: '999,99',
  },
  {
    id: '4',
    title: 'Fourth Item',
    image:
      'https://productimages.hepsiburada.net/s/86/200-200/110000028292419.jpg',
    price: '999,99',
  },
  {
    id: '5',
    title: 'Fifth Item',
    image:
      'https://productimages.hepsiburada.net/s/191/200-200/110000158504254.jpg',
    price: '999,99',
  },
  {
    id: '6',
    title: 'Sixth Item',
    image:
      'https://productimages.hepsiburada.net/s/192/200-200/110000159031047.jpg',
    price: '999,99',
  },
  {
    id: '7',
    title: 'Seventh Item',
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

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  // useEffect(() => {
  //   storage.clearAll();
  // }, []);
  const cart = props.app.cart;

  const handleCart = item => {
    const newCart = [
      ...cart,
      {
        item,
      },
    ];
    props.dispatch(addCart(newCart));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.price}>{item.price} TL</Text>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleCart(item)}>
              <Text>SEPETE EKLE</Text>
            </TouchableOpacity>
          </View>
        )}
        estimatedItemSize={200}
        numColumns={2}
      />
      {/* <Button onPress={() => storeData()} title={'Store Data'} /> */}
    </View>
  );
});

Home.defaultProps = {
  extraData: 'Data is undefined',
};

Home.propTypes = {
  extraData: PropTypes.string,
};

export {Home};
