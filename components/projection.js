import { Column, Row, Select } from '@carbonplan/components'
import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from './app-context'
import { DATASETS } from '../data/dynamic-client'

const Projection = ({disabled}) => {
  const router = useRouter()
  const { dataset, setDataset, datasets, variable, setVariable} = useAppContext()



    useEffect(() => {
      if (!dataset && datasets.length > 0) {
        setDataset(datasets[0])
      } 
    }, [dataset, datasets, setDataset])
  
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