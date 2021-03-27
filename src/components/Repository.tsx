import React from 'react';

export interface IProps {
  repository: any;
}
export default function Repository(props: IProps) {
  const { repository } = props;
  return (
    <div className="repository">
      <div className="repository-name">
        <div>
          {repository.name}(
          <a href={repository.url} target="_blank">
            {repository.url}
          </a>
          )
        </div>
        <div className="description">{repository.description}</div>
      </div>
      <div className="repository-meta">
        <div>
          <b>Owner:</b> {repository.owner.login}
        </div>
        <div>
          <b>Stars:</b> {repository.stargazers.totalCount}
        </div>
      </div>
    </div>
  );
}
