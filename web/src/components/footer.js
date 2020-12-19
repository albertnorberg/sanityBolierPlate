import React from "react";

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 20
  }
}

const Footer = ({ siteTitle }) => (
  <footer style={styles.container}>
   <h2 style={{fontWeight: 800}}>Footer</h2>
   <p>Copyright © 2020 {siteTitle}. All Rights Reserved.</p>
  </footer>
);

export default Footer;
