import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../../../AppHeader/Header';
import qrCodeIcon from '../../../../assets/svg/qr-code.svg';
import { Box, IconButton } from '@material-ui/core';

export default function Index () {
    const history = useHistory();

    const openQrCode = () => {
        history.push('/my-activities/qr-code')
    }

    return (
        <Fragment>
            <Header leftComponent={<Box>
                <IconButton onClick={openQrCode}>
                    <img src={qrCodeIcon} width="20" height="20"/>
                </IconButton>
            </Box>}/>
        </Fragment>
    )
};
