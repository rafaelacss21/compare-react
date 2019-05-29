import React, { Component } from 'react';
import './Features.css';

class Features extends Component {
 render() {
  return (
   <div className="features">
    <div className="container">
     <section className="section">
      <h1 className="title">Features</h1>
      <h2 className="subtitle is-4">Ipsam explicabo distinctio officia voluptatem.</h2>

      <div className="columns pd">
       <div className="column">
        <div className="card">
         <div className="card-image">
          <figure className="image is-4by3">
           <img src="https://bulma.io/images/placeholders/1280x960.png" alt="image" />
          </figure>
         </div>
         <div className="card-content">
          <p className="title">Lorem</p>
          <p className="subtitle">Ipsum dolor, sit amet consectetur adipisicing elit. Provident odio tempore reprehenderit, atque illum facilis?</p>
         </div>
        </div>
       </div>

       <div className="column">
        <div className="card">
         <div className="card-image">
          <figure className="image is-4by3">
           <img src="https://bulma.io/images/placeholders/1280x960.png" alt="image" />
          </figure>
         </div>
         <div className="card-content">
          <p className="title">Consectetur</p>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at porro sint odio dolorem, dolores corrupti alias quasi excepturi expedita.</p>
         </div>
        </div>
       </div>

       <div className="column">
        <div className="card">
         <div className="card-image">
          <figure className="image is-4by3">
           <img src="https://bulma.io/images/placeholders/1280x960.png" alt="image" />
          </figure>
         </div>
         <div className="card-content">
          <p className="title">Dolorem</p>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem quasi reiciendis odit quia excepturi!</p>
         </div>
        </div>
       </div>
      </div>
     </section>
    </div>

   </div>

  )
 }
}

export default Features;