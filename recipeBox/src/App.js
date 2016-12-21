import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Accordion,Button, Row, Col, Panel} from 'react-bootstrap';
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
                <AddButton/>                 
                <RecipeList recipes={recipes}/>
                <EditRecipe />
                <DeleteRecipe />
            </div>
        );
    }
}

class AddButton extends Component {
    render() {
        return(
            <p>AddButton linked</p>
        )
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
                            <Panel header ={recipe.name} eventKey = {recipe.id}>
                                  {recipe.ingredients}
                            </Panel>
                        )}
                        </Accordion>
                    </div>
                </Col>
            </Row>
        );
    }
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
