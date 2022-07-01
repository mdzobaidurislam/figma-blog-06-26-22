import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import AllTodo from "./AllTodo";

const ToDo = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleAddToDo = async (inputdata) => {
    const AddData = {
      email: user?.email,
      name: inputdata.name,
    };
    const { data } = await axios.post(
      `https://figma-blog-06-26-22-server.herokuapp.com/api/todo/`,
      AddData
    );
    if (data.success) {
      toast.success(data.msg);
    }
    reset();
  };
  return (
    <div className="todo_section">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 mt-5">
            <h1>Add your todo</h1>
            <form action="" onSubmit={handleSubmit(handleAddToDo)}>
              <div className="div">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="form-control"
                  placeholder="Enter anything"
                />
                <p className="text-red-800 fw-bold mb-3 font-bold">
                  {errors.name?.type === "required" && "This is required"}
                </p>
              </div>
              <div className="add_todo">
                <button type="submit" className="btn btn-primary">
                  Add to do
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-12">
            <AllTodo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
