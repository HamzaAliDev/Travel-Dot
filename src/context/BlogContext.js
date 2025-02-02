import React, { createContext, useContext, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase';

const Blog = createContext();
export default function BlogContext({ children }) {
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        try {
          const querySnapshot = await getDocs(collection(firestore, "blogs"));
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data() });
          });
          setBlogs(items);
        } catch (error) {
          console.error("Error fetching Blogs ", error);
          window.toastify("Error fetching Blogs ", error);
        }
      };

      useEffect(() => {
        fetchBlogs();
      }, []);

  return (
    <Blog.Provider value={{ blogs }}>
        {children}
    </Blog.Provider>
  )
}

export const useBlogContext = () => useContext(Blog);