import React from 'react';
import { Card, Flex } from 'antd';

const App: React.FC = () => (
  <Flex direction="column">
    <Card size="small" hoverable style={{ margin: 10 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" hoverable style={{ margin: 10 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" hoverable style={{ margin: 10 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Flex>
);

export default App;
