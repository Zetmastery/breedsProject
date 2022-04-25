import React from 'react';
import {
  Modal as NativeModal,
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import Title from './title';

const Modal = ({
  setVisible,
  visible,
  containerStyles,
  children,
  title,
  customContainerStyles,
  icon,
}) => {
  return (
    <NativeModal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.safe}>
        <View style={[styles.custom, styles.container, containerStyles]}>
          <View style={[styles.modalCustomConainer, customContainerStyles]}>
            {icon ? icon : null}
            <ScrollView contentContainerStyle={styles.modalCustomScroll}>
              <View style={styles.modalCustomInformation}>
                <Title variant="medium" style={styles.modalCustomTitle}>
                  {title}
                </Title>
                {children}
              </View>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.modalCustomCloseBtnText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  custom: {
    justifyContent: 'flex-end',
  },
  modalCustomConainer: {
    backgroundColor: '#a9a9a9',
    height: '60%',
    paddingHorizontal: 30,
    paddingTop: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'relative',
    paddingBottom: 40,
  },
  modalCustomInformation: {
    marginBottom: 10,
  },
  modalCustomScroll: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  modalCustomCloseBtnText: {
    color: 'white',
    textAlign: 'center',
  },
  modalCustomTitle: {
    color: 'white',
    marginBottom: 20,
  },
});

Modal.displayName = 'Modal';
export default Modal;
