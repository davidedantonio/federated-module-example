import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  CardColumns,
  Col
} from 'reactstrap';
import ProductWidget from "./ProductWidget";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Website</NavbarBrand>
        </Navbar>
        <Container fluid="xl" style={{marginTop: 20}}>
          <CardColumns>
            {[1,2,3,4,5,6].map(index => {
              return (
                <Col>
                  <ProductWidget
                    title={`This is the example title ${index}`}
                    description={`This is the example description ${index}`}
                  />
                </Col>
              )
            })}
          </CardColumns>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;