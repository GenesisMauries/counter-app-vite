import React from 'react';
import { createRoot } from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { DefaultProps } from './DefaultProps';
import { FirstApp } from './FirstApp';
import { HelloWorld } from './HelloWorld';
import { PropsExample } from './PropsExample';
import { PropTypesExample } from './PropTypesExample';

// Definir estilos
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={10} />
    <HelloWorld /> */}
    {/* <FirstApp /> */}

    {/* Envia props del padre al hijo */}
    <PropsExample
      title='Vengo de props'
      subTitle='Me envian desde main.jsx'
      number={1000}
    />
    {/* 
    <PropTypesExample title={123} address='Coyoacan' />
    <DefaultProps title={123} /> */}
  </React.StrictMode>
);
