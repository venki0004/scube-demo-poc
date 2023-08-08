import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../../../Common/CustomButton";
import { SelectInput } from "../../../Common/Input/Select";

import filterIcon from "../../../../assets/icons/ListingIcons/filterIcon.svg";
import add_user from "../../../../assets/icons/ListingIcons/add_user.svg";
import refresh from "../../../../assets/icons/ListingIcons/refresh.svg";
import disabledRefresh from "../../../../assets/icons/ListingIcons/disabledRefresh.svg";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";
import { Input } from "../../../Common/Input/Input";
import { Pagination } from "../../../Common/Pagination/Pagination";
import CardsTable from "./Table";
import { CountItems, showToastMessage } from "../../../../utils/helpers";
import { DateRangePicker } from "../../../Common/Input/DateRangePicker";
import moment from "moment";
import axiosInstance from "../../../../utils/axios";
import { fetchEmployees } from "../../../../features/employeeSlice";
import ConfirmDelete from "./DeleteConfirmation";
import FourChoiceModal from "../Modal/FourChoiceModal";

const initialStates = {
    search_key: "",
    status: "",
    start_date: "",
    end_date: "",
    designation: "",
};

const UserListing = () => {
    const cols = [
        {
            title: "Employee ID",
        },
        {
            title: "Image",
        },
        {
            title: "First Name",
        },
        {
            title: "Last Name",
        },
        {
            title: "Phone Number",
        },
        {
            title: "Email ID",
        },

        {
            title: "Designation",
        },

        {
            title: "Group",
        },
        {
            title: "Enable/ Disable",
        },
        {
            title: "Action",
        },
    ];
    const dispatch = useDispatch<any>();

    const navigate = useNavigate();

    const [filterOpen, setFilterOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [isModifiedFilter, setIsModifiedFilter] = useState(false);


    const [filtersCount, setFiltersCount] = useState(0);
    const [startDate, setStartDate] = useState();
    const [filterList, setFilterList] = useState({} as any);
    const [endDate, setEndDate] = useState();
    const { list, isLoading, metadata } = useSelector(
        (state: any) => state.employee
    );

    // DateRange picker
    const handleDateRangeFilter = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        const sDate = moment(start).format("YYYY-MM-DD");
        const eDate = moment(end).format("YYYY-MM-DD");
        setParams({ ...params, start_date: sDate, end_date: eDate });
        setIsModifiedFilter(true)
    };

    const [currentPage, setCurrentPage] = useState(1);

    const [params, setParams] = useState(initialStates);

    const statusData = [
        {
            id: "false",
            name: "InActive",
        },
        {
            id: "true",
            name: "Active",
        },
    ];

    const resetFilter = () => {
        setCurrentPage(1);
        setParams({ ...params, ...initialStates });
        setFiltersCount(0);
        dispatch(fetchEmployees(initialStates, 1));
        setStartDate("" as any);
        setEndDate("" as any);
        setIsModifiedFilter(false)
    };

    const ToggleFilter = () => {
        filterOpen ? setFilterOpen(false) : setFilterOpen(true);
    };

    const ApplyFilter = () => {
        setCurrentPage(1);
        dispatch(fetchEmployees(params, 1));
        let p = JSON.parse(JSON.stringify(params));
        delete p.start_date
        const filtercount = CountItems(p);
        setFiltersCount(filtercount);
    };

    const onFilterChange = (event: any) => {
        setParams({ ...params, [event.target.name]: event.target.value });
        setIsModifiedFilter(true)
    };

    useEffect(() => {
        fetchPrerequest();
    }, []);

    useMemo(() => {
        dispatch(fetchEmployees(params, currentPage));
    }, [currentPage]);

    const fetchPrerequest = () => {
        axiosInstance
            .get(`/admin/employees/prequestie`)
            .then((response) => {
                const data = response.data.data;
                console.log(data)
                setFilterList({
                    designations: data.designations.map(
                        (x: any) => x.designation
                    ),
                });
            })
            .catch((error) => {
                const { errors, message } = error.response.data;
                const errorMsg = errors[Object.keys(errors)[0]] || message;
                showToastMessage(errorMsg, "error");
            });
    };

    const handleToggleChange = (event: any, user: any) => {
        event.preventDefault();
        axiosInstance
            .patch(`/admin/employees/update-status/${user.id}`, {
                status: !user.is_active,
            })
            .then((response) => {
                showToastMessage(response.data.data.message, "success");
                dispatch(fetchEmployees(params, currentPage));
            })
            .catch((error) => {
                const { errors, message } = error.response.data;
                const errorMsg = errors[Object.keys(errors)[0]] || message;
                showToastMessage(errorMsg, "error");
            });
    };

    const onRowDeleteClick = (item: any) => {
        setSelectedEmployee(item.id);
        setOpenDelete(true)
    }

    const onDeleteConfirm = (item: any) => {
        axiosInstance
            .delete(`/admin/employees/${selectedEmployee}`, {})
            .then((response) => {
                showToastMessage("EMPLOYEE DELETED SUCCESSFULLY", "success");
                dispatch(fetchEmployees(params, currentPage));
                setSelectedEmployee('');
                setOpenDelete(false)
            })
            .catch((error) => {
                const { errors, message } = error.response.data;
                const errorMsg = errors[Object.keys(errors)[0]] || message;
                showToastMessage(errorMsg, "error");
                setSelectedEmployee('');
                setOpenDelete(false)
            });
    }
    const onDeleteCancel = (item: any) => {
        setSelectedEmployee('');
        setOpenDelete(false)
    }


    const [f4Modal, setF4Modal] = useState(false)

    const f4ModalOpen = () => {
        setF4Modal(true)
    }
    const f4ModalClose = () => {
        setF4Modal(false)
    }



    return (
        <div className=" mb-44 sm:mb-0">
            <div className="flex flex-col justify-between  sm:flex-row">
                <div>
                    <p className="text-SpaceCadet font-nunitoBold">
                        List of Employees
                    </p>
                    <hr className="w-32 md:w-full line" />
                    <p className="mt-1 text-xs font-normal font-nunitoRegular text-SpaceCadet">
                        {metadata?.totalUsers}  {metadata?.totalUsers > 1 ? 'Employees' : 'Employee'}
                    </p>
                </div>
                <br />

                <div className="relative flex justify-between gap-6 sm:justify-end">

                    <CustomButton
                        disabled={false}
                        borderRadius="0.5rem"
                        onClick={() => {
                            // four choice modal
                            navigate('/admin/employees/create')
                        }}
                        variant="contained"
                        size="large"
                        icon={<img src={add_user} alt="addImageIcon" />}
                    >
                        <p className="text-sm font-bold text-darkbg font-nunitoRegular">
                            Add Employee
                        </p>
                    </CustomButton>
                </div>
            </div>

            {!isLoading && list.length ? (
                <p className="mt-2 text-Kimberly text-xs font-nunitoRegular font-normal">
                    Showing{" "}
                    <span className="text-SpaceCadet pr-1">
                        {currentPage != 1 ? (currentPage - 1) * 10 + 1 : 1}
                    </span>{" "}
                    to
                    <span className="text-SpaceCadet px-1">
                        {list.length +
                            (currentPage != 1 ? (currentPage - 1) * 10 : 0)}
                    </span>
                    out of{" "}
                    <span className="text-SpaceCadet">{metadata?.total}</span>{" "}
                    results
                </p>
            ) : null}

            {isLoading ? (
                <div className="w-full h-96 flex justify-center items-center">
                    <CircularProgress />
                    <span className="text-3xl">Loading...</span>
                </div>
            ) : list.length ? (
                <div>
                    <div className="w-full   rounded-lg mt-[16px]">
                        <CardsTable
                            cols={cols}
                            data={list}
                            handleToggleChange={handleToggleChange}
                            onRowDeleteClick={onRowDeleteClick}
                        />
                    </div>

                    <div className="flex justify-center w-full gap-10 p-4">
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={metadata?.total}
                            pageSize={10}
                            onPageChange={(page: any) => {
                                setCurrentPage(page);
                            }}
                        />
                    </div>
                    {/* 1. Warning Popup */}
                    <ConfirmDelete
                        handleConfirm={onDeleteConfirm}
                        handleDialogClose={onDeleteCancel}
                        open={openDelete}
                        title={`Are you sure of deleting this employee record?`}
                        isLoading={false}
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 mt-6">
                    {/* <img src={NotFound} alt="Not Found" /> */}
                    <p className="text-[18px] font-nunitoBold">
                        No Results found !!
                    </p>
                </div>
            )}

        </div>
    );
};

export default UserListing;
