import { Link } from 'react-router-dom'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { md: '335px', xs: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'fff',
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '50%',
              width: '180px',
              height: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />

          <Typography variant="h6" color="#fff">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle1" color="#fff" fontWeight="normal">
              {parseInt(
                channelDetail?.statistics?.subscriberCount,
              ).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
