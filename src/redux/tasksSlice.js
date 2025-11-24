import { createSlice } from "@reduxjs/toolkit"; // createSlice simplifie la création d'un reducer + actions associés

// Slice "tasks" : contient la liste ainsi que l'état du filtre
const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        list: [], // toutes les tâches créées
        filter: "all", // all | done | notDone
    },
    reducers: {
        addTask: (state, action) => {
            // Ajoute simplement la nouvelle tâche reçue dans le payload
            state.list.push(action.payload);
        },
        toggleTask: (state, action) => {
            // Recherche la tâche par id puis inverse son booléen isDone
            const task = state.list.find(t => t.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            // Met à jour la description si la tâche est trouvée
            const task = state.list.find(t => t.id === id);
            if (task) task.description = description;
        },
        setFilter: (state, action) => {
            // Sauvegarde le filtre actuel (toutes / faites / non faites)
            state.filter = action.payload;
        }
    }
});

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;  // Export des actions générées automatiquement par createSlice
export default tasksSlice.reducer;  // Export du reducer pour l'enregistrer dans le store Redux
