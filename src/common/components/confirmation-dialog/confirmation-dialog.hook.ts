import React from 'react';
import { createEmptyLookup, Lookup } from 'common/models';

export const useConfirmationDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(createEmptyLookup());

  return {
    isOpen,
    itemToDelete,
    onAccept: () => {
      setItemToDelete(createEmptyLookup());
    },
    onClose: () => setIsOpen(false),
    onOpenDialog: (item: Lookup) => {
      setIsOpen(item ? true : false);
      setItemToDelete(item ? item : createEmptyLookup());
    },
  };
};
