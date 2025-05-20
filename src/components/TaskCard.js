import { useTasks } from "../context/TasksContext";
import { useRouter } from "next/navigation";
import { VscTrash, VscEdit } from "react-icons/vsc";
import { toast } from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  const router = useRouter();

  const handleDelete = async (e) => {
    e.stopPropagation();
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await deleteTask(task.id); 
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Delete task error:", error);
      toast.error("Failed to delete task. Please try again.");
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    try {
      router.push(`/edit/${task.id}`);
    } catch (error) {
      console.error("Navigation error:", error);
      toast.error("Failed to navigate to edit page.");
    }
  };

  return (
    <div
      className="bg-gray-800 hover:bg-gray-700 transition duration-300 cursor-pointer p-6 sm:p-8 md:p-10 m-2 sm:m-4 rounded-2xl shadow-xl w-full max-w-7xl"
      onClick={() => {
        try {
          router.push(`/edit/${task.id}`);
        } catch (error) {
          console.error("Navigation error:", error);
          toast.error("Failed to navigate to edit page.");
        }
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white break-words">
          {task.title}
        </h1>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="text-white hover:bg-[#80b6c4] p-2 rounded transition"
            onClick={handleEdit}
            title="Edit Task"
          >
            <VscEdit className="text-xl sm:text-2xl" />
          </button>
          <button
            className="text-white hover:bg-[#80b6c4] p-2 rounded transition"
            onClick={handleDelete}
            title="Delete Task"
          >
            <VscTrash className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 break-words">
        {task.description}
      </p>
    </div>
  );
};
