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
            recipes: null
        }
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    componentDidMount(){
        const {recipes} = this.state
        this.setState({ recipes: recipes})
    }

    componentWillRecieveProps(){
     //something goes here I am to tired of this crap   
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({recipes : null})
    }
    render() {
        return (
            <div className="App">
                <RecipeList recipes={recipes}/>
                <AddRecipeForm onSubmit={() => this.handleSubmit}/>
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
                    recipes: null,
                 };
        this.close = this.close.bind(this);
        this.open  = this.open.bind(this);
        this.handleSumbit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {recipes} = this.state
        this.setState({ recipes: recipes})
    }

    handleSubmit(recipes) {
        console.log("handle submit 2 is being called")
        this.setState({ recipes: recipes})
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

const AddRecipeForm =({onSubmit}) =>
    <form onSubmit={onSubmit}>
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
            <Button type="submit">
                 Save
            </Button>
        </FormGroup>
    </form>

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
