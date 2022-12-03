import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/ui/dimensions';

const UPPER_HEADER_HEIGHT = 32;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT = 96;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: W(4),
  },
  icon16: {
    width: 16,
    height: 16,
  },
  icon32: {
    width: 32,
    height: 32,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#AF0C6E',
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP,
  },
  upperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  bell: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  lowerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: LOWER_HEADER_HEIGHT,
    paddingHorizontal: 16,
  },
  feature: {
    alignItems: 'center',
  },
  featureIconCircle: {
    width: 32,
    height: 32,
  },
  featureName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 12,
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  card: {
    width: W(44),
    borderWidth: 0.5,
    borderColor: '#f0f0f0',
    borderRadius: 8,
    margin: W(1),
    marginBottom: W(5),
  },
  image: {
    height: H(18),
    borderRadius: 8,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
