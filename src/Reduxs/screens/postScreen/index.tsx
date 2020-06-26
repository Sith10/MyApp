import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostsWithRedux} from '../../redux/actions/fetchApiDataActions';
import {AppState} from '../../redux/reducers/rootReducer';

const PostScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.fetApi.data);

  useEffect(() => {
    dispatch(fetchPostsWithRedux());
    //effect
    return () => {
      //cleanup
    };
  }, []);

  console.log(data);
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 10, paddingTop: 50}}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}>
            <Text>{item.title}</Text>
            <Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1131222098188353536/zAOSFXXj.png',
              }}
              style={{width: 50, height: 50}}
            />
            <Text>{item.body}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
};

export default PostScreen;
