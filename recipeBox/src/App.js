import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
    render() {
        const { recipes} = this.props;
        return(
            <div>
                {recipes.map((recipe) =>
                    <div key={recipe.id}>
                        <p>{recipe.name}</p>
                        <p>{recipe.ingredients}</p>
                    </div>
                )}
            </div>
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
