import Image from 'next/image';
import React from 'react';

const AlbumPage = () => {
    return (
        <div>
            <h1>This is Image Component</h1>
            <Image src="https://plus.unsplash.com/premium_photo-1664382466540-e14662a4c594?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="2 Women" height="500" width="500"/>
        </div>
    );
};

export default AlbumPage;