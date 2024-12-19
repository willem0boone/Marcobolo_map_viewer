import { Link } from '@carbonplan/components'
import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { Box, Flex } from 'theme-ui'
import { useAppContext } from './app-context'
// import Approach from './approach'
import Customizations from './customizations'
import Datasets from './datasets'
import Projection from './projection'

import TimeSeries from './time-series'
import TimeSlider from './time-slider'
import Variable from './variable'
import Version from './version'


const Sidebar = () => {
  const { approach, dataset } = useAppContext()

  return (
    <SidebarComponent expanded>
      <Box sx={{ mt: -4 }}>
        <Box as='h1' variant='styles.h4'>
          THE WORLD IS FLAT!
        </Box>

        <Box>
           
          
          For more information,
          read the{' '}
          <Link href='https://nasa-impact.github.io/zarr-visualization-report/'>
            report
          </Link>{' '}
          or more about{' '}
          <Link href='https://github.com/carbonplan/maps'>
            @carbonplan/maps
          </Link>
          .
        </Box>
      </Box>
      <SidebarDivider sx={{ my: 4 }} />
      <Flex sx={{ flexDirection: 'column', gap: 4 }}>
        {approach === 'dynamic-client' && (
          <>

<Version />

<Projection />

<Variable />


          </>
        )}

        {approach === 'tiling' && <Datasets />}

        {dataset && <TimeSlider />}
      </Flex>
      <SidebarDivider sx={{ my: 4 }} />
      <Customizations />
      <SidebarDivider sx={{ my: 4 }} />
      <TimeSeries />
      <SidebarDivider sx={{ my: 4 }} />
    </SidebarComponent>
  )
}

export default Sidebar
