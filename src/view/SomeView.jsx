import React from 'react';
import Button from '@material-ui/core/Button';
import { useDialog } from '../components/DialogProvider';

const SomeView = () => {
    const { showDialog, showConfirmation, showSnackbar } = useDialog();

    const handlePressMessage = () => {
        showDialog({
            title: 'çaçaça',
            message: 'A mensagem muito louco'
        });
    };

    const handlePressConfirm = async () => {
        const resposta = await showConfirmation({
            message: 'A mensagem muito louco',
            noButtonText: 'Não mesmo'
        });

        console.log(resposta);
    };

    const handlePressSnackbar = () => {
        showSnackbar('Show de bola');
    };

    return (
        <>
            <Button
                variant='contained'
                color='primary'
                onClick={handlePressMessage}
                style={{ marginBottom: '1rem' }}
            >
                Mensagem
            </Button>
            <Button
                variant='contained'
                color='primary'
                onClick={handlePressConfirm}
                style={{ marginBottom: '1rem' }}
            >
                Confirmação
            </Button>
            <Button
                variant='contained'
                color='primary'
                onClick={handlePressSnackbar}
                style={{ marginBottom: '1rem' }}
            >
                Snackbar
            </Button>
        </>
    );
};

export default SomeView;
