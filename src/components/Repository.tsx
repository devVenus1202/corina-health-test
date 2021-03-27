import React from 'react';

export interface IProps {
  repository: any;
}
export default function Repository(props: IProps) {
  const { repository } = props;
  return <div>{repository.name}</div>;
}
