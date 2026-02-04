import PageLayout from './components/Layout/PageLayout';
import { Typography, Grid, Box } from '@mui/material';
import AccountSummary from './components/Dashboard/AccountSummary';
import TransactionList from './components/Dashboard/TransactionList';
import QuickActions from './components/Dashboard/QuickActions';

function App() {
  return (
    <PageLayout>
      <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 'bold' }}>
        Good Morning, James
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <AccountSummary />

        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TransactionList />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <QuickActions />
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
}

export default App;
