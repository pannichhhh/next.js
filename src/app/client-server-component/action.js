'use server'

import mysql from 'mysql2'

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'panichakam',
    database:'dbproducts',
    port:'3306'
})

export async function submitForm(formData) {
    // recieve data : id , customer_name , address , phone
    const id = formData.get('id')
    const customer_name = formData.get('customer_name')
    const address = formData.get('address')
    const phone = formData.get('phone')

    console.log('id',id)
    console.log('customer_name',customer_name)
    console.log('address',address)
    console.log('phone',phone)

    const sql = `INSERT INTO ecommerce (customer_id, customer_name, address, phone) VALUES (?,?,?,?)`
    const values = [id,customer_name,address,phone]

    connection.query(sql,values,(error,results,fields) => {
        if(error){
            return console.error(error.message)
        }
    })
}