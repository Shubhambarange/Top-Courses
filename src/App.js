import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Card from "./Components/Card";
import Cards from "./Components/Cards";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true)
  const [catagory, setCatagory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went Wrong");
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div >
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData}
            catagory={catagory}
            setCatagory={setCatagory} />

        </div>


        <div className="w-11/12 flex flex-wrap max-w-[1200px mx-auto justify-center items-center min-h-[50vh]">

          {
            loading ? (<Spinner />) : (<Cards courses={courses} catagory={catagory} />)
          }
        </div>
      </div>

    </div>
  );
};

export default App;
