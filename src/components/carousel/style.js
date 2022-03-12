import { Metrics } from '../../themes';
const height = Metrics.screenWidth * 0.6;
const styles = {
  imageHeight: {
    height: Metrics.screenWidth * 0.6
  },
  container: {
    marginTop: Metrics.baseMargin,
    width: Metrics.screenWidth
  },
  imageWrapper: {
    marginVertical: Metrics.baseMargin,
    width: Metrics.screenWidth
  },
  image: {
    width: Metrics.screenWidth,
    height: height
  },
  headerContainer: {
    marginHorizontal: Metrics.smallMargin,
    marginVertical: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerProfileImage: {
    width: Metrics.doubleSemiMargin,
    height: Metrics.doubleSemiMargin,
    borderRadius: Metrics.semiMargin
  },
  headerTextContainer: {
    marginLeft: Metrics.baseMargin
  },
  headerIcon: {
    fontSize: Metrics.icons.normal
  },
  bottomContainer: {
    width: Metrics.screenWidth
  },
  bottomWrapper: {
    marginHorizontal: Metrics.semiMargin,
    marginVertical: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth / 4
  }
};

export default styles;
