import React, { useState } from 'react';

const Modal = () => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        var id = Math.floor(Math.random() * 1000000000);
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const amount = form.amount.value

        const billingBody = {
            id,
            name,
            email, phone, amount
        }
        console.log(billingBody);
        fetch('https://billing-server-eight.vercel.app/add-billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billingBody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert(`You have added successfully`)

                    window.location.reload()

                }
                else {

                    setError(data.error);

                }
            })
            .catch((error) => {
                setError(error.message);
                alert(error.message);

            });




    }
    return (

        <div>
            {/* The button to open modal */}


            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className='flex flex-col justify-end h-60 space-y-4'>
                        <input type='text' className='h-[50px] w-full rounded-full px-4 text-xl' placeholder='Full Name' name='name' />

                        <input type='email' className='h-[50px] w-full rounded-full px-4 text-xl' placeholder='Email Address' name='email' />

                        <input type='text' className='h-[50px] w-full rounded-full px-4 text-xl' placeholder='Phone Number' name='phone' />

                        <input type='text' className='h-[50px] w-full rounded-full px-4 text-xl' placeholder='Amount' name='amount' />
                        <button className='btn bg-red-900 rounded-full'>Submit</button>
                    </form>


                </div>
            </div>
        </div>


    );
};

export default Modal;