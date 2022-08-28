import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";

export function renderWithProvider(element){
    return render(
        <Provider store={store}>
            {element}
        </Provider>
    );
}
export function renderWithRouterProvider(element){
    return render(
        <Provider store={store}>
            <Router>
                {element}
            </Router>
        </Provider>
    );
}
