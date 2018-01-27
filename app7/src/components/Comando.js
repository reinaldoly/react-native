import React from 'react';
import { Button } from 'react-native';

export default props => (
    <Button
        onPress={props.acao}
        title="Calcular"
    />
);
