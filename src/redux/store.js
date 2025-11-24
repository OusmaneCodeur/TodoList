import { configureStore } from "@reduxjs/toolkit"; // configureStore crée le store Redux avec de bonnes pratiques par défaut
import tasksReducer from "./tasksSlice";// Reducer du slice "tasks" gérant notre liste de tâches

export default configureStore({
    reducer: {
        // On enregistre le slice sous la clé "tasks" dans le state global
        tasks: tasksReducer,
    },
});
