import './App.css';
import Cards from './components/Cards';
import Data from './components/Data';

export default function App() {
  const card = Data.map(items => {
    return (
      <Cards
        key={items.id}
        {...items}
      />
    )
  })
  return (
    <div className='container'>
      <nav>
        <h1 className='header'>Made By Senpai</h1>
      </nav>
      {card}
    </div>
  )
}