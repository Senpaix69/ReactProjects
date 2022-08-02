import './App.css';
import Connection from './components/Connection';
import Details from './components/Details';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';

export default function App() {
  return (
    <div className='container'>
      <HeaderSection name="Huraira Younas" dev="Frontend Developer" address="Lahore-Pakistan" />
      <Connection />
      <Details about="About" detail={("My full name is Huraira Younas, I'm learning Web Development." +
        "I know Advance C++, I have made projects: Like Snake Game, UniLink App" +
        ", Advance GPA Calculator with MySQL backend connected with c++ Etc")} />
      <Details about="Interests" detail={("I love to play PUBG, was a good player. I love to play football too." +
        "I am more passionate about coding now, I do straight coding for hours without" +
        " getting tired. I love to learn new things . Like I know a couple of languages " +
        "like Java, Javascript, Python, C++, C#, C, MySQL.")} />
      <Footer />
    </div>
  )
}