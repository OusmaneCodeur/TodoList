import { useState } from "react";  // Hooks React pour gérer l'état local (description de la tâche)
import { useDispatch } from "react-redux"; // Hook Redux pour envoyer des actions au store global
import { addTask } from "../redux/tasksSlice";  // Action créatrice qui ajoute une tâche dans le slice Redux


const AddTask = () => {
    // description = contenu du champ texte, setDescription = fonction pour le mettre à jour
    const [description, setDescription] = useState("");
    // dispatch permet d'envoyer une action vers Redux
    const dispatch = useDispatch();

    const handleAdd = () => {
        // On empêche l'ajout de tâches vides en vérifiant le champ
        if (description.trim() === "") return;

        dispatch(
            addTask({
                // Date.now() génère un identifiant unique basé sur le temps
                id: Date.now(),
                description,
                isDone: false,
            })
        );
        // Réinitialise le champ texte pour préparer la prochaine saisie
        setDescription("");
    };

    return (
        // Champ texte contrôlé + bouton d'ajout
        <div className="add-task">
            <input
                className="task-input"
                type="text"
                placeholder="Nouvelle tâche"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn primary" onClick={handleAdd}>Ajouter</button>
        </div>
    );
};

export default AddTask;
