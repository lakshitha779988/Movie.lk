import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function MediaCard({ image, title, description, onClick }) {
  return (
    <Card
      onClick={onClick}
      sx={{
         width: { xs: 175, sm: 190, md: 190, lg: 200 },
        borderRadius: 3,
        boxShadow: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 250,
          overflow: 'hidden',
          '&:hover .hover-image': {
            filter: 'blur(4px) brightness(0.6)',
          },
          '&:hover .play-icon': {
            opacity: 1,
            transform: 'scale(1.2)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={title}
          className="hover-image"
          sx={{
            transition: '0.3s ease-in-out',
            objectFit: 'cover',
          }}
        />
        <Box
          className="play-icon"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1)',
            color: 'red',
            opacity: 0,
            transition: 'all 0.3s ease-in-out',
            zIndex: 2,
          }}
        >
          <PlayCircleIcon sx={{ fontSize: 60 }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'red',
            color: 'white',
            padding: '2px 6px',
            fontSize: 12,
            fontWeight: 'bold',
            borderRadius: '4px',
          }}
        >
          HD
        </Box>
      </Box>
      <CardContent sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
