import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Parents from './components/Parents';
import Play from './components/Play/Play';
import EditorPage from './components/EditorPage';
import VisualNovel from './components/VisualNovel/VisualNovel';
<<<<<<< HEAD
import Flapguide from './components/FlapGuide';
=======
import Intro from './components/VisualNovel/Intro';
>>>>>>> 95f15ff679da9cc5aa1c7d646315955ca6606700

function App() {

  return (
    <div className='page-container'>
		<div className='fill-content'>
			<Routes>
				<Route path='/' element={
					<>
						<Navbar />
						<Home />
					</>
				} />
				<Route path='/about' element={
					<>
						<Navbar />
						<About />
					</>
				} />
				<Route path='/parents' element={
					<>
						<Navbar />
						<Parents />
					</>
				} />
				<Route path='/play' element={
					<>
						<Play />
						<NavLink className='exit-play' to='/'>Exit</NavLink>
					</>
				} />
<<<<<<< HEAD
				<Route path='/flapguide' element={
					<>
						<Flapguide />
=======
				<Route path='preface' element={
					<>
						<Intro />
>>>>>>> 95f15ff679da9cc5aa1c7d646315955ca6606700
						<NavLink className='exit-play' to='/'>Exit</NavLink>
					</>
				} />
				<Route path='level1' element={
					<>
						<VisualNovel />
					</>
				} />
				<Route path='/storyteller/editor' element={<EditorPage />} />
			</Routes>
		</div>
		{/* <footer /> */}
    </div>
  );
}

export default App;