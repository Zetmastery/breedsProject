import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setStarred} from '../store/actions';
import {useNavigation} from '@react-navigation/native';
import Title from '../components/title';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {starred} = useSelector(state => state.breeds);

  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Main');
            }}
            style={{
              width: '100%',
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text style={{textAlign: 'center'}}>Go back</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'flex-start', marginVertical: 15}}>
          <Title>User</Title>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: 'https://random.imagecdn.app/500/150'}}
          />
          <Text style={{fontSize: 18, color: 'black'}}>Name: Jhon Doe</Text>
          <Text style={{fontSize: 18, color: 'black'}}>Age: 34</Text>
        </View>
        <View>
          <Title>Favorite breeds</Title>
          {starred.length > 0 &&
            starred.map(element => {
              return (
                <View
                  key={element}
                  style={{marginVertical: 3, flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, color: 'black'}} key={element}>
                    {element}
                  </Text>
                  <TouchableOpacity
                    onPress={() => dispatch(setStarred(element))}>
                    {starred && starred.includes(element) ? (
                      <Image
                        source={require('../assets/colored-star.png')}
                        style={{width: 30, height: 30, marginLeft: 10}}
                      />
                    ) : (
                      <Image
                        source={require('../assets/uncolored-star.png')}
                        style={{width: 30, height: 30, marginLeft: 10}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
