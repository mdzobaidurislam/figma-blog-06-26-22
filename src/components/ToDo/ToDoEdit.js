import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import useGlobalContexts from "../../Context/GlobalContext";

const ToDoEdit = () => {
  const [user] = useAuthState(auth);
  const { todoId, setmodalshowToDoEdit } = useGlobalContexts();
  const [name, setName] = useState("");
  const [exitname, setExitName] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    const getAllServices = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/todoid/${todoId}`
      );
      if (data) {
        setName(data.name);
        setExitName(data.name);
      }
    };
    getAllServices();
  }, [todoId]);
  const handleUpdateToDo = async (inputdata) => {
    const AddData = {
      name: inputdata.uname,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `http://localhost:8080/api/todoid/${todoId}/${user?.email}`,
      AddData,
      config
    );
    if (data.success) {
      setmodalshowToDoEdit(false);
      toast.success(data.msg);
    }
    reset();
  };
  return (
    <div className="todo_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 pb-5 pt-5">
            <h5>
              Update your todo : <span className="text-danger">{exitname}</span>
            </h5>
            <form action="" onSubmit={handleSubmit(handleUpdateToDo)}>
              <div className="div">
                <input
                  {...register("uname", { required: true })}
                  type="text"
                  value={name}
                  name="uname"
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Enter anything"
                />
                <p className="text-red-800 fw-bold mb-3 font-bold">
                  {errors.uname?.type === "required" && "This is required"}
                </p>
              </div>
              <div className="add_todo">
                <button type="submit" className="btn btn-danger">
                  Update todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoEdit;
