import * as yup from 'yup';

export const createListingSchema = yup.object().shape({
    itemName: yup
        .string()
        .required('Must include an item name')
        .min(3, 'Item name must be at least 3 characters long'),
    itemDescription: yup
        .string()
        .required('Must include an item description')
        .min(3, 'Item description must be at least 3 characters long'),
    itemPrice: yup
        .number()
        .required('Must include an item price')
        .min(1, 'Item price must be at least $1')
});
