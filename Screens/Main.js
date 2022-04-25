import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Accord from '../components/accordion';
import {getBreeds, setLogin} from '../store/actions';
import Modal from '../components/modal';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const breeds = useSelector(state => state.breeds);
  const [dogs, setDogs] = useState([]);
  const dogsArr = [];
  const {user} = useSelector(state => state.account);
  const [email, onChangeEmail] = useState(null);
  const [pass, onChangePass] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!breeds.allBreeds) {
      dispatch(getBreeds());
    } else if (breeds.allBreeds) {
      for (const key in breeds.allBreeds) {
        const title = key;
        const content = breeds.allBreeds[key];
        dogsArr.push({
          title: title,
          content:
            content.length > 0
              ? `${content} `
              : 'Oops, seems like there is no sub breed',
        });
      }
      setDogs(dogsArr);
    }
  }, [dispatch, breeds]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (user) {
              navigation.navigate('Profile');
            } else {
              setVisible(true);
            }
          }}
          style={{
            width: '100%',
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <Text style={{textAlign: 'center'}}>
            {user ? 'My Profile' : 'Log In'}
          </Text>
        </TouchableOpacity>
      </View>
      <Accord sections={dogs} />
      <Modal visible={visible} setVisible={setVisible} title="Log In">
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            letterSpacing: -0.5,
          }}>
          Please introduce your email and password to save your data
        </Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'white',
            borderColor: 'white',
          }}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="please enter your email"
        />
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: 'white',
            borderColor: 'white',
          }}
          onChangeText={onChangePass}
          value={pass}
          placeholder="please enter your password"
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            width: 70,
            height: 40,
            borderRadius: 25,
            alignSelf: 'center',
          }}
          onPress={() => {
            dispatch(setLogin({email: email, password: pass}));
            setVisible(false);
          }}>
          <Text style={{textAlign: 'center'}}>LOG IN</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Main;
