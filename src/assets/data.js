
const initialFormValues = {
    name: '',
    size: {
        sm: 'small- $10',
        md: 'medium- $15',
        lg: 'large- $20',
        xl: 'extra-large- $25'
    },
    sauce: {
        tomato: 'tomato sauce',
        garlic: 'roasted garlic sauce',
        pesto: 'basil pesto sauce'
    },
    crust: {
        hand: 'handtossed',
        thin: 'thin'
    },
    cheese: {
        normal: 'normal',
        light: 'light',
        extra: 'extra-cheese'
    },
    meats: [
        {
            name: 'pepperoni',
            type: 'checkbox',
            id: 1,
            pepperoni: false
        },
        {
            name: 'sausage',
            type: 'checkbox',
            id: 2,
            sausage: false
        },
        {
            name: 'bacon',
            type: 'checkbox',
            id: 3,
            bacon: false
        },
        {
            name: 'beef',
            type: 'checkbox',
            id: 4,
            beef: false
        },
        {
            name: 'chicken',
            type: 'checkbox',
            id: 5,
            chicken: false
        },
        {
            name: 'ham',
            type: 'checkbox',
            id: 6,
            ham: false
        }
    ],
    veggies: [
        {
            name: 'spinach',
            type: 'checkbox',
            id: 7,
            spinach: false
        },
        {
            name: 'bell peppers',
            type: 'checkbox',
            id: 8,
            peppers: false
        },
        {
            name: 'mushrooms',
            type: 'checkbox',
            id: 9,
            mushrooms: false
        },
        {
            name: 'tomatoes',
            type: 'checkbox',
            id: 10,
            tomatoes: false
        },
        {
            name: 'olives',
            type: 'checkbox',
            id: 11,
            olives: false
        },
        {
            name: 'artichokes',
            type: 'checkbox',
            id: 12,
            artichokes: false
        }
    ],
    specialInstructions: '',
};

export { initialFormValues };