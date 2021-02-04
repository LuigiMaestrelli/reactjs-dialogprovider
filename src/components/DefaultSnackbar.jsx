import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const DefaultSnackbar = props => {
    const { onClose, ...otherProps } = props;

    return (
        <Snackbar
            {...otherProps}
            onClose={onClose}
            action={
                <IconButton size='small' aria-label='fechar' color='inherit' onClick={onClose}>
                    <CloseIcon fontSize='small' />
                </IconButton>
            }
        />
    );
};

DefaultSnackbar.defaultProps = {
    autoHideDuration: 5000
};

DefaultSnackbar.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default DefaultSnackbar;
