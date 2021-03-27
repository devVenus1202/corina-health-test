import React from 'react';
import { useGetRepoByIdQuery, GetRepoByIdQuery } from '../generated';
const RepositoryDetail: React.FC = ({ match }: any) => {
  const { loading, error, data } = useGetRepoByIdQuery({
    variables: { id: match.params.repositoryId },
  });
  if (loading || error || !data) {
    return <div></div>;
  }
  let node: any = data.node;
  return (
    <div className="content">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="repository-detail">
          <h1>{node.name}</h1>
          <div>
            <a href={node.url}>{node.url}</a>
          </div>
          <div>{node.description}</div>
          <div>
            <b>Owner:</b>
            {node.owner.login}
          </div>
          <div>
            <b>Total Commits:</b>
            {node.defaultBranchRef.target.history.totalCount}
          </div>
          <div>
            <b>Is Public:</b>
            {!node.isPrivate ? 'Yes' : 'No'}
          </div>
          <div>
            <b>Is Archived:</b>
            {node.isArchived ? 'Yes' : 'No'}
          </div>
          <div>
            <b>Stars:</b>
            {node.stargazers.totalCount}
          </div>
        </div>
      )}
    </div>
  );
};
export default RepositoryDetail;
