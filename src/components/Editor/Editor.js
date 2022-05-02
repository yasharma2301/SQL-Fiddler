import React, { useState, useMemo } from 'react'
import './styles.css'
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import Input from '../Input/Input';
import { oneDark } from "@codemirror/theme-one-dark";
import Button from '../Button/Button'
import { FaSave } from 'react-icons/fa'
import { VscRunAll } from 'react-icons/vsc'
import { useQuery } from '../../Context';
import { processQuery } from '../../QueryData';
import Table from '../TableData/Table';


export default function Editor() {
  const { query, history, savedQuery, setQuery, addToHistory, addToSaved } = useQuery();
  const [queryResult, setQueryResult] = useState([]);
  const [savedTab, setSavedTab] = useState(true);
  const [search, setSearch] = useState('');
  const [time, setTime] = useState(0)

  const runQuery = () => {
    const startTime = new Date().getTime();
    const queryResults = processQuery(query)
    const endTime = new Date().getTime();
    const timeDifferene = endTime - startTime;
    setTime(timeDifferene)
    addToHistory(query)
    setQueryResult(queryResults);
  };

  const saveQuery = () => {
    if (query === '') return;
    addToSaved(query)
  };

  const filterItems = (ar) => ar.filter((data) => data.toLowerCase().includes(search.toLowerCase()));
  const onSearchChange = (e) => setSearch(e.target.value);
  const showFilteredItems = (ar) => filterItems(ar).map((entity, idx) => (<div key={`${entity}-${idx}`} className='query' onClick={() => setQuery(entity)}> {entity} </div>));

  return (
    <div className='container editor'>
      <div className='editor-top'>
        <div className='queries'>
          <div className='query-panel'>
            <div className='tabs'>
              <div className={savedTab ? 'tab active' : 'tab'} onClick={() => { setSavedTab(true); setSearch('') }}>
                <h3>Saved</h3>
              </div>
              <div className={savedTab ? 'tab' : 'tab active'} onClick={() => { setSavedTab(false); setSearch('') }}>
                <h3>History</h3>
              </div>
            </div>
            <Input placeholder="Search..." value={search} onChange={onSearchChange} />
            <div className='query-container'>
              {
                savedTab ? showFilteredItems(savedQuery) : showFilteredItems(history)
              }
            </div>
          </div>
        </div>
        <div className='editor-panel'>
          <div className='editor-action'>
            <Button name='Run SQL' backgroundColor="green" icon={<VscRunAll />} onClick={runQuery} />
            <Button name='Save' icon={<FaSave />} onClick={saveQuery} />
          </div>
          <CodeMirror
            options={{
              lineWrapping: true
            }}
            className='code-mirror'
            value={query}
            height="300px"
            theme={oneDark}
            extensions={[sql()]}
            onChange={(value, viewUpdate) => {
              setQuery(value)
            }}
          />
        </div>
      </div>

      <Table queryResult={queryResult} time={time} />

    </div >
  )
}
