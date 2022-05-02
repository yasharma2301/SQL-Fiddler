import React, { Suspense, lazy, } from 'react'
import { useQuery } from '../../../Context';
import './styles.css'
import { processQuery } from '../../../QueryData';
import Button from '../../Button/Button';
import { sql } from '@codemirror/lang-sql';
import { FaSave } from 'react-icons/fa'
import { VscRunAll } from 'react-icons/vsc'
import { oneDark } from "@codemirror/theme-one-dark";
import Loader from '../../Loader/Loader';
const CodeMirror = lazy(() => import('@uiw/react-codemirror'))

export default function EditorPanel() {
    const { query, setQuery, addToHistory, addToSaved, setQueryResult } = useQuery();

    const runQuery = () => {
        const queryResults = processQuery(query)
        addToHistory(query)
        setQueryResult(queryResults);
    };

    const saveQuery = () => {
        if (query === '') return;
        addToSaved(query)
    };

    return (
        <div className='editor-panel'>
            <div className='editor-action'>
                <Button name='Run SQL' backgroundColor="green" icon={<VscRunAll />} onClick={runQuery} />
                <Button name='Save' icon={<FaSave />} onClick={saveQuery} />
            </div>
            <Suspense fallback={<Loader></Loader>}>
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
            </Suspense>
        </div>
    )
}
