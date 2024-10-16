import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos, Loader } from './'
import { FetchedData } from '../utils/FetchedData'

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    FetchedData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0]),
    )

    FetchedData(
      `search?part=snippet&relatedToVideoId=${id}&type=video`,
    ).then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetails?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ wdith: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h6" color="#fff" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                  p={2}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center">
                <Typography variant="body1" px={1} sx={{ opacity: 0.7 }}>
                  <span>Views </span>
                  {parseInt(viewCount).toLocaleString()}
                </Typography>
                <Typography variant="body1" px={1} sx={{ opacity: 0.7 }}>
                  <span>Likes </span>
                  {parseInt(likeCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          mt={{ xs: '25px', md: 'auto' }}
          px={2}
          py={{ md: 1, sx: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction={{ xs: 'row', md: 'column' }} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
