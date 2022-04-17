const BASE_URL = "https://api.spotify.com/v1"

// uses Spotify's Search API to search tracks by artists
const searchArtist1Tracks = async (http, { artist1 }) => {
  
  let config = {
  method: 'get',
  url: `${BASE_URL}/search?q=${artist1}&type=artist`
};
  return http(config)
    .then((res) => res.data);
}
const searchArtist2Tracks = async (http, { artist2 }) => {
  
  let config = {
  method: 'get',
  url: `${BASE_URL}/search?q=${artist2}&type=artist`
};
  return http(config)
    .then((res) => res.data);
}
const searchArtist3Tracks = async (http, { artist3 }) => {
  
  let config = {
  method: 'get',
  url: `${BASE_URL}/search?q=${artist3}&type=artist`
};
  return http(config)
    .then((res) => res.data);
}
/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (http, { artistId1,artistId2,artistId3 }) => {  
  let config = {
  method: 'get',
  url: `${BASE_URL}/recommendations?seed_artists=${artistId1},${artistId2},${artistId3},`
};

  return http(config)
    .then((res) => res.data);
}

module.exports = { searchArtist1Tracks,searchArtist2Tracks,searchArtist3Tracks, getRecommendations }