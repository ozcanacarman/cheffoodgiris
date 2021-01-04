import React from 'react';
import axios from 'axios';

 

class App extends React.Component {

  state = {
    restorantname: '',
    //body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('http://localhost:5000/Restorantlar/RestorantAraAll')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('DataBulunamadı!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target }) => {
    const { restorantname, value } = target;
    this.setState({ [restorantname]: value });
  };


 /*  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };


    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  }; */

  resetUserInputs = () => {
    this.setState({
        restorantname: '',
     // body: ''
    });
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.restorantname}</h3>
       {/*  <p>{post.body}</p> */}
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
         <form onSubmit={this.submit}>
        {/*   <div className="form-input">
            <input 
              type="text"
              name="restorantname"
              placeholder="restorantname"
              value={this.state.restorantname}
              onChange={this.handleChange}
            />
          </div> */}
          <div className="form-input">
        {/*     <textarea
              placeholder="body"
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            >
              
            </textarea> */}
          </div>

        {/*   <button>Submit</button> */}
        </form>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}


export default App;