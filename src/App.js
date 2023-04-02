import Row from './Row';
import './App.css';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchURL={requests.fetchNetflixOrginals}/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOrginals}/>
      <Row title="Trending Now"      fetchURL={requests.fetchTrending}       />
      <Row title="TOP RATED"         fetchURL={requests.fetchTopRated}       />
      <Row title="Horror Movies"     fetchURL={requests.fetchHorrorMovies}   />
      <Row title="ACTION MOVIES"     fetchURL={requests.fetchActionMovies}   />
      <Row title="COMEDY MOVIES"     fetchURL={requests.fetchComedyMovies}   />
      <Row title="ROMANTIC MOVIES"   fetchURL={requests.fetchRomanceMovies}  />
      <Row title="DOCUMENTARIES"     fetchURL={requests.fetchDocumantaries}  />

    </div>
  );
}

export default App;

