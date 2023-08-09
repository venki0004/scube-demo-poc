import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Validator from "validatorjs";

import HeadingTab from "../../../Common/HeadingTab/HeadingTab";
import { Input } from "../../../Common/Input/Input";
import CustomButton from "../../../Common/CustomButton";
import Popup from "../../../Common/Popup";
import { showToastMessage } from "../../../../utils/helpers";
import axiosInstance from "../../../../utils/axios";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import { SelectWithName } from "../../../Common/Input/SelectWithName";

const fields = {
    id: "",
    f_name: "",
    l_name: "",
    email: "",
    card_type: "",
    card_status: "",
    card_no: "",
    badge_type: "",
    access_level: "",
    company: "",
    emp_id: "",
};
interface Props {
    handleBack?: any;
    handleNext?: any;
    edit?: boolean;
    id?: any;
    isview: any;
}

const Form: React.FC<Props> = ({ edit, id, isview }) => {
    const navigate = useNavigate();

    // form states
    const [params, setParams] = useState(fields as any);
    const [errors, setErrors] = useState(fields as any);

    const [isLoading, setIsLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    // popup states
    const [open, setOpen] = useState({
        success: false,
        warning: false,
        question: false,
    });

    const [cancel, setCancel] = useState(false);

    const onCancel = () => {
        handlePopup("warning", true);
        setCancel(true);
    };

    // form Handling Functions
    const handleChange = (e: any) => {
        if (e.target) {
            const { name, value } = e.target
            if (name === 'email' && e.keyCode === 49) {
                return
            }
            updateParams([{ name, value: typeof value === 'number' ? value : value.trim() }])
        } else {
            updateParams([{ name: e?.name, value: e?.url }])
        }

        setErrors({})
    }

    const validate = (parameters: any, rule: any) => {
        const validator = new Validator(parameters, rule);

        if (validator.fails()) {
            const fieldErrors: any = {};

            /* eslint-disable */
            for (const key in validator.errors.errors) {
                fieldErrors[key] = validator.errors.errors[key][0];
            }
            /* eslint-enable */

            setErrors(fieldErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleSubmit = () => {
        if (!validate(params, {
            f_name: 'required|max:50|string',
            l_name: 'required|max:150|string',
            email: 'required|email|max:225',
            card_type: 'required',
            card_status: 'required',
            card_no: 'required',
            company: 'required',
            badge_type: 'required',
            access_level: 'required',
            emp_id: 'required'

        })) {
            const err = Object.keys(errors);
            if (err?.length) {
                const input: any = document.querySelector(
                    `input[name=${err[0]}]`
                );
                if (input) {
                    input.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                        inline: "start",
                    });
                }
            }
            showToastMessage("Please check form errors!", "error");
            return;
        }

        if (!params.email.endsWith('@scube.me')) {
            setErrors({ ...errors, email: 'Invalid Email Domain!' })
            return
        }

        setDisableButton(true);
        setIsLoading(true);

        const formdata = new FormData()

        for (let key in params) {

            formdata.append(key, params[key])
        }


        if (id) {
            axiosInstance
                .put(`/admin/employees/${id}`, formdata)
                .then((response) => {
                    showToastMessage(response.data.data.message, "success");
                    navigate("/admin/employees");
                    setDisableButton(false);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setDisableButton(false);
                    setIsLoading(false);
                    const { errors, message } = err.response.data;
                    const errorMsg = errors[Object.keys(errors)[0]] || message;
                    showToastMessage(errorMsg, "error");
                });
        }

        else {



            axiosInstance
                .post("/admin/employees", formdata)
                .then((response) => {
                    showToastMessage(response.data.data.message, "success");
                    navigate("/admin/employees");
                    setDisableButton(false);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setDisableButton(false);
                    setIsLoading(false);
                    const { errors, message } = err.response.data;
                    const errorMsg = errors[Object.keys(errors)[0]] || message;
                    showToastMessage(errorMsg, "error");
                });
        }
    };

    // Popup Handling Functions
    const handlePopup = (key: any, value: any) => {
        setOpen({ ...open, [key]: value });
    };

    const handleYes = async () => {
        cancel ? navigate("/admin/employees") : handleSubmit();
    };

    const handleNo = () => {
        setDisableButton(false);
    };

    const handleOkay = () => {
        navigate("/admin/employees");
    };

    const onDateChange = (event: any, name: any) => {
        setParams({ ...params, [name]: moment(event).format('YYYY-MM-DD') })
        setErrors({} as any)
    }

    const fetchEmployeeById = useCallback(async () => {
        setIsLoading(true);
        axiosInstance
            .get(`admin/employees/${id}`)
            .then((response) => {
                const data = response.data.data;
                setIsLoading(false);
                console.log(data, 'employee by id data')
                setParams({
                    // id: data.id,
                    f_name: data.F_NAME,
                    l_name: data.L_NAME,
                    email: data.EMAIL,
                    card_type: data.CARD_TYPE,
                    card_status: data.CARD_STATUS,
                    card_no: data.CARD_NO,
                    badge_type:  data.BADGE_TYPE,
                    access_level:   data.ACCESS_LEVEL,
                    company: data.COMPANY,
                    emp_id: data.EMP_ID,
                })
            })
            .catch((error) => {
                setIsLoading(false);
                const { errors, message } = error.response.data;
                const errorMsg = errors[Object.keys(errors)[0]] || message;
                showToastMessage(errorMsg, "error");
            });
    }, [id]);

    useEffect(() => {
        id && fetchEmployeeById();
    }, [id]);

    const updateParams = (records: any) => {
        const newParams = JSON.parse(JSON.stringify(params))
        Object.keys(records).forEach((key) => (newParams[records[key].name] = records[key].value))
        setParams(newParams)
    }


    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center w-full h-80">
                    <CircularProgress />
                    <span className="text-3xl">Loading...</span>
                </div>
            ) : (
                <>
                    {" "}

                    <div className={`bg-white default_container ${isview ? 'pointer-events-none' : ''}`} >
                        <div>
                            <HeadingTab title="Employee Details" />

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
                                <Input
                                    rows={1}
                                    width="w-full"
                                    disabled={false}
                                    readOnly={false}
                                    handleChange={handleChange}
                                    value={params?.f_name}
                                    error={!!errors?.f_name}
                                    helperText={errors?.f_name}
                                    label="First Name"
                                    name="f_name"
                                />
                                <Input
                                    rows={1}
                                    width="w-full"
                                    disabled={false}
                                    readOnly={false}
                                    handleChange={handleChange}
                                    value={params?.l_name}
                                    error={!!errors?.l_name}
                                    helperText={errors?.l_name}
                                    label="Last Name"
                                    name="l_name"
                                />
                                <Input
                                    rows={1}
                                    width="w-full"
                                    disabled={id ? true : false}
                                    readOnly={false}
                                    handleChange={handleChange}
                                    value={params?.email}
                                    error={!!errors?.email}
                                    helperText={errors?.email}
                                    label="Email ID"
                                    name="email"
                                />

                                <Input
                                    rows={1}
                                    width="w-full"
                                    disabled={id ? true : false}
                                    readOnly={false}
                                    handleChange={handleChange}
                                    value={params?.emp_id}
                                    error={!!errors?.emp_id}
                                    helperText={errors?.emp_id}
                                    label="Employee Id"
                                    name="emp_id"
                                />
 <SelectWithName
                                    width="100%"
                                    options={[
                                        {
                                            id: 'SCUBE',
                                            name: "SCUBE",
                                        },
                                        {
                                            id: "HONEYWELL",
                                            name: "HONEYWELL",
                                        }
                                    ]}
                                    value={params?.company}
                                    error={errors?.company}
                                    helperText={errors?.company}
                                    handleChange={handleChange}
                                    label="Company"
                                    name="company"
                                />
                                <Input
                                    rows={1}
                                    width="w-full"
                                    disabled={false}
                                    readOnly={false}
                                    handleChange={handleChange}
                                    label="Card No"
                                    value={params?.card_no}
                                    error={!!errors?.card_no}
                                    helperText={errors?.card_no}
                                    name="card_no"
                                />
                                <SelectWithName
                                    width="100%"
                                    options={[
                                        {
                                            id: 'Contractor',
                                            name: "Contractor",
                                        },
                                        {
                                            id: "EMPLOYEE",
                                            name: "EMPLOYEE",
                                        }
                                    ]}
                                    value={params?.card_type}
                                    error={errors?.card_type}
                                    helperText={errors?.card_type}
                                    handleChange={handleChange}
                                    label="Card Type"
                                    name="card_type"
                                />
                                <SelectWithName
                                    width="100%"
                                    options={[
                                        {
                                            id: 'Active',
                                            name: "Active",
                                        },
                                        {
                                            id: "Disabled",
                                            name: "Disabled",
                                        }
                                    ]}
                                    value={params?.card_status}
                                    error={errors?.card_status}
                                    helperText={errors?.card_status}
                                    handleChange={handleChange}
                                    label="Card Status"
                                    name="card_status"
                                />
                                <SelectWithName
                                    width="100%"
                                    options={[
                                        {
                                            id: 'Contractor',
                                            name: "Contractor",
                                        },
                                        {
                                            id: "EMPLOYEE",
                                            name: "EMPLOYEE",
                                        }
                                    ]}
                                    value={params?.badge_type}
                                    error={errors?.badge_type}
                                    helperText={errors?.badge_type}
                                    handleChange={handleChange}
                                    label="Badge Type"
                                    name="badge_type"
                                />
                                <SelectWithName
                                    width="100%"
                                    options={[
                                        {
                                            id: 'SCUBE ACS',
                                            name: "SCUBE ACS",
                                        },
                                        {
                                            id: "GeneralACS",
                                            name: "GeneralACS",
                                        }
                                    ]}
                                    value={params?.access_level}
                                    error={errors?.access_level}
                                    helperText={errors?.access_level}
                                    handleChange={handleChange}
                                    label="Access Level"
                                    name="access_level"
                                />

                            </div>

                        </div>
                    </div>
                    <br />
                    <br className="block sm:hidden" />
                    {
                        !isview && (
                            <div className="flex justify-end ">
                                <div />
                                <div className="flex justify-between w-full gap-4 sm:justify-end">
                                    <CustomButton
                                        height="47px"
                                        disabled={disableButton}
                                        borderRadius="0.5rem"
                                        onClick={onCancel}
                                        // width='w-44'
                                        variant="outlined"
                                        size="large"
                                    >
                                        <p className="px-5">Cancel</p>
                                    </CustomButton>

                                    <CustomButton
                                        height="47px"
                                        disabled={disableButton}
                                        borderRadius="0.5rem"
                                        onClick={handleSubmit}
                                        // width='w-44'
                                        variant="contained"
                                        size="large"
                                    >
                                        <span className="flex items-center justify-between gap-2 px-5 md:px-20">
                                            {isLoading ? (
                                                <CircularProgress
                                                    size="2vh"
                                                    sx={{ color: "black" }}
                                                />
                                            ) : (
                                                ""
                                            )}

                                            {id ? "Update & Save" : "Save"}
                                        </span>
                                    </CustomButton>
                                </div>
                            </div>
                        )
                    }

                    {/* POPUPS */}
                    <>
                        {/* 1. Warning Popup */}
                        <Popup
                            handleYes={handleYes}
                            handleNo={handleNo}
                            open={open.warning}
                            handlePopup={handlePopup}
                            popup="warning"
                            isdeletebtn
                            subtitle={`${cancel
                                ? "Changes are not saved !"
                                : "Are your sure need to delete this employee?"
                                }`}
                            popupmsg={`${cancel
                                ? "Do you want to Proceed without Saving the Details ?"
                                : "Doing this will completely delete the Card information and that cannot be retained agian!"
                                }`}
                        />
                        {/* Success popup */}
                        <Popup
                            handleYes={handleYes}
                            open={open?.success}
                            handlePopup={handlePopup}
                            popup="success"
                            subtitle="Information saved !"
                            popupmsg="Customer Created Successfully !"
                            handleOkay={handleOkay}
                        />
                    </>
                </>
            )}
        </>
    );
};

export default Form;
