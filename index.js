"use strict"
const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log(`Playing ${song.title} from ${song.album} by ${song.artist} | `
    +((Math.floor(song.duration/60))<10? "0": "")+`${Math.floor(song.duration/60)}:` +((song.duration%60)<10? "0": "")+`${song.duration%60}.`)
  }
}

function findSong(id){ 
  let notValId=true;
  for(let song of player.songs){
    if (song.id===id){
      return song;
    }
  }
  throw "ID not found";
}

function findPlaylist(id){ 
  let notValId=true;
  for(let Playlist of player.playlists){
    if (Playlist.id===id){
      return Playlist;
    }
  }
  throw "ID not found";
}

function playSong(id) {
  player.playSong(findSong(id));
}

function removeSong(id) {
  player.songs.splice(player.songs.indexOf(findSong(id)),1);
  for(let playlist of player.playlists){
    playlist.songs.splice(playlist.songs.indexOf(id),1)
  }
}
let newSongId=10;
function generateSongId(){
newSongId+=1;
return newSongId;
}
function durationToSeconds(duration){
  return((parseInt(duration[0])*10)+parseInt(duration[1]))*60
          +parseInt(duration[3]*10)+parseInt(duration[4])
}
function addSong(title, album, artist, duration, id=generateSongId()) {
  try{
    findSong(id) 
  }catch(err) {
    player.songs.push({"id":id,
    "title": title,
    "album": album,
    "artist": artist,
    "duration": durationToSeconds(duration),
    })
    return id;
  }
  throw "ID taken"
}

function removePlaylist(id) {
  player.playlists.splice(player.playlists.indexOf(findPlaylist(id)),1);
}

let newPlaylistId=3
function generatePlaylistId(){
  newPlaylistId+=1
  return newPlaylistId
}

function createPlaylist(name, id=generatePlaylistId()) {
  try{
    findPlaylist(id) 
  }catch(err) {
    player.playlists.push({ "id":id , "name": name, "songs": [] })
    return id;
  }
  throw "ID taken"
}

function playPlaylist(id) {
  for(let songId of findPlaylist(id).songs){
    playSong(songId)
  }
}

function editPlaylist(PlaylistId, songId) {
  let playlistIndex=player.playlists.indexOf(findPlaylist(PlaylistId));
  findSong(songId);
  if(player.playlists[playlistIndex].songs.indexOf(songId)===(-1)){
    player.playlists[playlistIndex].songs.push(songId);
  }else{
    player.playlists[playlistIndex].songs.splice(player.playlists[playlistIndex].songs.indexOf(songId),1);
  }
  if(player.playlists[playlistIndex].songs.length===0){
    removePlaylist(PlaylistId);
  }
}

function playlistDuration(id) {
  let plDuration=0;
  for(let songID of findPlaylist(id).songs){
    plDuration+=(findSong(songID).duration);
  }
  return (plDuration);          //why is that in sec ??
}

function searchByQuery(query) {
  const QUERY=query.toUpperCase();
  const queryObj={"songs":[],"playlists":[]}
  for(let song of player.songs) {
    if(song.title.toUpperCase().includes(QUERY)
      ||song.artist.toUpperCase().includes(QUERY)
      ||song.album.toUpperCase().includes(QUERY)){
        queryObj.songs.push(song);
    }
  }
  for(let playlist of player.playlists){
    if(playlist.name.toUpperCase().includes(QUERY)){
      queryObj.playlists.push(playlist);
    }
  }
  queryObj.songs.sort(function(a, b) {
    let titleA = a.title.toUpperCase(); 
    let titleB = b.title.toUpperCase(); 
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
  });
  return queryObj;
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
