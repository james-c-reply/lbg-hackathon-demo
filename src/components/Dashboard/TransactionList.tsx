import {
    Card,
    CardHeader,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Divider,
} from '@mui/material';
import { ShoppingCart, Restaurant, DirectionsCar, Bolt } from '@mui/icons-material';

const transactions = [
    {
        id: 1,
        merchant: 'Waitrose',
        date: 'Today',
        amount: '-£45.20',
        category: 'Groceries',
        icon: <ShoppingCart />,
        color: '#E0F2F1',
        iconColor: '#00695C',
    },
    {
        id: 2,
        merchant: 'Nando\'s',
        date: 'Yesterday',
        amount: '-£24.50',
        category: 'Dining',
        icon: <Restaurant />,
        color: '#FFEBEE',
        iconColor: '#C62828',
    },
    {
        id: 3,
        merchant: 'Shell',
        date: 'Yesterday',
        amount: '-£65.00',
        category: 'Transport',
        icon: <DirectionsCar />,
        color: '#E3F2FD',
        iconColor: '#1565C0',
    },
    {
        id: 4,
        merchant: 'Scottish Power',
        date: '02 Feb',
        amount: '-£120.00',
        category: 'Bills',
        icon: <Bolt />,
        color: '#FFF3E0',
        iconColor: '#EF6C00',
    },
];

const TransactionList = () => {
    return (
        <Card elevation={2}>
            <CardHeader title="Recent Transactions" />
            <Divider />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {transactions.map((transaction, index) => (
                    <div key={transaction.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: transaction.color, color: transaction.iconColor }}>
                                    {transaction.icon}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={transaction.merchant}
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {transaction.date}
                                        </Typography>
                                        {` — ${transaction.category}`}
                                    </>
                                }
                            />
                            <Typography
                                variant="body1"
                                sx={{ alignSelf: 'center', fontWeight: 'bold' }}
                            >
                                {transaction.amount}
                            </Typography>
                        </ListItem>
                        {index < transactions.length - 1 && <Divider variant="inset" component="li" />}
                    </div>
                ))}
            </List>
        </Card>
    );
};

export default TransactionList;
