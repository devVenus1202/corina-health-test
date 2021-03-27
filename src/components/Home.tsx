import React, { useState, useEffect, useCallback } from 'react';
import { useListReposQuery } from '../generated';
import { debounce } from 'lodash';

import '../styles/Home.css';
import Repository from './Repository';
export default function Home() {
  const [query, setQuery] = useState('');
  const [queryString, setQueryString] = useState('');
  const handleInput = (e: any) => {
    setQuery(e.target.value);
  };

  const { loading, data } = useListReposQuery({
    variables: { queryString },
  });

  const updateQuery = () => {
    setQueryString(query);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [query]);

  useEffect(() => {
    delayedQuery();
    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [query, delayedQuery]);
  const totalCount = data?.search.repositoryCount;
  return (
    <div className="main">
      <input onChange={handleInput} value={query} placeholder="Please type search key" />
      {loading && <div className="searching">Searching...</div>}
      {!loading && queryString && data && (
        <div className="repository-list">
          <div className="total-count">Results: {totalCount}</div>
          {data?.search.edges?.map(item => {
            if (!item || !item.node) {
              return '';
            }
            return <Repository repository={item?.node}></Repository>;
          })}
        </div>
      )}
    </div>
  );
}
