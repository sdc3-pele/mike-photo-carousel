import React from 'react';
import ReactDOM from 'react-dom';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  render() {
    return (
      <div>
        <h1>TEST TEST TEST</h1>
      </div>
    );
  }
}

ReactDOM.render(<Photos />, document.getElementById('photos'));
