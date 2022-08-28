import { useSearchParams } from 'react-router-dom'
import {
  Card,
  Box,
  TextField
} from '@mui/material'

export default function Filter () {
  const [searchParams, setSearchParams] = useSearchParams()
  const onSearchTitleChange = (keywords) => {
    searchParams.set('s', keywords)
    searchParams.set('page', 0)
    setSearchParams(searchParams)
  }
  return (
    <Card variant="outlined" sx={{padding: 3}}>
      <Box>
        <TextField
          fullWidth
          label="Type movie title"
          variant="outlined"
          placeholder="Please type more than 3 characters"
          value={searchParams.get('s') || ''}
          onChange={(e)=>{onSearchTitleChange(e.target.value)}}
        />
      </Box>
    </Card>
  )
}
