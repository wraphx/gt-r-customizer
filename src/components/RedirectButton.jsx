import React from 'react';
import { Button } from "flowbite-react";



class RedirectButton extends React.Component {
    handleClick = () => {
        window.open('https://www.wraphx.com/category/self-install-wrap-templates', '_blank');
      };

  render() {
    return (
    
      <Button className='button-87' onClick={this.handleClick} size="md" >
      Buy Now
    </Button>

    );
  }
}

export default RedirectButton;
