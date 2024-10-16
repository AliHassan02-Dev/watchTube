import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import {
  Navbar,
  SearchFeed,
  Feed,
  ChannelDetail,
  VideoDetail,
} from './Components'
import Checking from './Checking'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/checking" exact element={<Checking />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
