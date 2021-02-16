import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

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
    <div className="App">
      <div className="album">{detailAlbums.name} </div>
      {detailAlbums.photos &&
        detailAlbums.photos.map((photo) => {
          return (
            <div className="pics">
              <li key={photo.id}>
                <img src={photo.thumbnail} height="100px" width="100px"></img>
                <span>{photo.name}</span>
              </li>
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
