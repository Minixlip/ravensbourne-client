import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { baseUrl } from '../../Urls';

export const useCreateTicket = () => {
    const [error, setError] = useState(null);
    const { user } = useAuthContext();

    const createTicket = async(ticket) => {
        setError(null);

        if (!user) {
            return setError('You must be logged in');
        }

        const response = await fetch(`${baseUrl}/api/payment/Ticket`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },

            body: JSON.stringify(ticket),
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
        }
    };

    return { createTicket, error };
};