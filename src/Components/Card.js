import { FaHeart } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


function Card(props) {
    let course = props.course
    let likedCourses = props.likedCourses
    let setLikedCourses = props.setLikedCourses


    function clickHandler() {
        // Filtering logic
        if (likedCourses.includes(course.id)) {
            // if ager phele se like hua pada hai
            setLikedCourses((prev) => prev.filter((cid) => (cid != course.id)))
            toast.warning('Item removed')
        }
        else {
            // else ager phele se like nhi  hua  hai
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
                toast.success("Item Liked")
            }
            else {
                // non - empty phele se
                setLikedCourses((prev) => [...prev, course.id])
                toast.success("Item Liked")
            }
        }

    }
    return (
        <div className=" w-[300px] bg-bgDark bg-opacity-[80%] rounded-md overflow-hidden">
            <div className="relative ">
                <img src={course.image.url} />
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px]
                grid place-items-center" >
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize='1.95rem' /> : <FcLikePlaceholder fontSize='1.95rem' />
                        }

                    </button>
                </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..."
                            : (course.description)
                    }</p>

            </div>

        </div>


    )
}

export default Card