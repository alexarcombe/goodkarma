import React from 'react';
import Showcase from './Showcase';
import {} from '@material-ui/core';
import useScrollTop from '../../hooks/useScrollTop';

export default function Home() {
  useScrollTop();
  return <Showcase />;
}
