import React from 'react';
import BarList from './BarList';
import DetailBar from './DetailBar';
import Logout from './Logout';
import MenuCollapsible from './MenuCollapsible';
import '../stylesheet/layoutP.css';
import GoogleMapsContainer from './GoogleMapsContainer';
class LoyoutPrincipal extends React.Component {
  render() {
    return (
      <div className="layoutPrincipal">
      <GoogleMapsContainer />
        <MenuCollapsible />
        
        <BarList establishments={this.props.establishments} />
        <DetailBar />
        <Logout logout={this.props.logout} email={this.props.email} />
      </div>
    );
  }
}

export default LoyoutPrincipal;