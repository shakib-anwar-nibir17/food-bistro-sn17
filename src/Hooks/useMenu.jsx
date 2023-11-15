import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/menu").then((response) => {
      const menuItem = response.data;
      setMenu(menuItem);
    });
    setLoading(false);
  }, []);
  return [menu, loading];
};

export default useMenu;
