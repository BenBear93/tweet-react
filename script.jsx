
class ListTweet extends React.Component {

    render() {
        console.log(this.props.tweet.entities.urls);
        if (this.props.tweet.entities.urls.length > 0){
            console.log("true");
        } else {
            console.log("false");
        }
        return (


          <div><p><img src ={this.props.tweet.user.profile_image_url} /><b>{this.props.tweet.user.name}</b> {this.props.tweet.user.screen_name} {this.props.tweet.created_at}</p><p>message: {this.props.tweet.text}</p> retweet: {this.props.tweet.retweet_count}, likes: {this.props.tweet.favorite_count}<p></p>
          </div>
        );
    }
}

class List extends React.Component {
    render() {
        console.log(tweets);
        let username = tweets[0].user.name;
        let tweetElements = this.props.tweets.map( (tweet) => {
                              return <div>
                                        <ListTweet tweet={tweet}></ListTweet>
                                    </div>
                            });
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-default">Back
                    </button>
                    <h1>{username}</h1>
                </div>
                <div>
                    {tweetElements}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
      <List tweets={tweets} />
    </div>,
    document.getElementById('root')
);