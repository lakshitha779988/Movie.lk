import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovieFullDetail from '../hooks/useFetchMovieFullDetail';
import { useMovieContext } from '../contex/MovieContext';
import Loading from '../components/Loading';
import {
  Box,
  Typography,
  Grid,
  Chip,
  Divider,
  Link,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from '../components/Header';


function MovieDetail() {
  const { id } = useParams();
  const { loading } = useMovieContext();
  const { movieDetail, error } = useFetchMovieFullDetail(id);
  

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!movieDetail) return <div>No movie details available.</div>;

  return (
    <>
    <Header/>
   
    <Box sx={{ padding: { xs: 2, md: 10 }, maxWidth: '1200px', margin: 'auto' }}>
      <Grid container spacing={4}>
        {/* Poster */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
              
            }}
          />
        </Grid>

        {/* Info */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {movieDetail.title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {movieDetail.tagline}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {movieDetail.genres.map((genre) => (
              <Chip label={genre.name} key={genre.id} color="secondary" />
            ))}
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            {movieDetail.overview}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Release Date:</strong></Typography>
              <Typography variant="body2">{movieDetail.release_date}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Status:</strong></Typography>
              <Typography variant="body2">{movieDetail.status}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Runtime:</strong></Typography>
              <Typography variant="body2">{movieDetail.runtime} mins</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Language:</strong></Typography>
              <Typography variant="body2">{movieDetail.original_language.toUpperCase()}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Rating:</strong></Typography>
              <Typography variant="body2">
                {movieDetail.vote_average} / 10 ({movieDetail.vote_count} votes)
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Budget:</strong></Typography>
              <Typography variant="body2">${movieDetail.budget.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="body2"><strong>Revenue:</strong></Typography>
              <Typography variant="body2">${movieDetail.revenue.toLocaleString()}</Typography>
            </Grid>
          </Grid>

          {movieDetail.homepage && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2"><strong>Official Site:</strong></Typography>
              <Link
                href={movieDetail.homepage}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                Visit Website
              </Link>
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Production Companies */}
      {movieDetail.production_companies.length > 0 && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Production Companies
          </Typography>
          <Grid container spacing={2}>
            {movieDetail.production_companies.map((company) => (
              <Grid item xs={6} sm={4} md={3} key={company.id}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {company.logo_path ? (
                    <Avatar
                      variant="rounded"
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      sx={{ width: 50, height: 50 }}
                    />
                  ) : (
                    <Avatar variant="rounded" sx={{ width: 50, height: 50 }}>
                      {company.name[0]}
                    </Avatar>
                  )}
                  <Typography variant="body2">
                    {company.name} ({company.origin_country})
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
    </>
  );
}

export default MovieDetail;
