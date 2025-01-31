import { Column, Row, Select } from '@carbonplan/components'
import { useEffect, useMemo } from 'react'
import { useAppContext } from './app-context'

const Variable = () => {
  const { dataset, setVariable, variable, variables, datasets } = useAppContext()



  useEffect(() => {
    if (datasets.length === 1 && datasets[0] !== dataset) {
      setVariable(datasets[0])
    }
  }, [dataset])

  console.log("dataset in variable.js", dataset)
  console.log("variable in variable.js", variable)


  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Model
      </Column>
      <Column start={2} width={2}>
        <Select
          onChange={(e) => setVariable(e.target.value)}
          value={variable ?? ''}
        >
          {!variable && <option />}
          {dataset &&
            dataset.variables.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Variable