import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import JourneyDetail from './pages/JourneyDetail';
import JourneyMembers from './pages/JourneyMembers';
import Error from './components/Error';
import GlobalContext from './contexts/GlobalContext';

export default function App() {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{
            isLoading,
            setIsLoading
        }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/journeys-detail' element={<JourneyDetail />} />
                        <Route path='/journeys-members' element={<JourneyMembers />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
};
