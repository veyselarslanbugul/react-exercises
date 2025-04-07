import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <h1>Kişisel Kart Uygulamasi</h1>

      <ProfileCard
        name="Veysel A."
        job="Software Developer"
      />

      <ProfileCard
        name="Zeynep K."
        job="Product Manager"
      /> 
    </div>    
  )

}

export default App;