import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h3>This is a Dynamic page: {params.id}</h3>
            <h4>searchParams: {searchParams.category}</h4>
        </div>
    );
};

export default DynamicPage;