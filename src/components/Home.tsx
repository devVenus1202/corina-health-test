import React, { useState } from 'react';
import { useListReposQuery } from '../generated';
import '../styles/Home.css';
export default function Home() {
  const [query, setQuery] = useState('');
  const { loading, data } = useListReposQuery({
    fetchPolicy: 'network-only',
    variables: { queryString: query },
  });
  const handleInput = (e: any) => {
    setQuery(e.target.value);
  };
  return (
    <div className="main">
      <input onChange={handleInput} value={query} />
      {/* <div>{data}</div> */}
    </div>
  );
}
