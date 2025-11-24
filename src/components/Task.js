import { useState } from "react"; // Hook React pour manipuler l'état local (ici l'édition d'une tâche)
import { useDispatch } from "react-redux";  // Hook Redux pour envoyer des actions
import { toggleTask, editTask } from "../redux/tasksSlice";  // Actions du slice : changer l'état "fait" et modifier la description

const Task = ({ task }) => {
    // Permet d'envoyer les actions vers Redux
    const dispatch = useDispatch();
    // Valeur du champ de saisie lorsqu'on modifie la description
    const [newDesc, setNewDesc] = useState(task.description);
    // Booléen indiquant si l'utilisateur est en train d'éditer
    const [editing, setEditing] = useState(false);

    const saveEdit = () => {
        // Sauvegarde la description modifiée puis quitte le mode édition
        dispatch(editTask({ id: task.id, description: newDesc }));
        setEditing(false);
    };

    return (
        // Conteneur d'une tâche avec sa case à cocher, sa description et ses boutons
        <div>
            {/* Case à cocher : bascule l'état isDone dans Redux */}
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(toggleTask(task.id))}
            />

            {editing ? (
                // Mode édition : input contrôlé relié à newDesc
                <input
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                />
            ) : (
                // Mode affichage : on barre le texte si la tâche est terminée
                <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
                    {task.description}
                </span>
            )}

            {editing ? (
                // Bouton pour valider la modification
                <button onClick={saveEdit}>Enregistrer</button>
            ) : (
                // Bouton pour entrer dans le mode édition
                <button onClick={() => setEditing(true)}>Modifier</button>
            )}
        </div>
    );
};

export default Task;
