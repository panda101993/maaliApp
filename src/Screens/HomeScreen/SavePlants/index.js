import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';

export default function SavePlants(props) {
    return (
        <View>
              <CustomHeader
                    headerTitle="Save Plants"
                    // headingText="What Service do you need?"
                />
        </View>
    )
}
