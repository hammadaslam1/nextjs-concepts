'use client'

const Page = ({params}) => {
    const {productId} = params;
    return (
        <h1>
            this is product {productId}
        </h1>
    ) 
}

export default Page;