import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { baseUrl } from '../../Urls';

export const useUpdateTicket = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [updatedTicket, setUpdatedTicket] = useState(null);
    const { user } = useAuthContext();

    const UpdateTicket = async(ticket) => {
        setIsLoading(true);
        setError(null);

        if (!user) {
            return setError('You must be logged in');
        }

        try {
            const response = await fetch(
                `${baseUrl}/api/dashboard/ticket/update`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify(ticket),
                }
            );

            if (!response.ok) {
                const json = await response.json();
                setError(json.error); // Set error message from response
            } else {
                const json = await response.json();
                setUpdatedTicket(json);
            }
        } catch (error) {
            setError('An error occurred while processing your request.');
        } finally {
            setIsLoading(false);
        }
    };

    return { UpdateTicket, isLoading, error, updatedTicket };
};