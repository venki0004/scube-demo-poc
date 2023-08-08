import Validator from "validatorjs";
import { useEffect } from 'react';
import { Box, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { showToastMessage } from "../../../../utils/helpers";
import { SelectWithName } from "../../../Common/Input/SelectWithName";
import CustomButton from "../../../Common/CustomButton";
import TextArea from "../../../Common/Input/TextArea";
import { Input } from "../../../Common/Input/Input";
import React from 'react'
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../../Common/FileUpload";
import FileCheckModal from "./FileCheckModal";
import axiosInstance from "../../../../utils/axios";



const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fcfcfc",
};

const AddNewRecordModal = ({ id, open, handleClose, handleOpen, isUpl }: any) => {


    const navigate = useNavigate()

    const initialStates = {
        xlsx_file: ''
    }

    const rules = {
        xlsx_file: 'required'
    }

    const [params, setParams] = useState(initialStates) as any
    console.log('params:', params)
    const [errors, setErrors] = useState(initialStates) as any

    const updateParams = (records: any) => {
        const newParams = JSON.parse(JSON.stringify(params))
        Object.keys(records).forEach((key) => (newParams[records[key].name] = records[key].value))
        setParams(newParams)
    }

    const onCloseClick = () => {
        setParams(initialStates)
        setErrors({})
        handleClose()
        setIsUpload(false)
    };

    const handleChange = (e: any) => {
        if (e.target) {
            const { name, value } = e.target
            if (name === 'email' && e.keyCode === 49) {
                return
            }
            if (name === 'pincode' || name === 'phone') {
                const re = /^[0-9+]+$/
                if (value && !re.test(value)) {
                    return
                }
            }

            if (name === 'alternate_phone') {
                const re = /^[0-9+]+$/
                if (value && !re.test(value)) {
                    return
                }
            }
            updateParams([{ name, value: typeof value === 'number' ? value : value.trim() }])
        } else {
            updateParams([{ name: e?.name, value: e?.url }])
        }

        if (e?.file) {
            setFile(e.file)
            setParams({ ...params, 'xlsx_file': e.url })
        }

        setErrors({})
    }

    const validate = (parameters: any, rule: any) => {
        const validator = new Validator(parameters, rule)

        if (validator.fails()) {
            const fieldErrors: any = {}

            /* eslint-disable */
            for (const key in validator.errors.errors) {
                fieldErrors[key] = validator.errors.errors[key][0]
            }
            /* eslint-enable */

            setErrors(fieldErrors)
            return false
        }
        setErrors({})
        return true
    }



    const handleSubmit = () => {

        if (!validate(params, rules)) {
            const err = Object.keys(errors)
            if (err?.length) {
                const input: any = document.querySelector(`input[name=${err[0]}]`)
                if (input) {
                    input.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                        inline: 'start',
                    })
                }
            }
            showToastMessage('Please check form errors!', 'error')
            return
        }

        fileUploadAPI()
    }


    const [isUpload, setIsUpload] = useState(false)

    useEffect(() => {
        setIsUpload(isUpl)
    }, [isUpl])

    const [file, setFile] = useState<any>()

    const removeImage = (name: string) => {
        ('')
        updateParams([{ name: name, value: '' }])
    }

    const [fCheckModal, setfCheckModal] = useState(false)

    const fCheckModalOpen = () => {
        onCloseClick()
        setfCheckModal(true)
    }

    const fCheckModalClose = () => {
        setfCheckModal(false)
    }

    const backHere = () => {
        // close file check modal
        fCheckModalClose()
        // open modal containing file upload component
        setIsUpload(true)
        handleOpen()
    }


    const [status, setStatus] = useState('')

    const fileUploadAPI = () => {

        const formdata = new FormData()

        for (let key in params) {
            if (['user_image'].includes(key) || params[key] === null || params[key] === undefined)
                continue

            formdata.append(key, params[key])
        }

        if (file) {
            formdata.append('file', file)
        } else {
            formdata.append('image', params.user_image)
        }

        axiosInstance.post('/admin/employees/upload-sheet', formdata)
            .then((response) => {
                console.log(response)
                showToastMessage('File uploaded success', 'success')
                setStatus('success')
                fCheckModalOpen()
            })
            .catch((error) => {
                console.log(error, 'error occured')
                setStatus('duplicate')
                // setStatus('template error')
                fCheckModalOpen()
                showToastMessage('Unable to process that request', 'error')
            })
    }

    return (
        <div className="">
            <Modal
                open={open}
                onClose={onCloseClick}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableEnforceFocus
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Box
                    sx={style}
                    style={{
                        // textAlign: "center",
                        borderRadius: "8px",
                        outline: "none",
                    }}
                >
                    <div className="lg:p-5 md:p-5 p-4 flex flex-col lg:w-[671px] md:w-[671px] w-[500px] m-auto">
                        <div className="flex lg:items-center justify-between">
                            <div>
                                <h1 className="text-lg font-nunitoBold text-[#2B2C34]">{isUpload ? 'Add New Record' : 'Upload to the Admin Panel'}</h1>

                            </div>
                            <div onClick={handleClose} className="cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Iconly/Light/Close Square">
                                        <g id="Close Square">
                                            <path id="Stroke 1" d="M14.3936 9.59375L9.60156 14.3857" stroke="#2B2C34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 2" d="M14.3976 14.3907L9.60156 9.59375" stroke="#2B2C34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z" stroke="#2B2C34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            {
                                !isUpload ?
                                    <React.Fragment>
                                        {/* Add new record rules */}

                                        <p className="text-sm font-nunitoMedium text-[#2B2C34] w-[90%]">To ensure that your data updates are processed accurately and efficiently, we recommend following these simple steps:</p>
                                        {/* Step 1 */}
                                        <div className="p-2 border border-[#E1E3E7] rounded-lg">
                                            <div className="w-full flex flex-col mt-2">
                                                <p className="text-sm font-nunitoBold text-[#2B2C34]">Step 1: Download the Data Sheet</p>
                                                <p className="text-sm font-nunitoMedium text-[#767676] mt-1">Click the "Download Data Sheet" button below to obtain the latest version of the data sheet. This file contains the most up-to-date template with all the necessary fields for your data updates.</p>
                                            </div>

                                            <div className="flex justify-end items-end mt-2">
                                                <button className="bg-white w-[212px] h-[47px] text-base rounded-lg text-black border border-[#2B2C34] font-nunitoBold">
                                                    Download Data sheet
                                                </button>
                                            </div>
                                        </div>
                                        {/* Step 2 */}
                                        <div className="p-2 border border-[#E1E3E7] rounded-lg">
                                            <div className="w-full flex flex-col mt-2">
                                                <p className="text-sm font-nunitoBold text-[#2B2C34]">Step 2: Update Data in the File</p>
                                                <p className="text-sm font-nunitoMedium text-[#767676] mt-1">Open the downloaded data sheet using your preferred spreadsheet software (e.g., Microsoft Excel, Google Sheets). Here, you can add, modify, or remove the data as needed. Please ensure that all changes are made in accordance with the <span className="text-[#FF8059] underline cursor-pointer">provided guidelines</span>.</p>
                                            </div>

                                        </div>
                                        {/* Step 3 */}
                                        <div className="p-2 border border-[#E1E3E7] rounded-lg">
                                            <div className="w-full flex flex-col mt-2">
                                                <p className="text-sm font-nunitoBold text-[#2B2C34]">Step 3: Save the Updated Data Sheet</p>
                                                <p className="text-sm font-nunitoMedium text-[#767676] mt-1">After making the necessary changes, save the data sheet to your computer, ensuring it's saved in the XLS format.</p>
                                            </div>

                                        </div>
                                        {/* Step 4 */}
                                        <div className="p-2 border border-[#E1E3E7] rounded-lg">
                                            <div className="w-full flex flex-col mt-2">
                                                <p className="text-sm font-nunitoBold text-[#2B2C34]">Step 4: Upload to the Admin Panel</p>
                                                <p className="text-sm font-nunitoMedium text-[#767676] mt-1">Now, click the "Upload to Admin Panel" button below, and select the updated data sheet from your computer. This will initiate the process of updating the data on the admin panel.
                                                </p>
                                            </div>

                                            <div className="flex justify-end items-end mt-2">
                                                <button
                                                    onClick={() => setIsUpload(true)}
                                                    className="bg-[#40C79E] w-[142px] h-[47px] text-base rounded-lg text-white font-nunitoBold">
                                                    Upload File
                                                </button>
                                            </div>

                                        </div>

                                    </React.Fragment> :

                                    <React.Fragment>
                                        {/* updload xlsx file to the admin panel */}
                                        <div className="my-2">
                                            <FileUpload
                                                imageUrl={params.xlsx_file}
                                                removeImage={() => removeImage('xlsx_file')}
                                                styleType={window.innerWidth < 768 || params.role_id === 5 ? 'md' : 'lg'}
                                                setImage={handleChange}
                                                acceptMimeTypes={['application/vnd.ms-excel']}
                                                title='Drag and Drop xls file here'
                                                label='File Format: .xlsx/ .xls'
                                                id='img'
                                                maxSize={5}
                                                filename='xlsx_file'
                                                error={errors?.xlsx_file}
                                            />

                                            <div className="flex flex-col justify-end items-end mt-5">
                                                <CustomButton
                                                    disabled={false}
                                                    borderRadius="0.5rem"
                                                    variant="contained"
                                                    size="large"
                                                    width="w-42"
                                                    onClick={handleSubmit}
                                                >
                                                    <p className="text-sm font-bold text-darkbg font-nunitoRegular">
                                                        Validate
                                                    </p>
                                                </CustomButton>
                                            </div>

                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                    </div>
                </Box>
            </Modal>
            {/* status can be 'success' or 'duplicate' or 'template error' */}
            <FileCheckModal
                status={status}
                open={fCheckModal}
                handleClose={fCheckModalClose}
                backHere={backHere} />
        </div>
    );
};

export default AddNewRecordModal;