import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

{
  /* <Link to="/album/1/2/3/4/5/6"></Link>; */
}

export default function AlbumDetail(props) {
  // const { id } = useParams();
  const id = props.match.params.id;
  // console.log(id);

  const [detailAlbums, setDetailAlbums] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/albums/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDetailAlbums(data);
      });
  }, []);

  // console.log(detailAlbums.name);
  // console.log(detailAlbums.photos);

  return (
    <div className="details">
      {/* <div className="album">{detailAlbums.name} </div> */}
      {/* <Link to="/">{detailAlbums.name}</Link> */}
      <div className="albumlinks">
        <Link to="/album/1">Album 1</Link>
        <Link to="/album/2">Album 2</Link>
        <Link to="/album/3">Album 3</Link>
        <Link to="/album/4">Album 4</Link>
        <Link to="/album/5">Album 5</Link>
        <Link to="/album/6">Album 6</Link>
      </div>
      {detailAlbums.photos &&
        detailAlbums.photos.map((photo) => {
          return (
            <div className="pics">
              <p key={photo.id}>
                <div className="detailpics">
                  <img src={photo.thumbnail} height="100px" width="100px"></img>
                  <span>{photo.name}</span>
                </div>
              </p>
            </div>
          );
        })}
    </div>
  );
}

//   return (
//     <div className="App">
//       <div>{detailAlbums.name} </div>
//       {detailAlbums.photos &&
//         detailAlbums.photo.map((photo, index) => {
//           return (
//             <p key={index}>
//               <img src={photo.thumbnail}></img>
//               <p>{photo.name}</p>
//             </p>
//           );
//         })}
//     </div>
//   );
// }
