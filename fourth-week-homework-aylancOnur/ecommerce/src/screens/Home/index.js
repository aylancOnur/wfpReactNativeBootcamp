import React, {useEffect, useRef} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Animated,
} from 'react-native';
import {connect} from 'react-redux';
import {addCart, requestAllProducts} from '../../redux/actions/app';
import {getFeatureViewAnimation} from '../../utils/ui/animation';

// import {FlashList} from '@shopify/flash-list';
import PropTypes from 'prop-types';
import styles from './styles';

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

  useEffect(() => {
    props.dispatch(requestAllProducts());
  }, []);

  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const depositViewAnimation = getFeatureViewAnimation(animatedValue, 36);
  const withdrawViewAnimation = getFeatureViewAnimation(animatedValue, -16);
  const qrViewAnimation = getFeatureViewAnimation(animatedValue, -56);
  const scanViewAnimation = getFeatureViewAnimation(animatedValue, -92);

  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const textInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/images/search.png')}
              style={[styles.searchIcon, {marginLeft: 8}]}
            />
            <AnimatedTextInput
              placeholder="Search..."
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={[styles.searchInput, textInputAnimation]}
            />
          </View>

          <Image
            source={require('../../assets/images/bell.png')}
            style={styles.bell}
          />
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </View>

        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('../../assets/images/deposit.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/deposit-circle.png')}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Feature Icon
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, withdrawViewAnimation]}>
            <Animated.Image
              source={require('../../assets/images/withdraw.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/withdraw-circle.png')}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Feature Icon
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, qrViewAnimation]}>
            <Animated.Image
              source={require('../../assets/images/qr.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/qr-circle.png')}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Feature Icon
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, scanViewAnimation]}>
            <Animated.Image
              source={require('../../assets/images/scan.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/scan-circle.png')}
              style={[styles.icon32, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Feature Icon
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>

      <View style={styles.paddingForHeader} />
      <View style={styles.container}>
        <FlatList
          data={props.app.products.products}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image style={styles.image} source={{uri: item.thumbnail}} />
              <Text style={styles.price}>{item.price} TL</Text>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleCart(item)}>
                <Text>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          )}
          estimatedItemSize={200}
          numColumns={2}
        />
      </View>
    </>
  );
});

Home.defaultProps = {
  extraData: 'Data is undefined',
};

Home.propTypes = {
  extraData: PropTypes.string,
};

export {Home};
