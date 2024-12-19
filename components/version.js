import { Column, Row, Select } from '@carbonplan/components'
import { useAppContext } from './app-context'
import { DATASETS } from '../data/dynamic-client'
import { useEffect, useMemo } from 'react'

const Version = () => {
  const { dataset, version, setDataset, setVersion, setProjection, datasets } =
    useAppContext()

  // Derive versions based on the dataset
  const versions = useMemo(() => {
    return Array.from(
      datasets
      .filter((d) => d.dataset === dataset)
      .reduce((a, d) => a.add(d.version), new Set()
      )
    )
  }, [datasets, dataset])


  // Automatically set the version if only one is available
  useEffect(() => {
    if (versions.length === 1 && versions[0] !== version) {
      setVersion(versions[0])
    }
  }, [versions, version, setVersion])

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Species
      </Column>
      <Column start={2} width={2}>
        <Select
          onChange={(e) => {
            setVersion(e.target.value)
            setDataset(null) // Reset the dataset when version changes
            setProjection(null)
          }}
          value={version}
        >
          <option value={'Harbor porpoise'}>Harbor porpoise</option>
          <option value={'Harbor porpoise2'}>Harbor porpoise2</option>

        </Select>
      </Column>
    </Row>
  )
}

export default Version
