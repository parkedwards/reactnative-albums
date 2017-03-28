import React from 'react';
import {
  View,
  Text,
  Image,
  Linking
} from 'react-native';

// custom Card components impose styling
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({
  title,
  artist,
  url,
  image,
  thumbImage
}) => {
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    albumImageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbImage }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumImageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Purchase Album
        </Button>  
      </CardSection>

    </Card>
  );
};

export default AlbumDetail;

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
