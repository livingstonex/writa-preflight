import React, { Component } from 'react';

// Importing Section
import Navbar from '../../component/Navbar/NavBar';

import Section from './Section';
import Services from '../../component/Services';
import Contact from '../../component/Contact';
import Footer from '../../component/Footer/Footer';
import NotifyModal from '../../component/NotifyModal/NotifyModal';
import Roadmap from '../../component/Roadmap';

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: 'home', navheading: 'Home' },
        { id: 2, idnm: 'services', navheading: 'Features' },
        { id: 3, idnm: 'contact', navheading: 'Contact' },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: '',
      fixTop: true,
      isNotifyModalOpen: false,
    };
    this.openNotifyModal = this.openNotifyModal.bind(this);
    this.toggleNotifyModal = this.toggleNotifyModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: 'nav-sticky', imglight: false });
    } else {
      this.setState({ navClass: '', imglight: false });
    }
  };

  openNotifyModal() {
    this.setState({
      isNotifyModalOpen: true,
    });
  }

  toggleNotifyModal() {
    this.setState({ isNotifyModalOpen: !this.state.isNotifyModalOpen });
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <Navbar
          navItems={this.state.navItems}
          navClass={this.state.navClass}
          imglight={this.state.imglight}
          top={this.state.fixTop}
          openNotifyModal={this.openNotifyModal}
        />

        {/* Importing Section */}
        <Section openNotifyModal={this.openNotifyModal} />

        {/* Importing Service */}
        <Services />

        {/* Importing Roadmap */}
        {/* <Roadmap /> */}

        {/* Importing Contact Us */}
        <Contact />

        {/* Importing Footer */}
        {/* <Footer /> */}
        <NotifyModal
          openNotifyModal={this.state.isNotifyModalOpen}
          toggle={this.toggleNotifyModal}
        />
      </React.Fragment>
    );
  }
}
export default Layout1;
