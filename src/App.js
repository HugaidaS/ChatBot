import { MantineProvider, Text } from '@mantine/core';
import { HeroBullets } from './Hero';

function App() {
  return (
    <div className='App'>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <HeroBullets />
      </MantineProvider>
    </div>
  );
}

export default App;

