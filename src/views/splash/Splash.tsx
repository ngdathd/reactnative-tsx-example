import CurrencyInput from 'bases/input/CurrencyInput';
import React from 'react';
// import CurrencyInput from 'react-native-currency-input';

export default function Splash() {
    const [value, setValue] = React.useState(2310); // can also be null

    return (
        <CurrencyInput
            value={value}
            onChangeValue={setValue}
            // prefix="R$"
            delimiter="."
            separator=","
            precision={0}
            minValue={0}
            // showPositiveSign
            onChangeText={formattedValue => {
                console.log(formattedValue); // R$ +2.310,46
            }}
        />
    );
}
