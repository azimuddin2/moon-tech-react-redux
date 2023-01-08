import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className='max-w-7xl	mx-auto'>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
