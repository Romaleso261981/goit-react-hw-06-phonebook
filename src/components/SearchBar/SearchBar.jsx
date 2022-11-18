import { useState } from 'react';
import {Button} from './SearchBar.styled';

export const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
    
        const query = value.trim();
        if (query) {
        onSearch(query);
        setValue('');
        }
    };
    
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <Button type="submit">Search</Button>
        </form>
        </>
    );
}
    
export default SearchBar;