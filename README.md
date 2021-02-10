## Topics made clear with this project:

- redux-thunk is a middleware for redux that allows to perform side effects before dispatching an action
- redux-thunk allows to return a function besides an object from an action creator
- The ultimate goal of an action creator is to return an action with type and optional payload
- A reducer only cares about its cases in the switch statement, but all reducers receive the action dispatched
- The structure for a redux application involves: Creating the store in the entry point of the app, providing it to the React part with the Provider and integrating redux-thunk in that same entry point.
- The redux -> react communication is via Provider, the react-redux communication is via the connect function
- To dispatch an action from a component, it must be available as second argument for the connect function.
- The redux store state is available in the components thanks to the mapStateToProps and connect functions. The connect provides the structure and the mapStateToProps allows sculpting it as necessary.

### General Data Loading with Redux

Component gets rendered to the screen
Component's componentDidMount lifecycle method gets called
We call action creator from 'componentDidMount'
Action creator runs code to make an API request
API responds with data
Action creator returns an action with the feched data on de payload property
Some reducer see the action, returns the data off the payload
Because we generated some new state object, redux/react-redux cause our React app to be rendered
