import { Component } from "react";

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import pixabayAPI from '../services/pixabay-api';

export class App extends Component {
  state = {
    searchValue: null,
    searchResult: [],
  };

  onSearchbarSubmit = searchValue => {
    console.log(searchValue);

    pixabayAPI(searchValue)
      .then(res => {
        console.log(res.hits);
        this.setState({ searchResult: res.hits });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { searchResult } = this.state;

    return (
      <div style={{ padding: '40', }}>
        <Searchbar onSubmit={this.onSearchbarSubmit} />
        <ImageGallery imglist={searchResult} />
      </div>
    );
  }
};




// export const App = () => {
//   return (
//     <div
//       style={{
//         padding: '40',
//       }}
//     >
//       <Searchbar />
//       <ImageGallery />
//     </div>
//   );
// };
