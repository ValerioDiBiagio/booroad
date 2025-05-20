import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import JourneyDetail from './pages/JourneyDetail';
import JourneyMembers from './pages/JourneyMembers';
import Error from './components/Error';
import GlobalContext from './contexts/GlobalContext';
import JourneyMemberDetails from './pages/JourneyMemberDetails';
import JourneyGuideDetails from './pages/JourneyGuideDetails';
import Guides from './pages/Guides';

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
                        <Route path='/journeys' element={<Homepage />} />
                        <Route path='/journeys/:id' element={<JourneyDetail />} />
                        <Route path='/members' element={<JourneyMembers />} />
                        <Route path='/members/:id' element={<JourneyMemberDetails />} />
                        <Route path='/guides' element={<Guides />} />
                        <Route path='/guides/:id' element={<JourneyGuideDetails />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
};
