import React from 'react';

const MoreServices = props => {
  const { service } = props.service;
  console.log(service);
  return (
    <div>
      <h2>This is service</h2>
    </div>
  );
};

export default MoreServices;
