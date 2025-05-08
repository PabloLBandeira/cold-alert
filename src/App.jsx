import Container from './components/Container'

export default function App() {
  return (
    <div className="fixed inset-0 bg-cover bg-center overflow-y-auto" style={{ backgroundImage: 'url(/cold-alert/images/bg-cold-alert.jpg)'}}>
      <Container />
    </div>
  )
}