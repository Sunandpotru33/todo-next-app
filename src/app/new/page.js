"use client";
import { useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const TaskFormPage = ({ params }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { createTask, updateTask, tasks } = useTasks();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (!params.id) {
      createTask(data.title, data.description);
      toast.success("Task created successfully");
    } else {
      updateTask(params.id, data);
      toast.success("Task updated successfully");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 px-4">
      <form
        onSubmit={onSubmit}
        className="bg-gray-800 max-w-lg w-full rounded-2xl shadow-2xl p-10 space-y-6"
        noValidate
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          {params.id ? "Edit Task" : "New Task"}
        </h1>

        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-semibold text-gray-300"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter task title"
            {...register("title", { required: true })}
            className={`w-full rounded-md bg-gray-700 px-4 py-3 text-white placeholder-gray-400 transition
              focus:outline-none focus:ring-2 focus:ring-[#408696]
              ${errors.title ? "border border-red-500" : "border border-transparent"}`}
            autoFocus
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500 font-medium">
              Title is required.
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-semibold text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            placeholder="Enter task description"
            {...register("description", { required: true })}
            className={`w-full rounded-md bg-gray-700 px-4 py-3 text-white placeholder-gray-400 resize-none transition
              focus:outline-none focus:ring-2 focus:ring-[#408696]
              ${errors.description ? "border border-red-500" : "border border-transparent"}`}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500 font-medium">
              Description is required.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#408697] hover:bg-[#80b6c4] active:bg-[#408696] text-white font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={false}
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default TaskFormPage;
