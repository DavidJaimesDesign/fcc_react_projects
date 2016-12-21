import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const recipes= [
                    {
                        name: "Pork and Beans",
                        ingredients: ["beans", "pork", "love"]
                    },

                    {
                        name: "The best Omlet",
                        ingredients: ["eggs", "thinly cut steak", "butter", "spinach", "musrooms", "hot sauce"]
                    },

                    {
                        name: "Steak",
                        igredients: [ "Steak", "A grill", "Seasoning", "nothing else"]
                    }
                ];
class App extends Component {
    render() {
        return (
            <div className="App">
                <AddButton/>                 
                <RecipeList/>
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
    render() {
        return(
            <p>Recipelist linked</p>
        )
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
