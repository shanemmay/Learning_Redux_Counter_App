const initState = {number : 0};
export default (state = initState, action) =>
{
    switch (action.type)
    {
        case "INCREMENT":
            console.log("INCREMENT activated");
            return {number: state.number+1};
        case "DECREMENT":
            console.log("DECREMENT activated");
            return {number: state.number-1};
        case "CLEAR":
            console.log("CLEAR activated");
            return {number: 0};
        default:
            console.log("default activated");
            return state;
    }
}