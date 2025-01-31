import { useThemeUI } from 'theme-ui'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Map, Raster, Fill, Line, RegionPicker } from '@carbonplan/maps'
import { useThemedColormap } from '@carbonplan/colormaps'
import { useAppContext } from '../../components/app-context'
import { DATASETS } from '../../data/dynamic-client'
import EmptyState from '../../components/empty-state'

const bucket = 'https://storage.googleapis.com/carbonplan-maps/'

const base = 'https://minio.dive.edito.eu/oidc-willemboone/marcobolo/viewer_/'


const DynamicClient = ({ dataset }) => {
  const { theme } = useThemeUI()
  const {
    time,
    variable,
    clim,
    colormapName,
    showRegionPicker,
    setRegionData,
    projection,

  } = useAppContext()

  console.log("###")
  console.log(dataset.id, projection, variable)



  const ttime = dataset.timesteps[time]


  const { id } = dataset || {}
  const colormap = useThemedColormap(colormapName)
  const router = useRouter()

  const selector = useMemo(() => {
    if (!dataset) {
      return null
    }


    return {
      time: dataset.timesteps
    }
  }, [dataset, time])


  if (!dataset || !variable) {
    return <EmptyState />
  }

  return (
    <Map zoom={0} center={[0, 0]} key={router.asPath}>

      <Line
        color={theme.rawColors.primary}
        source={bucket + 'basemaps/land'}
        variable={'land'}
      />

      <Raster
        key={id}
        colormap={colormap}
        clim={clim}
        setClim={(clim)}
        mode={'dotgrid'}
        source={base + id}
        variable={variable}
        selector={{time: ttime}}
        regionOptions={{ setData: setRegionData, selector }}
      />
      {showRegionPicker && (
        <RegionPicker
          color={theme.colors.primary}
          backgroundColor={theme.colors.background}
          fontFamily={theme.fonts.mono}
          fontSize={'14px'}
          maxRadius={2000}
        />
      )}
    </Map>
  )
}

export default DynamicClient

export function getStaticPaths() {
  return {
    paths: DATASETS.map((d) => ({
      params: {
        dataset: d.id,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params: { dataset } }) {
  return {
    props: {
      id: 'Dynamic client',
      dataset: DATASETS.find((d) => d.id === dataset) ?? null,
      datasets: DATASETS.filter((d) => !d.hideInDropdown),
    },
  }
}
