import React from 'react'
import './styles.css'
import Table from '../TableData/Table';
import EditorPanel from './EditorPanel/EditorPanel';
import Queries from './Queries/Queries';


export default function Editor() {
  return (
    <div className='container editor'>
      <div className='editor-top'>
        <Queries />
        <EditorPanel />
      </div>
      <Table/>
    </div >
  )
}
