import React from 'react';
import './assets/image-hover-overlay.scss'
import ImageHoverOverlay from './image-hover-overlay'

function App() {

  return (
    <div style={{display: 'flex'}}>
    <div style={{width: '500px', height: '500px'}}>
      <ImageHoverOverlay
        title="*Hello*"
        hoverTitle="Lorem Ipsum"
        hoverDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        imageAlt="governace mocking picture 1"
        link="https://www.google.com"
      />
    </div>
        <div style={{width: '500px', height: '500px'}}>
        <ImageHoverOverlay
          title="*Goodbye*"
          hoverTitle="Lorem Ipsum"
          hoverDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          imageAlt="governace mocking picture 1"
        />
      </div>
    </div>
  );
}

export default App;
