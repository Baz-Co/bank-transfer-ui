import * as React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './Table.css'

type Props = {
  columns: object[]
  data: object[]
}


export const Table: React.FC<Props> = ({ columns, data }) => { 
   // we declare our dropdown as Functional
   // Component type. Still no props to declare
  return (
    <div>
      <ReactTable
        columns={columns}
        data={data}
        defaultPageSize={5}
        noDataText={'No transactions associated with this account were found.'}
      />
    </div>
  )
}

export default Table