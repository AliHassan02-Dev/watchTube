import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
} from '../utils/constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  //   console.log(videoId, snippet)
  return (
    <Card
      sx={{
        width: { md: '335px', xs: '320px' },
        boxShadow: 'none',
        borderRadius: '0px',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { md: 358, xs: '100%' }, height: { md: 180, xs: 225 } }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl
          }
        >
          <Typography variant="subtitle2" color="gray" fontWeight="bold">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
