import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  //   Testimonials,
  //   Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  //   Services,
  //   Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Achievement />
            <Services />
>>>>>>> 5c2efbcbc6526a4652d969464520e699978c82f8
            <Testimonials />
            <Blog /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
