import React, { useState, useEffect } from "react";

const Table = () => {
    const [billings, setBillings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const perPage = 10;
    const pageCount = Math.ceil(billings.length / perPage);

    useEffect(() => {
        setLoading(true);
        fetch(`https://billing-server-eight.vercel.app/billing-list`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setBillings(data);
            });
    }, []);

    const paginatedData = billings.slice(
        (page - 1) * perPage,
        (page - 1) * perPage + perPage
    );

    const handleClick = (e, index) => {
        setPage(index);
    };
    // delete
    const handleDelete = billing => {
        const agree = window.confirm('Are you sure to delete ?')
        if (agree) {
            fetch(`https://billing-server-eight.vercel.app/delete-billing/${billing._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('This informationhas been deleted successfully')
                        window.location.reload()
                    }
                })
        }
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Billing Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((billing) => (
                            <tr className="text-xl text-red-900 font-semibold">
                                <th>{loading ? "Id is Gererating..." : billing.id}</th>
                                <td>{billing.name}</td>
                                <td>{billing.email}</td>
                                <td>{billing.phone}</td>
                                <td>{billing.amount}</td>
                                <td>
                                    <button className="bg-red-900 text-white px-4 py-2">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(billing)} className="bg-red-900 text-white px-4 py-2">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                {Array.from({ length: pageCount }, (_, index) => (
                    <button
                        key={index}
                        onClick={(e) => handleClick(e, index + 1)}
                        className="bg-red-900 text-white px-2 py-2 mr-2"
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Table;