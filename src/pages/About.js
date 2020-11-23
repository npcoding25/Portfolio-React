import React from "react";
import Container from "../components/Container";


function About() {
  return (
    <Container>
      <div class="col-lg-7">
        <article class="jumbotron">
            <h1 class="display-4">About Me</h1>
            <hr class="my-4"/>
            <div class="row">
                <section class="col-md-4">
                    <img class="img2 img-fluid" width="100%" src="https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg" alt="piano"/>
                    <img class="img2 img-fluid" width="100%" src="https://i.pcmag.com/imagery/lineups/06PiprC5eiYhlpaNS6N0sbP-1.1569492872.fit_lim.size_1200x630.jpg" alt="video games"/>
                    <img class="img2 img-fluid" width="100%" src="https://canadiantire.scene7.com/is/image/CanadianTire/0844785_1?defaultImage=image_na_EN&fmt=jpg&fit=constrain,1&wid=573&hei=499" alt="toronto raptors basketball"/>
                </section>
                <content class="col-md-8">
                    <p class="lead box">I'm Nathan Polomark and I'm from Chilliwack, B.C.  I enjoy playing video games, music, and sports. I have jumped into the world of coding in hopes of a happier life. My previous work was in different fields of construction. I spent the most amount of time in framing, which was four years with the same company. I'm glad to be out of it but I will never regret learning what I did. I've gained many transferable skills like teaching others, troubleshooting problems, and having confidence to figure things out on my own.</p>
                </content>   
            </div>
        </article>
      </div>    
    </Container>
  )
}
export default About;
