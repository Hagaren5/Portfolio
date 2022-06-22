import {Fragment} from 'react'
import Header from './Header/Header'
import AboutMe from './Body/Sections/AboutMe'
import Experience from './Body/Sections/Experience'

function App() {
  return (
    <Fragment>
        <Header />
        <main>
          <AboutMe />
          <Experience />
        </main>
      
    </Fragment>
  );
}

export default App;
