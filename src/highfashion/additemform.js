import React, { useState } from 'react'
import './styles.css'


const AddItemForm = props => {
	const initialFormState = { id: null,  itemname: '', description: '',price:'',quantity:'',date:'' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setItem({ ...item, [name]: value })
	}

	return (
		<div className="d6">
		<form className="f1"
			onSubmit={event => {
				event.preventDefault()
				if (!item.itemname || !item.price) return

				props.addItem(item)
				setItem(initialFormState)
			}}
		>
			<label>ItemName</label>
			<input type="text" name="name" value={item.itemname} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={item.description} onChange={handleInputChange} />
			<label>Price</label>
			<input type="text" name="price" value={item.price} onChange={handleInputChange} />
			<label>Quantity</label>
			<input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
			<label>Date</label>
			<input type="text" name="date" value={item.date} onChange={handleInputChange} />


			<button>ADD NEW ITEM 🥰</button>
		</form>
		</div>
	)
}

export default AddItemForm