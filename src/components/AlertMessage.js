import React from 'react';
import { Alert } from 'reactstrap';

const AlertMessage = ({ color, message }) => {
    return (
        <Alert color={color} className='alert-message'>
            {message}
        </Alert>
    )
};

export default AlertMessage;