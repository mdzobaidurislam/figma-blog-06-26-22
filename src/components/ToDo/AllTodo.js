import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import "./ToDo.css";
import edittodo from "./../images/blog/locationedit.png";
import useGlobalContexts from "../../Context/GlobalContext";
import TodoEditModal from "../Modal/TodoEditModal";

const AllTodo = () => {
  const { modalShowToDoEdit, setmodalshowToDoEdit, setTodoId } =
    useGlobalContexts();

  const [todos, setTodos] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    const getAllServices = async () => {
      const { data } = await axios.get(
        `https://figma-blog-06-26-22-server.herokuapp.com/api/todo/${email}`
      );
      if (data) {
        setTodos(data);
      }
    };
    getAllServices();
  }, [todos, email]);

  const handleToDoComplete = async (id) => {
    console.log(id);
    try {
      const { data } = await axios.put(
        `https://figma-blog-06-26-22-server.herokuapp.com/api/todo/${id}`
      );
      if (data.success) {
        toast.success(data.msg);
      } else {
        toast.success(data.msg);
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        toast(error.response.data.msg);
      }
    }
  };

  return (
    <div className="toto_section mb-5">
      {todos.map((item) => (
        <div
          class="d-flex align-items-center justify-content-between custom_check_area"
          key={item._id}
        >
          <div className="d-flex align-items-center">
            <input
              onChange={() => handleToDoComplete(item._id)}
              class="form-check-input custom_check_box"
              type="checkbox"
              checked={item.status === true}
              value=""
              id={item._id}
            />
            <label class="form-check-label" for={item._id}>
              {item.name}
            </label>
          </div>
          <div
            className="cur_pointer"
            onClick={() => {
              setmodalshowToDoEdit(true);
              setTodoId(item._id);
            }}
          >
            <img src={edittodo} alt="" />
          </div>
        </div>
      ))}
      <TodoEditModal
        show={modalShowToDoEdit}
        onHide={() => setmodalshowToDoEdit(false)}
      />
    </div>
  );
};

export default AllTodo;
