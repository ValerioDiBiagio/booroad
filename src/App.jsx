<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={< Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
=======
export default function App() {
  return (
    <></>
  )
>>>>>>> cd9f797ae75abe23f5e1d29f1203647e4122f05c
};