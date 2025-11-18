import React from 'react'
import CounterWithoutHook from './components/hooks/CounterWithoutHook'
import CounterWithUseState from './components/hooks/CounterWithUseState'
import CounterWithUseEffect from './components/hooks/CounterWithUseEffect'
import CounterWithUseRef from './components/hooks/CounterWithUseRef'

export default function HooksContainer() {
  return (
    <div>
        <CounterWithoutHook/>
        <CounterWithUseState/>
        <CounterWithUseEffect/>
        <CounterWithUseRef/>
    </div>
  )
}
