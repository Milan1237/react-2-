import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorElement from './ErrorElement'

const Parent = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorElement}>
        <main>
            <p>Hello there</p>
        <Text />
        </main>
    </ErrorBoundary>
  )
}

export default Parent