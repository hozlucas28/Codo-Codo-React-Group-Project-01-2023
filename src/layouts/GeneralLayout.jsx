import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const GeneralLayout = ({ children }) => {
  return (
    <>
      <Header /> {Header}
      {children} 
      <Footer /> {Footer}
      <span>
        <img src="/static/react-logo.svg"/>
      </span>
    </>
  );
};

export default GeneralLayout; 
