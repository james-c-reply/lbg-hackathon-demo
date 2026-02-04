import { Card, CardHeader, Grid, Button, Divider } from '@mui/material';
import { Send, Payments, RequestQuote, Receipt } from '@mui/icons-material';

const QuickActions = () => {
    return (
        <Card elevation={2}>
            <CardHeader title="Quick Actions" />
            <Divider />
            <Grid container spacing={2} sx={{ p: 2 }}>
                <Grid size={{ xs: 6 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Send />}
                        sx={{ py: 2, justifyContent: 'flex-start' }}
                    >
                        Pay Friend
                    </Button>
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Payments />}
                        sx={{ py: 2, justifyContent: 'flex-start' }}
                    >
                        Transfer
                    </Button>
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<RequestQuote />}
                        sx={{ py: 2, justifyContent: 'flex-start' }}
                    >
                        Standing Orders
                    </Button>
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Receipt />}
                        sx={{ py: 2, justifyContent: 'flex-start' }}
                    >
                        Statements
                    </Button>
                </Grid>
            </Grid>
        </Card>
    );
};

export default QuickActions;
