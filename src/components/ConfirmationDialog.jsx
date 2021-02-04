import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import DefaultDialog from './DefaultDialog';

const ConfirmationDialog = props => {
    const {
        onClose,
        title,
        message,
        onConfirmationYes,
        onConfirmationNo,
        yesButtonText,
        noButtonText,
        ...otherProps
    } = props;

    return (
        <DefaultDialog
            onClose={onClose}
            title={title}
            message={message}
            disableBackdropClick
            disableEscapeKeyDown
            {...otherProps}
        >
            <DialogActions>
                <Button autoFocus onClick={onConfirmationYes} color='primary'>
                    {yesButtonText}
                </Button>
                <Button onClick={onConfirmationNo} color='primary'>
                    {noButtonText}
                </Button>
            </DialogActions>
        </DefaultDialog>
    );
};

ConfirmationDialog.defaultProps = {
    title: 'Confirmação',
    yesButtonText: 'Sim',
    noButtonText: 'Não'
};

ConfirmationDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    onConfirmationYes: PropTypes.func,
    onConfirmationNo: PropTypes.func,
    yesButtonText: PropTypes.string,
    noButtonText: PropTypes.string
};

export default React.memo(ConfirmationDialog);
