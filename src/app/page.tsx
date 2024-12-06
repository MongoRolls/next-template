'use client';
import React from 'react';

import Image from 'next/image';
// import { Button } from 'antd';

const Home = () => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'gray' }}>
      <Image src="/images/union.png" width={100} height={100} alt="union" />
    </div>
    // <div className="App">
    //   <Button type="primary">Button</Button>
    // </div>
  );
};

export default Home;
