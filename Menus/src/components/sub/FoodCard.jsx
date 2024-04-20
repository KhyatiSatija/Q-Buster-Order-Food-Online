import React from 'react'
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";


const FoodCard = ({ name, price, image, buttonColor }) => {
  return (
    <div>
      <Card className="py-4  bg-rose-50 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <CardHeader className="pb-0 pt-0 px-4 flex flex-col items-center">
        <p className="text-2xl text-center uppercase font-bold">{name}</p>
        <h4 className="font-medium text-xl">₹{price}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
        <div className='flex justify-around items-center py-2 pt-4'>
        <Button className={`bg-secondary text-white rounded-full font-semibold w-[50%]`} variant="shadow">Add to Cart</Button>
        </div>
      </CardBody>
    </Card>
    </div>
  )
}

export default FoodCard
