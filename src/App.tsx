import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import FindJobs from './Pages/FindJobs';
import FindTalentPage from './Pages/FindTalentPage';
import HomePage from './Pages/HomePage';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import PostJob from './Pages/PostJob';
import TalentProfilePage from './Pages/TalentProfilePage';
import Header from './header/Header';
import PostedJobPage from './Pages/PostedJobPage';

function App() {
  const theme = createTheme({
    focusRing: 'never',
    colors: {
      'bright-sun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902',
      ],
      'mine-shaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d',
      ],

    },
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'bright-sun',
    primaryShade: 4,
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
        <div className='relative'>
          <Header />
          <Routes>
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talents" element={<FindTalentPage />} />
            <Route path="/jobs" element={<JobDescriptionPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/post-jobs" element={<PostJob />} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
