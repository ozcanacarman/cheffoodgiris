import React from 'react';
import axios from 'axios';


 
class App extends React.Component {

  state = {
    restorantname: '',
    //body: '',
    posts: []
  };

  componentDidMount = () => {
    //this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/Restorantlar/RestorantEkle')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  handleChange = ({ target}) => {
    const { restorantname, restorantnamevalue } = target;
    const { restorantAciklama,restorantAciklamavalue} = target;
    const {restorantx,restorantxvalue } = target;
    const {restoranty,restorantyvalue } = target;
    const {restoranyildiz,restoranyildizvalue} = target;
    //const {restorantyorum,restorantyorumvalue  } = target;
    //const {restorantresim,restorantresimvalue  } = target;


    this.setState({restorantname: restorantnamevalue });
    this.setState({ restorantAciklama: restorantAciklamavalue });
    this.setState({ restorantx: restorantxvalue });
    this.setState({ restoranty: restorantyvalue });
    this.setState({ restoranyildiz: restoranyildizvalue });


  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
        restorantname: this.state.restorantname,
        restorantAciklama: this.state.restorantAciklama,
        restorantx: this.state.restorantx,
        restoranty: this.state.restoranty,
        restoranyildiz: this.state.restoranyildiz,

     };


    axios({
      url: 'http://localhost:5000/Restorantlar/Restorantekle',
      method: 'POST', 
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
       // this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
         restorantname:'',
        restorantAciklama:'',  
        restorantx:'',
        restoranty:'',
        restoranyildiz:'',  
     });
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.restorantname}</h3>
       </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2>Restorant Ekle</h2>
        <form onSubmit={this.submit}>


          <div className="form-input">
            <input 
              type="text"
              name="restorantname"
              placeholder="restorant name"
              value={this.state.restorantname}
               onChange={this.handleChange}
            />
          </div>
   
          <div className="form-input">
            <input 
              type="text"
              name="restorantAciklama"
              placeholder="restorantAciklama"
              value={this.state.restorantAciklama}
               onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="restorantx"
              placeholder="restorant x"
              value={this.state.restorantx}
               onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="restoranty"
              placeholder="restorant y"
             value={this.state.restoranty}
               onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <input 
              type="text"
              name="restoranyildiz"
              placeholder="restorant restoranyildiz"
              value={this.state.restoranyildiz}
               onChange={this.handleChange}
            />
          </div>



          

   
          <button>Ekle</button>
        </form>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
}


export default App;