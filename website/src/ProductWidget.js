import React from "react";
import { 
  Button, 
  Card, 
  CardText, 
  CardTitle, 
  CardHeader, 
  CardBody
} from "reactstrap";

class ProductWidget extends React.Component {
  render() {
    const { title, description, color = 'primary' } = this.props;

    return (
      <Card outline color={color}>
        <CardHeader>
          {title}
        </CardHeader>
        <CardBody>
          <CardTitle>Special Info</CardTitle>
          <CardText>{description}</CardText>
          <Button color={color}>Go somewhere</Button>
        </CardBody>
      </Card>
    )
  }
}

export default ProductWidget;