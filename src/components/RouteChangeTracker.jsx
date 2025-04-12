import React from 'react'
import ReactGa from 'react-ga'

function RouteChangeTracker({ history }) {
  if (history) {
    history.listen((location, action) => {
      ReactGa.set({ page: location.pathname })
      ReactGa.pageview(location.pathname)
    })
  }
  return <div></div>
}

export default RouteChangeTracker
