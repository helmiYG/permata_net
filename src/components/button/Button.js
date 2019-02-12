import React from 'react';
import { Button } from 'reactstrap'

const button = (props) =>  {
    return (
        <Button color="success">{props.children}</Button>
    )
}


export default button;
