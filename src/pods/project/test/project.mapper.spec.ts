import * as apiModel from '../api/project.api-model';
import { mapEmployeeSummaryListFromApiToVm, mapProjectFromApiToVm } from '../project.mapper';
import * as viewModel from '../project.vm';

describe('project mapper specs', () => {
    describe('mapProjectFromApiToVm', () => {
        
        test('If I pass it an object of type project it returns an object of type viewModel', () => {
            //Arrange
            const employeeSummary:apiModel.Project = {
                id:'1234',
                name:'prueba',
                Active: true,
                comments:'blabla',
                externalId:'56789',
                employees:[
                    {
                        id:'45456',
                        employeeName:'culo',
                        isAssigned:true
                    }
                ]
            };
            const expected:viewModel.Project = {
                id:'1234',
                name:'prueba',
                isActive: true,
                comments:'blabla',
                externalId:'56789',
                employees:[
                    {
                        id:'45456',
                        employeeName:'culo',
                        isAssigned:true
                    }
                ]
            };
            //Act
            const value = mapProjectFromApiToVm(employeeSummary)

            //Assert
            expect(value).toMatchObject(expected)
        })

        test('If it is a null or undefined object it returns an empty object', () => {
            //Arrange
            const valueNull:apiModel.Project = null;
            const valueUndefined:apiModel.Project = undefined;
            const expected = viewModel.createEmptyProject();
            
            //Act
            const valueWithNull = mapProjectFromApiToVm(valueNull);
            const valueWithUndefined = mapProjectFromApiToVm(valueUndefined);

            //Assert
            expect(valueWithNull).toMatchObject(expected);
            expect(valueWithUndefined).toMatchObject(expected);
        })
    });

    describe('mapEmployeeSummaryListFromApiToVm', () => {
        test('If I pass it an object of type employeeSummary it returns an object of type employee viewModel',() => {
            //Arrange
            const employeeSummary: apiModel.EmployeeSummary[] =[{
                id: '5657',
                employeeName:'pepe',
                isAssigned:false
            }]
            const employeeSummaryViewModel: viewModel.EmployeeSummary[] =[{
                id: '5657',
                employeeName:'pepe',
                isAssigned:false
            }]
            
            //Act
            const result = mapEmployeeSummaryListFromApiToVm(employeeSummary);
            //Assert
            expect(result).toStrictEqual(employeeSummaryViewModel);
        })

        test('If I pass a null or undefined object it returns an empty array.',() => {
            //Arrange
            const valueNull:apiModel.EmployeeSummary[] = null;
            const valueUndefined : apiModel.EmployeeSummary[] = undefined;
            const expected : viewModel.EmployeeSummary[] = [];

            //Act
            const valueWithNull = mapEmployeeSummaryListFromApiToVm(valueNull);
            const valueWithUndefined = mapEmployeeSummaryListFromApiToVm(valueUndefined);

            //Assert
            expect(valueWithNull).toMatchObject(expected);
            expect(valueWithUndefined).toMatchObject(expected);
        })
    })



})
