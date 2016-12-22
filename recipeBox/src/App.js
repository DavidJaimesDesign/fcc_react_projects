import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Accordion,Button, Row, Col, Panel, Modal, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
const recipes= [
                    {
                        id: 1,
                        name: "Pork and Beans",
                        ingredients: ["beans", "pork", "love"]
                    },

                    {
                        id: 2,
                        name: "The best Omlet",
                        ingredients: ["eggs", "thinly cut steak", "butter", "spinach", "musrooms", "hot sauce"]
                    },

                    {
                        id: 3,
                        name: "Steak",
                        ingredients: [ "Steak", "A grill", "Seasoning", "nothing else"]
                    }
                ];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes
        }
    }
    render() {
        return (
            <div className="App">
                <RecipeList recipes={recipes}/>
                <AddButton />
                <EditRecipe />
                <DeleteRecipe />
            </div>
        );
    }
}


class RecipeList extends Component {
    constructor(props){
        super(props)
        this.state = { open:true};
    }
    render() {
        const { recipes} = this.props;
        return(
            <Row>
                <Col md={4} mdOffset={4}>
                    <div>
                        <Accordion>
                        {recipes.map((recipe) =>
                            <Panel header={recipe.name} eventKey={recipe.id}>
                                <span> Ingredients </span>
                                {recipe.ingredients.map((ingredient) =>
                                    <Panel>{ingredient}</Panel>    
                                )}
                            </Panel>
                        )}
                        </Accordion>
                    </div>
                </Col>
            </Row>
        );
    }
}

class AddButton extends Component {
    constructor(props){
        super();
        this.state = { 
                    showModal: false,
                    name: '',
                    ingredients:  '',
                 };
        this.close = this.close.bind(this);
        this.open  = this.open.bind(this);
        this.add   = this.add.bind(this);
    }

    close() {
        this.setState({ showModal: false});
    }

    open() {
        this.setState({ showModal: true});
    }
    
    add(e){
        e.preventDefault();
        const name = document.getElementById("name").value
        const ingredients = document.getElementById("ingredients").value.split(",")
        recipes.push({name: name, ingredients: ingredients})
        console.log({recipes})
        this.setState({ showModal: false})
    }

    render() {
        return(
            <Row>
                <Col md={4} mdOffset={4}>
                    <div>
                        <Button 
                            bssStyle="primary" 
                            bsSize="large" 
                            onClick={this.open}
                        >
                            Add Recipe
                        </Button>

                        <Modal show={this.state.showModal} onHide={this.close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Recipe</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <FieldGroup
                                        id="name"
                                        type="text"
                                        label="Recipe"
                                        placeholder="Recipe name"
                                    />
                                    <FieldGroup
                                        id="ingredients"
                                        type="text"
                                        label="Ingredients"
                                    placeholder="Ingredients, seperated, by, commas"
                                    />
                                    <FormGroup>
                                    <Button onClick={this.add} type="submit">
                                        Save
                                    </Button>
                                    </FormGroup>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.close}>Cancel</Button>
                            </Modal.Footer>
                        </Modal>
                
                    </div>
                </Col>
            </Row>
        )
    }
}
function FieldGroup({id, label, help, ...props}) {
    return(
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
class EditRecipe extends Component {
    render() {
        return(
            <p>EditRecipe linked</p>
        )
    }
}

class DeleteRecipe extends Component {
    render() {
        return(
            <p>Deleterecipe linked</p>
        )
    }
}
export default App;
