import React, { createContext, useContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import DefaultSnackbar from './DefaultSnackbar';
import AlertDialog from './AlertDialog';
import ConfirmationDialog from './ConfirmationDialog';

export const DialogContext = createContext();
export const useDialog = () => useContext(DialogContext);
export const withDialog = Cmp => {
    return props => (
        <DialogContext.Consumer>
            {context => <Cmp {...context} {...props} />}
        </DialogContext.Consumer>
    );
};

const DialogProvider = ({ children }) => {
    const awaitingConfirmationPromiseRef = useRef();

    const [isDialogVisible, setDialogVisible] = useState(false);
    const [dialogData, setDialogData] = useState({});

    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [confirmationData, setConfirmationData] = useState({});

    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarData, setSnackbarData] = useState({});

    const showDialog = opts => {
        if (typeof opts === 'string') {
            opts = {
                message: opts
            };
        }

        setDialogData(opts);
        setDialogVisible(true);
    };

    const handleCloseDialog = () => {
        setDialogData({});
        setDialogVisible(false);
    };

    const showConfirmation = opts => {
        if (typeof opts === 'string') {
            opts = {
                message: opts
            };
        }

        setConfirmationData(opts);
        setConfirmationVisible(true);

        return new Promise((resolve, reject) => {
            awaitingConfirmationPromiseRef.current = { resolve, reject };
        });
    };

    const handleCloseConfirmation = () => {
        setConfirmationData({});
        setConfirmationVisible(false);

        awaitingConfirmationPromiseRef.current = null;
    };

    const handleConfirmationYes = () => {
        if (awaitingConfirmationPromiseRef.current) {
            awaitingConfirmationPromiseRef.current.resolve(true);
        }

        handleCloseConfirmation();
    };

    const handleConfirmationNo = () => {
        if (awaitingConfirmationPromiseRef.current) {
            awaitingConfirmationPromiseRef.current.resolve(false);
        }

        handleCloseConfirmation();
    };

    const showSnackbar = opts => {
        if (typeof opts === 'string') {
            opts = {
                message: opts
            };
        }

        setSnackbarData(opts);
        setSnackbarVisible(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarData({});
        setSnackbarVisible(false);
    };

    const value = {
        showDialog,
        showConfirmation,
        showSnackbar
    };

    return (
        <DialogContext.Provider value={value}>
            {children}

            <AlertDialog
                open={isDialogVisible}
                onClose={handleCloseDialog}
                title={dialogData.title}
                message={dialogData.message}
                buttonText={dialogData.buttonText}
            />

            <ConfirmationDialog
                open={isConfirmationVisible}
                onClose={handleCloseConfirmation}
                title={confirmationData.title}
                message={confirmationData.message}
                yesButtonText={confirmationData.yesButtonText}
                noButtonText={confirmationData.noButtonText}
                onConfirmationYes={handleConfirmationYes}
                onConfirmationNo={handleConfirmationNo}
            />

            <DefaultSnackbar
                open={isSnackbarVisible}
                autoHideDuration={snackbarData.diration}
                onClose={handleCloseSnackbar}
                message={snackbarData.message}
            />
        </DialogContext.Provider>
    );
};

DialogProvider.propTypes = {
    children: PropTypes.any
};

export default React.memo(DialogProvider);
