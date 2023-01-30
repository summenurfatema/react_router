import React, { useEffect, useState } from 'react';

const Table = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(false)
    const [billingId, setBillingId] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8000/api/billing-list`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setBookings(data)
                setBillingId(data.generatedBillingId)
            })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Billing Id</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr>
                                <th>{loading ? "Loading..." : billingId}</th>
                                <td>{booking.id}</td>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;