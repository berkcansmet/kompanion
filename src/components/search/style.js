import { Metrics, Colors } from '../../themes';

const styles = {
  searchBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
    paddingVertical: Metrics.baseMargin
  },
  searchBoxIcon: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25
  },
  searchBoxInput: {
    width: '94%',
    backgroundColor: Colors.input,
    borderRadius: Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: Metrics.tripleBaseMargin
  },
  searchContentScroll: {
    paddingBottom: Metrics.screenWidth / 2
  },
  searchContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: Metrics.screenWidth
  },
  imageViewContainer: {
    paddingBottom: 2,
    width: Metrics.screenWidth / 3
  },
  image: {
    width: '100%',
    height: Metrics.screenHeight / 5
  },
  videoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  videoPlayerWrapper: {
    paddingRight: 2,
    width: Metrics.screenWidth / 1.5
  },
  evenImageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Metrics.screenWidth / 3,
    justifyContent: 'space-between'
  },
  evenImageWrapper: {
    paddingBottom: 2,
    width: Metrics.screenWidth / 3
  },
  evenImage: {
    width: '100%',
    height: Metrics.screenHeight / 5.5
  }
};

export default styles;
