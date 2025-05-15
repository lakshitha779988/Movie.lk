import { Typography, Box } from '@mui/material';

function SectionTitle({title}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 10,
        mb: 2,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          background: 'black',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
       {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
