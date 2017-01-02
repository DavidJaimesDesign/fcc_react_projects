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
            recipeList: null
        }
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleSubmit(e) {
        e.preventDefault()
        alert("recipe has been added")
        const newRecipeList        = recipes
        const newRecipeId          = recipes[recipes.length - 1].id + 1;
        const newRecipeName        = document.getElementById("name").value;
        const newRecipeIngredients = document.getElementById("ingredients").value.split(",");

        const newRecipe = {id: newRecipeId, name: newRecipeName, ingredients: newRecipeIngredients}
        newRecipeList.push(newRecipe)
        this.setState({ recipeList: newRecipeList})
    }
    
    componentWillMount(){
        const {recipeList} = this.state
        this.setState({ recipeList: recipes})
    }
    
    render() {
        return (
            <div className="App">
                <RecipeList recipes={this.state.recipeList}/>
                <AddButton onSubmit={this.handeSubmit}/>
            </div>
        );
    }
}

const AddRecipeForm =({onSubmit}) =>
    <form onSubmit={onSubmit}>
        <FieldGroup
            id="name"
            type="text"
            label="Recipe"
            placeholder="Recipe name"
        ></FieldGroup>
        <FieldGroup
            id="ingredients"
            type="text"
            label="Ingredients"
            placeholder="Ingredients, seperated, by, commas"
        ></FieldGroup>
        <FormGroup>
            <Button type="submit">
                 Save
            </Button>
        </FormGroup>
    </form>

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
                 };
        this.close = this.close.bind(this);
        this.open  = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false});
    }

    open() {
        this.setState({ showModal: true});
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
                                <AddRecipeForm onSubmit={this.handleSubmit}/>
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
export default App;
