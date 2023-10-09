import React from 'react';
import { SpinnerComponent } from "../spinner.component";
import {  render } from '@testing-library/react';



jest.mock('react-promise-tracker',  () => ({
    usePromiseTracker: jest.fn().mockReturnValue({ promiseInProgress: true }),
}));

describe ('Spiner Spec',()=> {
    
    test('Cuando el open state está en true se tiene que ver el componente', ()=>{
        //Arrange
          
   
        //Act
        const {getAllByTestId}  = render (<SpinnerComponent/>);
        let spinner
        try {
            spinner = getAllByTestId('spinner');
        } catch (error) {
            spinner = []
        }        
        
        //Assert
        expect(spinner).toHaveLength(1)
    })
})