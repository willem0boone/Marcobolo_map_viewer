import { Column, Row, Slider } from '@carbonplan/components'
import { Box } from 'theme-ui' // Import Box from theme-ui
import { useAppContext } from './app-context'

const TimeSlider = ({ disabled }) => {
  const { dataset, time, setTime } = useAppContext()

  // Check if time is available
  if (time == null) return null

  // Map dataset.labels to create boxes
  const labels = dataset.labels; // Assuming this is ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Time
      </Column>
      <Column start={2} width={2}>
        <Slider
          disabled={disabled}
          min={dataset.selectors.time[0]}
          max={dataset.selectors.time[1]}
          step={1}
          sx={{
            width: '100%',
            display: 'inline-block',
            '&:disabled': { color: 'muted' },
          }}
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
        <Box
          sx={{
            textAlign: 'center',
            fontSize: '14px',
            marginTop: '8px',
            fontWeight: 'bold',
          }}
        >
          {labels[time]}
        </Box>
      </Column>
    </Row>
  )
}

export default TimeSlider
