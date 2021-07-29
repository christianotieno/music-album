import React, { Component } from 'react';

class Requester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      error: null,
    };
    this.getFeed = this.getFeed.bind(this);
  }

  getFeed(e) {
    e.preventDefault();
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            feed: result.feed.entry,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        },
      );
  }

  render() {
    return (
      <div>
        <button onClick={this.getFeed}>
          Load Feed
        </button>
        <div>
          {this.state.feed.map((music) => (
            <div>
              <h1>{music['im:name'].label}</h1>
              <img src={music['im:image'][2].label} alt="" />
              <h2>
                Number of music in album:
                {music['im:itemCount'].label}
              </h2>
              <h3>
                Cost of album album:
                {music['im:price'].label}
                {' '}
                {music['im:price'].attributes.currency}
              </h3>
              <h4>
                Category of content:
                {music['im:contentType']['im:contentType'].attributes.label}
              </h4>
              <p>
                Title:
                {music.title.label}
              </p>
              <p>
                Copyright:
                {music.rights.label}
              </p>
              <a
                href={music.link.attributes.href}
                rel={music.link.attributes.rel}
                type={music.link.attributes.type}
              >
                Link to album
              </a>
              <div>
                <a
                  href={music['im:artist'].attributes}
                >
                  More from
                  {' '}
                  {music['im:artist'].label}
                </a>
              </div>
              <div>
                Category:
                {' '}
                {music.category.attributes.label}
                <a href={music.category.attributes.scheme}>
                  Scheme
                </a>
              </div>
              <div>
                Releases Date:
                {' '}
                {music['im:releaseDate'].attributes.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Requester;
