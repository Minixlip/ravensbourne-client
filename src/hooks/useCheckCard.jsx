import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { baseUrl } from '../../Urls';

export const useCheckCard = () => {
    const [error, setError] = useState(null);
    const [resCard, setResCard] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [success, setSuccess] = useState(null);
    const { user } = useAuthContext();

    const checkCard = async(card) => {
        setIsLoading(true);
        setError(null);
        setResCard(null);

        if (!user) {
            return setError('You must be logged in');
        }

        const response = await fetch(`${baseUrl}/api/payment/Payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify(card),
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            setIsLoading(true);
            setResCard(json);
            setSuccess(json.success);
        }
    };

    return { checkCard, isLoading, error, resCard, success };
};