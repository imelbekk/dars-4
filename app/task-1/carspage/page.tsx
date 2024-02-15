"use client"
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function CarsPage() {
    const [cars,setCars] = useState<Car[]>([
        {id:1, name: 'Cobalt', color: 'White', position: 3, price: 20000},
        {id:2, name: 'Cobalt', color: 'White', position: 3, price: 20000},
    ])
    interface Car {
        id: number;
        name: string;
        color: string;
        position: number;
        price: number;
    }
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false);
    const [edit, setEdit] = useState('')
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const openModal=()=>{
        setOpen(true)
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        handleClose()
        let id:number = e.target[0].value        
        let name:string = e.target[1].value        
        let color:string = e.target[2].value        
        let position:number = e.target[3].value        
        let price:number = e.target[4].value    
        let payload = {
            id,
            name,
            color,
            position,
            price
        }    
        if(edit !== ''){

        }else{
            cars.push(payload)
            setCars(cars)
        }
    }
    const deleteCar=(index:number)=>{
        const newCars = [...cars]
        newCars.splice(index,1)
        setCars(newCars)
        
    }
    const editModal=(item:any )=>{
        openModal()
        setEdit(item)
        console.log(edit);
    }
  return (
    <div className='min-h-screen w-[80%] m-auto mt-[50px]'>
        <TableContainer component={Paper}>
           <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align='center'>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Color</TableCell>
                <TableCell align="center">Position</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell align="center">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    cars.map((item:any,index:number)=>{
                        return <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align='center'>{index + 1}</TableCell>
                            <TableCell align='center'>{item.name}</TableCell>
                            <TableCell align='center'>{item.color}</TableCell>
                            <TableCell align='center'>{item.position}</TableCell>
                            <TableCell align='center'>{item.price}$</TableCell>
                            <TableCell align='center' width={200}>
                                <Link href={{pathname: "/task-1/carspage/carsId", query: {id: index + 1}}} className='flex w-full justify-center gap-2 items-center font-bold'>
                                    <VisibilityIcon/>
                                    <span>View details</span>
                                </Link>
                            </TableCell>
                            <TableCell align='center' width={200}>
                                <div className='flex justify-center gap-4'>
                                <button className='text-indigo-600' onClick={()=>editModal(item)}>
                                    <EditIcon/>
                                </button>
                                <button className='text-[red]' onClick={()=>deleteCar(index)}>
                                    <DeleteIcon/>
                                </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
           </Table>
        </TableContainer>
        <button onClick={openModal} className='bg-indigo-600 w-[150px] text-white font-medium h-[40px] rounded-[5px]  mt-[20px]' type='submit' form='form'>add</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            <h6 className='text-center'>Add Car</h6>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='w-full'>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder='Enter Id' defaultValue={edit.id} className='border w-full py-[5px] px-[20px] my-3' />
                    <input type="text" placeholder='Enter name' defaultValue={edit.name} className='border w-full py-[5px] px-[20px] my-3' />
                    <input type="text" placeholder='Enter color' defaultValue={edit.color} className='border w-full py-[5px] px-[20px] my-3' />
                    <input type="number" placeholder='Enter position' defaultValue={edit.position} className='border w-full py-[5px] px-[20px] my-3' />
                    <input type="number" placeholder='Enter price' defaultValue={edit.price} className='border w-full py-[5px] px-[20px] my-3' />
                    <button className='border bg-indigo-600 w-[200px] h-[40px] roun ded-[5px] text-white font-bold mx-[135px]'>save</button>
                </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
// home