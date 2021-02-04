import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import DefaultDialog from './DefaultDialog';

const AlertDialog = props => {
    const { onClose, title, message, buttonText, ...otherProps } = props;

    return (
        <DefaultDialog onClose={onClose} title={title} message={message} {...otherProps}>
            <DialogActions>
                <Button autoFocus onClick={onClose} color='primary'>
                    {buttonText}
                </Button>
            </DialogActions>
        </DefaultDialog>
    );
};

AlertDialog.defaultProps = {
    title: 'Atenção',
    buttonText: 'Fechar'
};

AlertDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    buttonText: PropTypes.string
};

export default React.memo(AlertDialog);
