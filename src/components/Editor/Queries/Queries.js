import React,{useState} from 'react'
import './styles.css'
import { useQuery } from '../../../Context';
import Input from '../../Input/Input';

export default function Queries() {
    const { history, savedQuery, setQuery } = useQuery();
    const [savedTab, setSavedTab] = useState(true);
    const [search, setSearch] = useState('');

    const filterItems = (ar) => ar.filter((data) => data.toLowerCase().includes(search.toLowerCase()));
    const onSearchChange = (e) => setSearch(e.target.value);
    const showFilteredItems = (ar) => filterItems(ar).map((entity, idx) => (<div key={`${entity}-${idx}`} className='query' onClick={() => setQuery(entity)}> {entity} </div>));
  
    return (
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
    )
}
