import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

import Select from 'react-select';
import { addCategory, deleteCategory, fetchSingleCategoryById, UpdateCategory, viewAllCategory } from '../../Utils/AllApiCals';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const initialState = {

    DrawNo: "",
    preDigit: "",
    series: "",
    firstPrize: ""


}

function Category() {
    const [fromdata, setfromdata] = useState(initialState)
    const [isEdit, setisEdit] = useState(false)
    const [editableId, setEditableId] = useState(null)
    const [categorydata, setCategoryData] = useState([])
    const [isModal, setisModal] = useState(false)
    const [isLoading, setisLoading] = useState(true);
    const [totalrowCount, setTotalRow] = useState(true);
    const navigate = useNavigate()




    //table row and collumn
    const columns = [
        {
            name: 'Id',
            selector: row => row.sl,
        },

        {
            name: 'Game_date',
            selector: row => row.game_date,
        },
        {
            name: 'Game_name',
            selector: row => row.game_name,
        },
        {
            name: 'Result_value',
            selector: row => row.result_value,
        },
        {
            name: 'Type',
            selector: row => row.type,
        },

        {
            name: 'Action',
            selector: row => {
                return (
                    <div className='w-[300px]'>
                        <button onClick={() => {
                            handleEdit(row.sl)
                        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <button onClick={() => {

                            handleDelete(row.sl)
                        }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Delete
                        </button>
                    </div>)

            }
        },
    ];



    const handleChange = (e) => {
        const { name, value } = e.target;
        setfromdata({ ...fromdata, [name]: value });
    }

    //ValidationFunction

    const handleValidation = () => {
        if (!fromdata.DrawNo) {
            toast.error("Enter Category Name")
            return false
        }
        if (!fromdata.preDigit) {
            toast.error("Enter type")
            return false
        }
        if (!fromdata.status) {
            toast.error("Enter status")
            return false
        }

        return true
    }

    const handleSubmit = async () => {
        // if (!handleValidation())
        //     return;


        const paramsobj = {
            gameTime: 'Morning',
            drawno: 55,
            firstPrize: 7841,
            predigit: 41,
            seriesNo: 'A'
        }

        let res = await addCategory(paramsobj)
        if (res) {
            console.log(res, "lll")
            toast.success("Category Added sucsessfully")
            setfromdata(initialState);
            setisModal(false)
            fetchAllCategory(1)
        }

    }


    const handleEdit = async (id) => {
        setEditableId(id)
        let res = await fetchSingleCategoryById(id)
        if (res && res.success) {
            console.log(res)
            const obj1 = {
                categoryName: res.data?.name,
                type: res.data?.description,
                position: res.data?.order,
                status: res.data?.isActive == 1 ? "true" : "false",
            };
            setfromdata(obj1)
            setisModal(true)
            setisEdit(true)
        }
    }

    const handleUpdate = async () => {
        if (!handleValidation())
            return;
        const editObj = {
            name: fromdata.DrawNo,
            description: fromdata.preDigit,
            order: fromdata.series,
            isActive: fromdata.status === "true" ? 1 : 0,
        };
        console.log(fromdata, "update888")
        alert("no")
        const res = await UpdateCategory(editableId, editObj)
        console.log(res, "6678")
        if (res && res.success) {

            toast.success(res.message)
            fetchAllCategory(1)
            setisModal(false)
        }
    }

    const handleDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                (async () => {
                    let res = await deleteCategory(id)
                    if (res && res.success) {
                        fetchAllCategory(1)
                        toast.success(res.message)
                    }
                })();
            } else {
            }
        });




    }


    //fetching Category  

    const fetchAllCategory = async (page) => {
        let dataToSend = {
            // input_date: '2024-08-13',
            game_time: 'Morning'
        }


        setisLoading(true)
        const res = await viewAllCategory(dataToSend)

        console.log(typeof (res), "uuu")

        // setTotalRow(res.total)



        if (res) {
            // console.log(JSON.stringify(res.data), "iiiiiiiiii")
            let rdata = res.data
            let newArr = []
            for (let ele in rdata) {

                let obj = {
                    sl: ele,
                    game_date: rdata[ele]?.game_date,
                    game_name: rdata[ele]?.game_name,
                    result_value: rdata[ele]?.result_value,
                    type: rdata[ele]?.type,
                    id: rdata[ele]?.id

                }
                newArr.push(obj)


            }

            console.log(newArr, "466666")
            setCategoryData(newArr)
            setisLoading(false)

        }



    }

    useEffect(() => {
        fetchAllCategory(1)
    }, [])




    return (
        <section>



            <div className='border-b-4 border-solid border-indigo-500 '>

                <div>
                    <button type="submit" onClick={() => {
                        setisModal(true)


                    }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative float-right">Add new Category</button></div>

                <DataTable
                    columns={columns}
                    data={categorydata}
                    pagination

                    progressPending={isLoading}

                    paginationServer
                    paginationTotalRows={totalrowCount}
                    onChangePage={fetchAllCategory}
                    noRowsPerPage={true}


                />
            </div>

            {/*Model from*/}
            {
                isModal &&
                <div className='modelcss'>
                    <span>Set Golden Result Morning</span>
                    <span onClick={() => { setisModal(false) }} className='float-right cursor-pointer text-red-400'>Close</span>
                    <form class="max-w-[54rem]  mx-auto m-t-[4rem] ">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Game Name</label>
                            <input type="email" id="email" disabled="true" name='categoryName' value={"Morning"} placeholder='Morning' class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>

                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Draw No</label>
                            <input type="number" id="email" onChange={handleChange} name='DrawNo' value={fromdata.DrawNo} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pre Digit(30 to 45)</label>
                            <input type="number" id="password" onChange={(e) => {

                                handleChange(e);

                            }} name='type' value={fromdata.preDigit} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="mb-5">
                            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SERIES(A,B,C,D,E,G,H,J,K,L)</label>
                            <input type="text" id="repeat-password" onChange={handleChange} name="series" value={fromdata.series} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="mb-5">
                            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Prize</label>
                            <input type="number" id="firstPrize" onChange={handleChange} name="firstPrize" value={fromdata.firstPrize} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>





                        <button type="submit" onClick={(e) => {
                            e.preventDefault();
                            if (isEdit)
                                handleUpdate()
                            else
                                handleSubmit()

                        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative float-right">{isEdit ? "Edit" : "Add"}</button>
                    </form>
                </div>
            }

        </section>




    )
}

export default Category