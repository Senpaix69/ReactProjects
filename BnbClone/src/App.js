import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './components/Data';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
      )
    })
    return (
      <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}