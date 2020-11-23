import React from "react";
import Container from "../components/Container"

function Contact() {
  return(
    <Container>
      <article class="jumbotron contact-jumbo mx-5">
        <h1>Contact Me</h1>
        <hr class="my-4"/>
        <p><b>Name: </b>Nathan Polomark</p>
        <p><b>Email: </b>polomarkn@hotmail.com</p>
        <p><b>Phone Number: </b>604-603-0941</p>
        <p><b>Github: <a href="https://github.com/npcoding25">npcoding25</a></b></p>
        <p><b><a href="https://www.linkedin.com/in/nathan-polomark-363b2a1b4/">LinkedIn Profile</a></b></p>
        <p><b><a href="https://docs.google.com/document/d/1dStC3cf8tHPLdvv5quHpSrnj5tJt4LtIwSy6FeO1B2s/edit?usp=sharing">My Resume</a></b></p>
      </article>
    </Container>
  )
}

export default Contact;
