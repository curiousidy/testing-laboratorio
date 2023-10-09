import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

export const mapEmployeeSummaryFromApiToVm = (
  employeeSummary: apiModel.EmployeeSummary
): viewModel.EmployeeSummary => ({
  ...employeeSummary,
});

export const mapEmployeeSummaryListFromApiToVm = (
  employeeSummary: apiModel.EmployeeSummary[]
): viewModel.EmployeeSummary[] =>
  mapToCollection(employeeSummary, es => mapEmployeeSummaryFromApiToVm(es));

export const mapProjectFromApiToVm = (
  project: apiModel.Project
): viewModel.Project => {
  return Boolean(project)
    ? {
       id:project.id,
       name:project.name,
       isActive:project.Active,
       comments:project.comments,
       externalId:project.externalId,
        employees: mapEmployeeSummaryListFromApiToVm(project.employees),
      }
    : viewModel.createEmptyProject();
};
