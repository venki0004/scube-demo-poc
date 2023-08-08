import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import moment from 'moment'
import { makeStyles } from '@mui/styles'
import NotFound from '../../../../../assets/images/NotFound.svg'

import { useDispatch } from 'react-redux'
import { checkModulePrivilegeAccess, uuid } from '../../../../../utils/helpers'
import { Tooltip } from '@mui/material'
import Popup from '../../../../Common/Popup'
import CircularProgress from '@mui/material/CircularProgress'
import axiosInstance from './../../../../../utils/axios'
import { showToastMessage } from './../../../../../utils/helpers'

const useStyles = makeStyles(() => ({
  root: {
    '& td ': {
      color: '#141C4C',
    },
    '& th ': {
      color: 'rgba(20, 28, 76, 0.7)',
    },
  },

  tr: {
    '& td:first-child ': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '& td:last-child ': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  },
}))
const ActivityLogsTable = ({ dataList, handleMemberPopup, isLoading, custId }: any) => {
  const dispatch = useDispatch()

  const classes = useStyles()
  const [memberId, setMemberId] = useState()
  // popup states
  const [open, setOpen] = useState({
    success: false,
    warning: false,
    question: false,
  })

  // Popup Handeling Functions
  const handlePopup = (key: any, value: any) => {
    setOpen({ ...open, [key]: value })
  }

  const handleNo = () => {
    handlePopup('warning', false)
  }

  const EditMember = (id: any) => {
    handleMemberPopup(true, 'edit', id)
  }

  const deleteMember = (id: any) => {
    handlePopup('warning', true)
    setMemberId(id)
  }
  const handleYes = () => {
    // axiosInstance
    //   .delete(`/admin/customers/family-members/${memberId}`)
    //   .then((response: any) => {
    //     dispatch(fetchCustomerMemberList({ id: custId, page: 1 }))
    //     showToastMessage(response?.data?.message, 'success')
    //     handlePopup('warning', false)
    //   })
    //   .catch((error: any) => {
    //     const { errors, message } = error.response.data;
    //     const erroMsg = errors[Object.keys(errors)[0]] || message;
    //     showToastMessage(erroMsg, 'error')
    //     handlePopup('warning', false)
    //   })
  }

  const headings = [
    'Activity',
    'Access Location',
    'Time',
  ]

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        {isLoading ? (
          <div className='w-full h-80 flex justify-center items-center'>
            <CircularProgress />
            <span className='text-3xl'>Loading...</span>
          </div>
        ) : [1, 1, 1, 1].length > 0 ? (
          <Table
            aria-label='simple table'
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: '1px solid #E7E8ED',
              },
              minWidth: 650,
              //   border: '1px solid #E7E8ED',
              borderCollapse: 'separate',
              borderSpacing: '0px 5px',
              px: '24px',
              background: '#F1F4F8',
              borderRadius: '8px',
              '& .css-zvlqj6-MuiTableCell-root': {
                padding: 0,
              },
              padding: 0,
            }}
            className={classes.root}
          >
            <TableHead>
              <TableRow>
                {headings.map((title: any) => {
                  return (
                    <TableCell align='center' sx={{ color: '#5B6082', fontSize: '0.8rem' }}>
                      <span>{title}</span>
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 1, 1, 1]?.map((item: any, index: number) => (
                <TableRow
                  sx={{
                    height: "16px",
                    backgroundColor: "#F1F4F8",
                    color: "#141C4C",
                  }}
                  className={classes.tr}
                >
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.8rem", color: "#141C4C" }}
                  >
                    dummy_value
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.8rem", color: "#141C4C" }}
                  >
                    dummy_value
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.8rem", color: "#141C4C" }}
                  >
                    dummy_value
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className='flex justify-center items-center flex-col gap-4 mt-6'>
            <img src={NotFound} alt='' width="100px" />
            <p className='text-[18px] font-nunitoBold'>No Results found !!</p>
          </div>
        )}

        <div className=''>
          {/* 1. Warning Popup */}
          <Popup
            handleYes={handleYes}
            handleNo={handleNo}
            open={open.warning}
            handlePopup={handlePopup}
            popup='warning'
            isdeletebtn
            subtitle='Are your sure need to delete this Member?'
            popupmsg='Doing this will completely delete information and that cannot be retained agian!'
          />
        </div>
      </TableContainer>
    </>
  )
}
export default ActivityLogsTable