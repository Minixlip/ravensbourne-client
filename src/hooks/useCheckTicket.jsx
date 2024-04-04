import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { baseUrl } from '../../Urls';

export const useCheckTicket = () => {
    const [error, setError] = useState(null);
    const [resTicket, setResTicket] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [success, setSuccess] = useState(null);
    const { user } = useAuthContext();

    const checkTicket = async(ticket) => {
        setIsLoading(true);
        setError(null);

        if (!user) {
            return setError('You must be logged in');
        }

        const response = await fetch(
            `${baseUrl}/api/payment/Ticket/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify(ticket),
            }
        );
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            setIsLoading(false);
            console.log('response Json:', json);
            setResTicket(json.totalAmount);
            console.log('json.totalAmount', json.totalAmount);
            setSuccess(true);
        }
    };

    return { checkTicket, isLoading, error, resTicket, success };
};