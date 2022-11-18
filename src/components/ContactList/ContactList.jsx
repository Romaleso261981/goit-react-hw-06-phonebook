
// Імпортуємо хук
import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "../../redux/constans";

console.log(statusFilters);
const getVisibleTasks = (contacts, statusFilters) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(statusFilters.toLowerCase())
  );
 
};
export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(state => state.tasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(state => state.filters.status);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

// import {
//   ContactItem,
//   List,
//   SpanName,
//   SpanNumber,
//   ContactBtn,
// } from './ContactList.styled';