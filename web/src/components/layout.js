import React from "react";
import PhxHeader from "./phx/phxHeader";
import Footer from "./footer";
import "../styles/layout.css";
import withWidth from '@material-ui/core/withWidth'
import { theme } from "./phx/theme"
import { ThemeProvider } from '@material-ui/core/styles';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (this.state.scrolled && window.scrollY <= 10) {
      this.setState({ scrolled: false });
    } else if (!this.state.scrolled && window.scrollY > 10) {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const {
      children,
      onHideNav,
      onShowNav,
      showNav,
      siteTitle,
      navMenuItems,
      textWhite = true,
      width
    } = this.props;
    const { scrolled } = this.state;

    return (
      <>
      <ThemeProvider theme={theme}>
        <PhxHeader
          navMenuItems={navMenuItems}
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          scrolled={scrolled}
          textWhite={textWhite}
          width={width}
        />
        <>{children}</>
        <Footer siteTitle={siteTitle} />
        </ThemeProvider>
      </>
    );
  }
}

export default withWidth()(Layout);
// export default Layout;
