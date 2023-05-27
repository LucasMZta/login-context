import { MainRoute } from './routes/MainRoute';
import { Context } from './contexts/Context';
import './App.css'
import { useContext } from 'react';

const App = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {/* <h1> User: {state.user.name} </h1> */}
      <MainRoute />
    </>

  )
}

export default App;
