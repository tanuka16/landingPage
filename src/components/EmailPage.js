import React, {Component} from 'react';
import emailjs from 'emailjs-com';

class EmailPage extends Component{
  state={
    email:""
  }

  handleChange=(e)=>{
    this.setState({email: e.target.value})
    // console.log(e.target.value);
  }

  subscribe=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_bzrkmlc', 'happyheal_unwxuwp', e.target, 'user_9wR5yWVqe2KtMSOH1p6cc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


  render() {
    return (
      <form onSubmit={this.subscribe}>
        <div className="subscribe">
          <input
            id="u_email"
            type="email"
            placeholder="Enter your email here..."
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="sub-button">

              <button type = 'submit'>
                <span>Win A Free Order</span>
              </button>

          </div>
        </div>
      </form>
    )
  }

}
export default EmailPage
