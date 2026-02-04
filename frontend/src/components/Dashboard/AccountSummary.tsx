import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { AccountBalance, Savings, CreditCard } from '@mui/icons-material';
import { useEffect, useState } from 'react';

interface AccountData {
    id: number;
    bank: string;
    type: string;
    balance: string;
    accountNumber: string;
    color: string;
    icon: React.ReactNode;
}

const initialAccounts: AccountData[] = [
    {
        id: 1,
        bank: 'Lloyds Bank',
        type: 'Classic Account',
        balance: 'Loading...', // Initial state
        accountNumber: '12-34-56 12345678',
        color: '#006A4D', // Lloyds Green
        icon: <AccountBalance fontSize="large" sx={{ color: '#006A4D' }} />,
    },
    {
        id: 2,
        bank: 'Halifax',
        type: 'Reward Current Account',
        balance: '£4,200.50',
        accountNumber: '11-22-33 87654321',
        color: '#1E4187', // Halifax Blue
        icon: <CreditCard fontSize="large" sx={{ color: '#1E4187' }} />,
    },
    {
        id: 3,
        bank: 'Bank of Scotland',
        type: 'Platinum Account',
        balance: '£1,200.00',
        accountNumber: '80-00-00 00001234',
        color: '#042E5F', // BoS Blue
        icon: <Savings fontSize="large" sx={{ color: '#042E5F' }} />,
    },
];

const AccountSummary = () => {
    const [accounts, setAccounts] = useState<AccountData[]>(initialAccounts);

    useEffect(() => {
        const fetchLloydsBalance = async () => {
            console.log('[Lloyds Frontend] Initiating fetch for savings balance...');
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
                const response = await fetch(`${apiUrl}/api/lloyds/savings`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('[Lloyds Frontend] Successfully fetched balance:', data);

                setAccounts(prevAccounts =>
                    prevAccounts.map(account =>
                        account.id === 1
                            ? { ...account, balance: `£${data.balance}` }
                            : account
                    )
                );
            } catch (error) {
                console.error('[Lloyds Frontend] Error fetching Lloyds balance:', error);
                setAccounts(prevAccounts =>
                    prevAccounts.map(account =>
                        account.id === 1
                            ? { ...account, balance: 'Error' }
                            : account
                    )
                );
            }
        };

        fetchLloydsBalance();
    }, []);

    return (
        <Grid container spacing={3}>
            {accounts.map((account) => (
                <Grid size={{ xs: 12, md: 4 }} key={account.id}>
                    <Card
                        elevation={2}
                        sx={{
                            height: '100%',
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 4,
                            },
                            borderTop: `4px solid ${account.color}`,
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                {account.icon}
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {account.bank}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        {account.type}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="h4" component="div" sx={{ mb: 1, fontWeight: 'bold' }}>
                                {account.balance}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {account.accountNumber}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default AccountSummary;
