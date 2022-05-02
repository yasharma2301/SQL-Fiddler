import React, { useState } from 'react'
import './styles.css'
import { BsDownload } from 'react-icons/bs'
import { CSVLink } from "react-csv";

export default function Table({ queryResult, time }) {
    return (
        <div className='result'>
            {
                queryResult?.length >= 1 ? (
                    <div>
                        <div className='table-metadata'>
                            <div>Fetched {queryResult.length} results in ({time})ms</div>
                            <CSVLink data={queryResult} filename="SQLFiddler.csv">
                                <div className='download'>
                                    <h5>ExportCSV</h5>
                                    <BsDownload />
                                </div>
                            </CSVLink>
                        </div>
                        <div className='table-output'>
                            <table className='content-table'>
                                <thead>
                                    <tr>
                                        {Object.keys(queryResult[0]).map(queryKey => (<th key={queryKey}>{queryKey}</th>))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {queryResult.map((item, i) => {
                                        return (
                                            <tr key={`row-${i}`}>
                                                {
                                                    Object.values(item).map((val, idx) => (<td key={`${val}-${idx}`}>{typeof val === 'boolean' ? JSON.stringify(val) : val}</td>))
                                                }
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (<div className='fallback'>Run some SQL to fetch data</div>)
            }

        </div>
    )
}
