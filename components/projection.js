import { Column, Row, Select } from '@carbonplan/components'
import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from './app-context'

const Projection = ({disabled}) => {
  const router = useRouter()
  const { dataset, setDataset, datasets, version, projection, setProjection } = useAppContext()

    // Calculate projections based on the current version
    const projections = useMemo(() => {
      return Array.from(
        datasets
          .filter((d) => d.dataset === dataset)
          .reduce((a, d) => a.add(d.projection), new Set()
        )
      )
    }, [datasets, dataset])

    useEffect(() => {
      if (!dataset && datasets.length > 0) {
        setDataset(datasets[0].id)
      } else if (
        !dataset?.hideInDropdown &&
        datasets.length > 0 &&
        !datasets.find((d) => d.id === dataset.id)
      ) {
        setDataset(null)
      }
    }, [dataset, datasets])
  
    if (!datasets) {
      return null
    }


  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Timescale
      </Column>
      <Column start={2} width={2}>
      <Select
          disabled={disabled}
          onChange={(e) => setDataset(e.target.value)}
          value={dataset?.id}
          key={router.asPath}
        >
          {datasets.map((d) => (
            <option key={d.id} value={d.id}>
              {d.projection}
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Projection
