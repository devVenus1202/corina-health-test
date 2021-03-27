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
          <a href={`/detail/${repository.id}`} target="_blank">
            {repository.name}
          </a>
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
