import { useDispatch, useSelector } from "react-redux"; // Hooks Redux pour lire le state global (useSelector) et envoyer des actions (useDispatch)
import { setFilter } from "../redux/tasksSlice"; // Action qui contrôle le filtre actif (toutes / faites / non faites)
import Task from "./Task"; // Composant qui se charge d'afficher une tâche individuellement

const ListTask = () => {
    // dispatch pour envoyer les actions de filtre
    const dispatch = useDispatch();
    // On extrait la liste entière et le filtre courant depuis le slice "tasks"
    const { list, filter } = useSelector((state) => state.tasks);

    // On calcule la liste affichée selon le filtre
    const filteredList =
        filter === "done"
            ? list.filter((t) => t.isDone)
            : filter === "notDone"
                ? list.filter((t) => !t.isDone)
                : list;

    return (
        // Section affichant la liste + le sélecteur de filtre
        <div>
            <h3>Liste des tâches</h3>

            {/* Le select change le filtre stocké dans Redux */}
            <select onChange={(e) => dispatch(setFilter(e.target.value))}>
                <option value="all">Toutes</option>
                <option value="done">Faites</option>
                <option value="notDone">Non faites</option>
            </select>

            {/* On parcourt la liste filtrée pour rendre un composant Task par élément */}
            {filteredList.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
