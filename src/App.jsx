
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import JourneyDetail from './pages/JourneyDetail';
import JourneyMembers from './pages/JourneyMembers';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/journeys-detail' element={<JourneyDetail />} />
                    <Route path='/journeys-members' element={<JourneyMembers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
