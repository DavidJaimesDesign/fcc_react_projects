import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Accordion,Button, Row, Col, Panel,ButtonGroup, Modal, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
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
        this.handleAdd    = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit   = this.handleEdit.bind(this) 
    }
    
    componentWillMount(){
        this.setState({ recipeList: recipes})
    }
    
    handleAdd(newRecipe) {
        alert("recipe has been added")
        const newRecipeList = recipes
        newRecipeList.push(newRecipe)
        this.setState({ recipeList: newRecipeList})
    }
    
    handleDelete(recipeToDelete) {
        const newRecipeList = recipes
        for(var i = 0; i < recipes.length; i++){
            if(recipes[i] === recipeToDelete){
                newRecipeList.splice(i, 1);
                alert("recipe has been deleted");
                this.setState({ recipeList: newRecipeList})
                break;
            }
        }
    }

    handleEdit(editedRecipe) {
        const editedRecipeList = recipes
        for(var i = 0; i<recipes.length; i++){
            if(recipes[i].id === editedRecipe.id){
                editedRecipeList.splice(i, 1, editedRecipe);
                this.setState({ recipeList: editedRecipeList})
                alert("recipe has been edited")
                break;
            }
        }
    } 

    render() {
        return (
            <div className="App">
                <RecipeList recipes={this.state.recipeList} recipeDeleted={this.handleDelete} recipeEdited={this.handleEdit}/>
                <AddButton recipeAdded={this.handleAdd}/>
            </div>
        );
    }
}

class RecipeList extends Component {
    constructor(props){
        super(props)
        this.state = { 
                        open:true,
                        showModal: false,
                     };
        this.deleteButton           = this.deleteButton.bind(this)
        this.editRecipeFunction     = this.editRecipeFunction.bind(this)
        this.openEditModal          = this.openEditModal.bind(this)
        this.closeEditModal         = this.closeEditModal.bind(this)
    }

    deleteButton(delRecipe){
        this.props.recipeDeleted(delRecipe)
    }

    editRecipeFunction(e){
        e.preventDefault()
        const RecipeId              = 3; //need to find a way to transfer this
        const editRecipeName        = document.getElementById("name").value;
        const editRecipeIngredients = document.getElementById("ingredients").value.split(",");
        const toEditRecipe = {id: RecipeId, name: editRecipeName, ingredients: editRecipeIngredients}
        this.setState({ showModal: false});
        this.props.recipeEdited(toEditRecipe)
    }
    
    openEditModal(){
        this.setState({ showModal: true})
    }

    closeEditModal(){
        this.setState({ showModal: false})
    }

    render() {
        const { recipes} = this.props;
        return(
            <Row>
                <Col md={4} mdOffset={4}>
                    <div>
                        <Accordion>
                        {recipes.map((recipe, i,l,m) =>
                            <Panel header={recipe.name} eventKey={recipe.id} key={i}>
                                <span> Ingredients </span>
                                {recipe.ingredients.map((ingredient, k) =>
                                    <Panel key={k}>{ingredient}</Panel>    
                                )}
                            <ButtonGroup>
                                <Button bsStyle="primary" onClick={this.openEditModal}>Edit</Button>
                                <Button bsStyle="danger"  onClick={() => this.deleteButton(recipe)}>Delete</Button>
                            </ButtonGroup>
                                
                            <Modal show={this.state.showModal} onHide={this.closeEditModal} key={l}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Recipe</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form key={m} onSubmit={this.editRecipeFunction}>
                                        <FieldGroup
                                            id="name"
                                            type="text"
                                            label="Recipe"
                                            placeholder={recipe.name}
                                        ></FieldGroup>
                                        <FieldGroup
                                            id="ingredients"
                                            type="text"
                                            label="Ingredients"
                                            placeholder={recipe.ingredients}
                                        ></FieldGroup>
                                        <FormGroup>
                                            <Button type="submit">
                                                Save
                                            </Button>
                                        </FormGroup>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.closeEditModal}>Cancel</Button>
                                </Modal.Footer>
                            </Modal>
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    close() {
        this.setState({ showModal: false});
    }

    open() {
        this.setState({ showModal: true});
    }
    
    handleSubmit(e){
        e.preventDefault();

        const newRecipeId          = recipes[recipes.length - 1].id + 1;
        const newRecipeName        = document.getElementById("name").value;
        const newRecipeIngredients = document.getElementById("ingredients").value.split(",");

        const newRecipe = {id: newRecipeId, name: newRecipeName, ingredients: newRecipeIngredients}
        console.log(newRecipe)
        this.props.recipeAdded(newRecipe)
        this.setState({ showModal: false});
    }    
    render() {
        return(
            <Row>
                <Col md={4} mdOffset={4}>
                    <div>
                        <Button 
                            bsStyle="primary" 
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
