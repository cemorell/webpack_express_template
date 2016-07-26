import React from 'react';
import 'whatwg-fetch';
import Search from './search';


class DateContainer extends React.Component {
 constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
      <Search />
    </div>
    )
  }
}

export default DateContainer;





