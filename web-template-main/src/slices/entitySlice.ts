import {createSlice} from "@reduxjs/toolkit";
import {TreeNodeData} from "../types";

interface ISlice{
    id: number
    nodes: TreeNodeData[]
}

const initialState: ISlice = {
    id: 130069,
    nodes: []
}

const entitySlice = createSlice({
    name: "entity",
    initialState,
    reducers: {
        getNodes: (state, action) => {
            initialState.nodes = action.payload.nodes
        }
    }
})


export default entitySlice.reducer;