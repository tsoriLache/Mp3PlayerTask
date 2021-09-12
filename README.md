# MP3 Player :
this project suppose to demonstrate simple MP3 Player.

![image](https://user-images.githubusercontent.com/89573774/132813316-8c310d9f-ef3a-4223-bf49-b59422ba651a.png)

## Basic functions you should know about:

- `playSong` - Gets a song ID and number of song to play automatically(optional), and plays it by printing it's data.
- `removeSong` - Gets a song ID, and removes it from the player (from songs and playlists).
- `addSong` - Gets a title, album, artist, duration(`mm:ss`) & ID(optional).  
- `removePlaylist` - Gets a playlist ID. Remove the playlist from the player.
- `createPlaylist` - Gets a name & ID(optional). Creates a new, empty playlist with the given details.
- `playPlaylist` - Gets a playlist ID. Plays all songs in the playlist.
- `editPlaylist` - Gets a playlist ID & a song ID: -If the song ID exists in the playlist, removes it. 
                                                   -If it was the only song in the playlist, also deletes the playlist. 
                                                   -If the song ID does not exist in the playlist, adds it to the end of the playlist.
- `playlistDuration` - Gets a playlist ID. Returns the total duration of the entire playlist.
- `searchByQuery` - Gets a query string. search in songs(title,album and artist) and playlists. 
- `searchByDuration` - Gets a duration in `mm:ss` format (for example 01:03). Returns the song, or playlist, with the closest duration to what was given.

__Note__: The functions are not yet merge to the main branch.


## Additions
- `shufflePlaylist` -play any playlist in random order.
- `autoPlay` - automatically play next song.(insted of adding it as new function I updated playSong so you can choose how many song you want it to play automatically(randomly),if you don't choose it plays only the song that match the ID.)


__Note__: The functions are not yet merge to the main branch.

## bugs /errors
- The autoPlay adittion choose the songs the next song randomly from all the songs in the player…so if you don't have many songs it will probably repeat the same songs all the time! maybe even 2 or 3 times in a row.



### If you have anything to add or comment I would love it.

