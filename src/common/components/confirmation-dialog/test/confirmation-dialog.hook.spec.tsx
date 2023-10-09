import {renderHook,act } from '@testing-library/react';
import { useConfirmationDialog } from '../confirmation-dialog.hook';

describe('Confirmation dialog hook', () => {
    test('verifies the opening and closing of the dialog', ()=> {
        //Arrange
        const item = {
            id: '1',
            name: 'Item 1'
        }

        //Act
        const { result } = renderHook(() => useConfirmationDialog());
        
        act(() => {
            result.current.onOpenDialog(item);
           
        })
        //Assert
        expect(result.current.isOpen).toBe(true);


        act(() => {
            result.current.onClose();
           
        })
        //Assert:
        expect(result.current.isOpen).toBe(false);
       
    });

    test('checks that isOpen is false and that itemToDelete is an empty object at the beginning', ()=> {
        //Arrange
        

        //Act

        const { result } = renderHook(()=>useConfirmationDialog());
       
        //Assert
       expect(result.current.isOpen).toBe(false);

       expect(result.current.itemToDelete).toMatchObject({});
       
    });

    test('verifies that when setItemToDelete(item) is called, the itemToDelete state is updated correctly with the object passed as argument', ()=> {
        //Arrange
        const newItem = {
            id: '2',
            name: 'Item 2'
        }

        //Act

        const { result } = renderHook(()=>useConfirmationDialog());

        act(() => {
            result.current.onOpenDialog(newItem);
           
        })
       
        //Assert
       expect(result.current.itemToDelete).toMatchObject(newItem);
       
    });

    test('checks if the status of the itemToDelete item is deleted', ()=> {
        //Arrange

        //Act

        const { result } = renderHook(()=>useConfirmationDialog());

        act(() => {
            result.current.onAccept();
           
        })
       
        //Assert
       expect(result.current.itemToDelete).toMatchObject({});
       
    });

    test('Handling unexpected situations', ()=> {
        //Arrange
        const emptyLookup = {
            id: '',
            name: '',
        }
        //Act

        const { result } = renderHook(()=>useConfirmationDialog());

        act(() => {
            result.current.onOpenDialog(null);
           
        })
       
        //Assert
       expect(result.current.isOpen).toBeFalsy();
       expect(result.current.itemToDelete).toMatchObject(emptyLookup);

       
    })
})