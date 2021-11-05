import React, { useState, Fragment } from 'react'
import AddItemForm from './additemform'
import EditItemForm from './edititemform'
import Table from './Table'
import './styles.css'


const App = () => {


  const columns = [
    { accessor: 'id', label: 'Id 🆔' },
    { accessor: 'name', label: 'Item Name 👗' },
    { accessor: 'description', label: 'Description 🥰', },
    { accessor: 'price', label: 'Price 💰' },
    { accessor: 'quantity', label: 'Quality ⭐' },
    { accessor: 'date', label: 'Date 📅' },
    
   
    
  ]
  
	// Data
	const ItemData = [
		{ id: 1, name: 'western tops', description: 'rayon' , price:1000 , quantity :4 ,date:'22-02-2021'},
		{ id: 2, name: 'Fancy saree', description: 'embroidary work' , price:3000 , quantity :5 ,date:'22-02-2021'},
		{ id: 3, name: 'short', description: 'cotton' , price:299 , quantity :5 ,date:'23-02-2021'},
    { id: 4, name: 't-shirt', description: 'tshirt' , price:900 , quantity :5 ,date:'24-02-2021'},
    { id: 5, name: 'Shirt', description: 'linen' , price:1000 , quantity :5 ,date:'25-02-2021'},
    { id: 6, name: 'skirt', description: 'cotton' , price:500 , quantity :3 ,date:'26-02-2021'},
	]

	const initialFormState = { id: null, name: '', description: '' ,price:null, quantity:null,date:''}

	// Setting state
	const [ items, setItems ] = useState(ItemData)
	const [ currentItem, setCurrentItem ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addItem = item => {
		item.id = items.length + 1
		setItems([ ...items, item ])
	}

	const deleteItem = id => {
		setEditing(false)

		setItems(items.filter(item => item.id !== id))
	}

	const updateItem = (id, updatedItem) => {
		setEditing(false)

		setItems(items.map(item => (item.id === id ? updatedItem : item)))
	}

	const editRow = item => {
		setEditing(true)

		setCurrentItem({ id: item.id, name: item.name, description: item.description,price:item.price,quantity:item.quantity,date:item.date })
	}

	return (
		<div className="x">
      <div className="d1">
			<h1>High Fashions </h1>
      </div>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment className="d6">
							<h2 className="d5">Edit Item</h2>
							<EditItemForm className="d6"
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
              <div className="d5">
							<h2>ADD DETAILS</h2>
              </div>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div >
          <div className="d5">
					<h2>VIEW ITEMS</h2>
          </div>
					{/* <ItemTable items={items} editRow={editRow} deleteItem={deleteItem} /> */}
          <Table rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}

export default App