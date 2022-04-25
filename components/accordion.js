import React, {useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {useDispatch, useSelector} from 'react-redux';
import {getDetails, setStarred} from '../store/actions';
import {useNavigation} from '@react-navigation/native';

const Accordionx = ({sections}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const breeds = useSelector(state => state.breeds);
  const [activeSections, setActiveSections] = useState([]);

  const _renderHeader = section => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 18,
            marginVertical: 5,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {section.title}
        </Text>
        <TouchableOpacity onPress={() => dispatch(setStarred(section.title))}>
          {breeds.starred && breeds.starred.includes(section.title) ? (
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
  };

  const _renderContent = section => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          marginVertical: 5,
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'center',
          }}>
          {section.content}
        </Text>
        <View>
          {section.content ===
          'Oops, seems like there is no sub breed' ? null : (
            <TouchableOpacity
              onPress={() => {
                dispatch(getDetails(section.title));
                navigation.navigate('Details', {
                  title: section.title,
                });
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    width: 70,
                    height: 50,
                    backgroundColor: '#a9a9a9',
                    borderRadius: 25,
                    textAlign: 'center',
                    marginVertical: '5%',
                  }}>
                  DETAILS
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: 5,
        }}>
        <Accordion
          sections={sections}
          activeSections={activeSections.slice()}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
          expandMultiple
          underlayColor={'#D3D3D3'}
        />
      </View>
    </ScrollView>
  );
};

export default Accordionx;
