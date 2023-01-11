import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl	mx-auto'>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
       <ToastContainer />
    </div>
  );
}

export default App;
