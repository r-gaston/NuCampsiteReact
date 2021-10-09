import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedCampsite:null
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    renderSelectedCampsite(campsite) {
        if(campsite) {
            return (
                <Card>
                    <CardImg top scr={campsite.name} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.campsites.map(campsites => {
        return (
            <div key={campsites.id} className="col">
                <img src={campsites.image} alt={campsites.name} />
                <h2>{campsites.name}</h2>
                <p>{campsites.description}</p>
            </div>               
        );
    });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;