import axios from "axios";

const url = "http://localhost:3000/posts";
export const getBlogs = async ()=> {
  try {
    // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const response = await axios.get(`${url}?_sort=id&_order=desc`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getBlogDetail = async (id)=> {
  try {
    // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return false;
  }
}

export const deleteBlog = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return "Deleted";
  } catch (error) {
    throw error;
  }
}

export const addBlog = async (data) => {
  try {
    await axios.post(`${url}`, data);
    return "Posted";
  } catch (error) {
    throw error;
  }
}

export const updateBlog = async (data) => {
  try {
    await axios.put(`${url}/${data.id}`, data);
    return "Update";
  } catch (error) {
    throw error;
  }
}