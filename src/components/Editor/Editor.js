import React from 'react'
import './styles.css'
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import Input from '../Input/Input';
import { oneDark } from "@codemirror/theme-one-dark";
import Button from '../Button/Button'
import { MdClear } from 'react-icons/md'
import {FaSave} from 'react-icons/fa'
import {VscRunAll} from 'react-icons/vsc'

export default function Editor() {
  return (
    <div className='container editor'>
      <div className='editor-top'>
        <div className='queries'>
          <div className='query-panel'>
            <h3>Saved Queries</h3>
            <Input placeholder="Search..." />
            <div className='query-container'>
              <div className='query'>
                SELECT * FROM places;
              </div>
              <div className='query'>
                SELECT * FROM places WHERE data = 25;
              </div>
            </div>
          </div>
        </div>
        <div className='editor-panel'>
          <div className='editor-action'>
            <Button name='Run SQL' backgroundColor="green" icon={<VscRunAll />}/>
            <Button name='Save' icon={<FaSave />}/>
          </div>
          <CodeMirror
            value={`SELECT * FROM patterns;`}
            height="300px"
            theme={oneDark}
            extensions={[sql()]}
            onChange={(value, viewUpdate) => {
              console.log("value:", value);
            }}
          />
        </div>
      </div>


    </div>
  )
}
