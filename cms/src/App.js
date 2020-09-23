import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  FormGroup,
  Label,
  Input,
  Form,
  Row,
  Col,
  Button
} from 'reactstrap';

const ProductWidget = React.lazy(() => import("website/ProductWidget"))

class App extends React.Component {
  state = {
    title: '',
    description: '',
    showPreview: false
  }

  showPreview = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const color = document.getElementById('color').value;

    this.setState({
      title: title,
      description: description,
      color: color,
      showPreview: true
    });
  }

  render() {
    const { showPreview, title, description, color } = this.state;

    return (
      <React.Fragment>
        <Navbar color="dark" dark expand="xs">
          <NavbarBrand href="/">CMS Application</NavbarBrand>
        </Navbar>
        <Container fluid="xl" style={{marginTop: 20}}>
          <Row>
            <Col>
              <h3>Product Info</h3>
              <Form>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input type="text" name="title" id="title" placeholder="Title" />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="textarea" name="description" id="description" placeholder="Description" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Select Color</Label>
                  <Input type="select" name="color" id="color">
                    <option>primary</option>
                    <option>secondary</option>
                    <option>info</option>
                    <option>success</option>
                    <option>warning</option>
                    <option>danger</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Button color="primary" onClick={this.showPreview}>Show Preview</Button>
                </FormGroup>
              </Form>
            </Col>
            <Col>
              {showPreview ? (
                <React.Suspense fallback={'Loading Widget'}>
                  <h3>Product Preview</h3>
                  <ProductWidget
                    color={color}
                    title={title}
                    description={description}
                  />
                </React.Suspense>
              ) : null}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;