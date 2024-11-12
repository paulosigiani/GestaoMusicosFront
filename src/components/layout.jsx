import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";
import Container from "./container";

/* eslint-disable react/prop-types */
function Layout({ children, setShowMusicos }) {
  return (
    <>
      <Container>
        <Header />
        <Menu setShowMusicos={setShowMusicos} />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
