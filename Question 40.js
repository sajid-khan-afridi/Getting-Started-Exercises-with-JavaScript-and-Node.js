function make_album(artist_name, album_title, tracks) {
  var obj = {
    artist_name: artist_name,
    album_title: album_title,
    tracks: tracks,
  };
  return obj;
}
var obj1 = make_album("a", "d");
var obj2 = make_album("a", "b", "c");
var obj3 = make_album("a2", "b2", "c2");
console.log(obj1);
console.log(obj2);
console.log(obj3);
