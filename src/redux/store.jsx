import { createStore } from "redux";
const initialValue = {
    value: 5,
};
function reducer(pre = initialValue, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...pre, value: pre.value + 1 };
        case "DECREMENT":
            return { ...pre, value: pre.value - 1 };
            case "COLOR":
                return{...pre,color:"red"}
        default:
            return pre;
    }
}
const store=createStore (reducer);
export default store;