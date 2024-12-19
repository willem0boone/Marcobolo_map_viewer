import { Column, Row, Select } from '@carbonplan/components'
import { useEffect, useMemo } from 'react'
import { useAppContext } from './app-context'

const Variable = () => {
  const { dataset, setVariable, variable, variables } = useAppContext()

  console.log("dataset in variable.js", dataset)
  console.log("variable in variable.js", variable)
  console.log("variables in variable.js", variables)


  //useEffect(() => {
  //  if (variables.length === 1 && variables[0] !== variable) {
  //    setVariable(variables[0])
  //  }
  //}, [variable, variables, setVariable])


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