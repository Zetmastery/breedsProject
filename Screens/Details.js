import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../components/title';
import {setStarred} from '../store/actions';

const Details = () => {
  const dispatch = useDispatch();
  const {starred, detailed} = useSelector(state => state.breeds);
  const titular = detailed?.title;
  const subs = detailed?.subBreeds;

  return (
    <ScrollView>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Title>{titular ? titular[0][0] : 'Loading...'}</Title>
          <TouchableOpacity onPress={() => dispatch(setStarred(titular[0][0]))}>
            {titular && starred && starred.includes(titular[0][0]) ? (
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
        {titular ? (
          <Image
            style={{width: 200, height: 200}}
            source={{uri: `${titular[0][1]}`}}
          />
        ) : null}
        <View>
          <Title>Sub breeds</Title>
          <View>
            {subs &&
              subs.map(element => {
                return (
                  <View>
                    <Title key={element[0]}>{element[0]}</Title>
                    <Image
                      style={{width: 200, height: 200}}
                      source={{uri: `${element[1]}`}}
                    />
                  </View>
                );
              })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
