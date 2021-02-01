import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';

export default function SoilTest(props) {
    return (
        <View>
              <CustomHeader
                    headerTitle="Soil Test"
                    // headingText="What Service do you need?"
                />
        </View>
    )
}
