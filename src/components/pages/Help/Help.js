import React from 'react';
import './Help.css';
function help() {
  return (
    <div class="box">
   <p class="heading">FAQs</p>
   <div class="faqs">
      <details>
         <summary><b>What is Blogging India?</b></summary>
         <p class="text">Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
</p>
      </details>
      <details>
         <summary><b>Can we create our own blogs?</b></summary>
         <p class="text">Yes</p>
      </details>
      <details>
         <summary><b>Do we need to pay charge for using the service?</b></summary>
         <p class="text"> No, It's free of cost.</p>
      </details>
      <details>
         <summary><b>Why Blogging India?</b></summary>
         <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
   </div>
</div>
  )};
export default help