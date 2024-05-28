import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(103)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quisquam quibusdam 
            excepturi eaque, ab amet velit voluptates molestiae illum libero maxime itaque
            accusantium ipsa sit distinctio, officia rem iste sapiente! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eveniet vitae eius amet vero quia repudiandae nihil 
            ullam velit eum, suscipit sunt blanditiis labore incidunt, sit aliquam fugiat! Quo, eius eveniet.</p>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vero quisquam quibusdam Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vero quisquam quibusdam Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
