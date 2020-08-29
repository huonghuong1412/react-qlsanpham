var DEFAULT_STATE = [
    {
        id: 1,
        name: "Name 1",
        price: 1000,
        status: true
    },
    {
        id: 2,
        name: "Name 2",
        price: 1200,
        status: true
    },
    {
        id: 3,
        name: "Name 3",
        price: 1500,
        status: false
    },
];

const products = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        default:
            return [...state]
    }
}

export default products;