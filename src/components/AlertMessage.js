import React from 'react';
import { Alert } from 'reactstrap';

const AlertMessage = ({ color, message }) => {
    return (
        <Alert color={color}>
            {message}
        </Alert>
    )
};

export default AlertMessage;