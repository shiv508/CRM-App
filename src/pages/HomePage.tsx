import React, { useState } from 'react'
import UsersTable from '../components/User/usersTable'
import { Navbar } from '../components/Navbar/navbar'
import PageTitle from '../components/pageTitle'
import TodosTable from '../components/Todo/todosTable'
import ProductWrapper from '../layout/product/productWrapper'
import { Style } from '@mui/icons-material'

const HomePage: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Welcome to Customer Relationship Management');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setActiveItem={setActiveItem}/>
      <div className='flex-1 flex flex-col items-center justify-center md:px-[7.4rem] px-4'>
        <h1 className="text-4xl font-bold text-center mb-8">{activeItem}</h1>
        {activeItem !== 'Customers' && activeItem !== 'Activities' && <ProductWrapper/>}
        {activeItem === 'Customers' && <UsersTable/>}
        {activeItem === 'Activities' && <TodosTable/>}
      </div>
    </div>
  );
};
  

export default HomePage