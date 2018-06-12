import React, { Component }  from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { ListItem } from '../components/ListItem';
import { Separator } from '../components/ListItem';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    handlePress = () => {
        console.log('press');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList 
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem text={item} selected={item === TEMP_CURRENT_CURRENCY} onPress={this.handlePress} />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
};

export default CurrencyList;