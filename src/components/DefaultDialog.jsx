import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Draggable from 'react-draggable';

import UpTransition from './UpTransition';

const DefaultDialog = props => {
    const { children, onClose, disableBackdropClick, title, message, ...otherProps } = props;

    const handleClose = (event, reason) => {
        if (!onClose) return;

        if (disableBackdropClick && reason === 'backdropClick') {
            return;
        }

        onClose(event, reason);
    };

    const PaperComponent = useMemo(() => paperProps => {
        return (
            <Draggable handle='#default-dialog-title' cancel='[class*="MuiDialogContent-root"]'>
                <Paper {...paperProps} />
            </Draggable>
        );
    });

    return (
        <Dialog
            {...otherProps}
            aria-labelledby='default-dialog-title'
            aria-describedby='default-dialog-description'
            TransitionComponent={UpTransition}
            onClose={handleClose}
            PaperComponent={PaperComponent}
        >
            <DialogTitle style={{ cursor: 'move' }} id='default-dialog-title'>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='default-dialog-description'>{message}</DialogContentText>
            </DialogContent>
            {children}
        </Dialog>
    );
};

DefaultDialog.defaultProps = {
    keepMounted: true,
    scroll: 'paper',
    maxWidth: 'xs',
    disableBackdropClick: false
};

DefaultDialog.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    disableBackdropClick: PropTypes.bool,
    onClose: PropTypes.func
};

export default DefaultDialog;
