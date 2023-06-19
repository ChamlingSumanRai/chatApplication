import BasicMenu from '@/components/MenuDropdown'
import Map from '@/components/Map'
import styles from '@/styles/users.module.css'
import React from 'react'

const Users = () => {
  return (
    <div>
      User
      <div userName= {styles.basicMenu}>
      <BasicMenu/>
      </div>
      
      <Map/>
      </div>
  )
}

export default Users