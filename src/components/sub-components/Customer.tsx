import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Content = [
  {
    name: "John Doe",
    designation: "Dating Expert, LoveCo",
    rateing: 5,
    review: "“GameUp is a game-changer in the dating world”",
  },
  {
    name: "Jane Smith",
    designation: "Dating Expert, LoveCo",
    rating: 5,
    review: "“GameUp is a game-changer in the dating world”",
  },
  {
    name: "Jane Smith",
    designation: "Dating Expert, LoveCo",
    rating: 5,
    review: "“GameUp is a game-changer in the dating world”",
  },
  {
    name: "Jane Smith",
    designation: "Dating Expert, LoveCo",
    rating: 5,
    review: "“GameUp is a game-changer in the dating world”",
  },
];

export function CarouselSpacing() {
  return (
    <>
      <Carousel className="w-full max-w-3xl ">
        <CarouselContent className="ml-1">
          {Content.map((item, index) => (
            <CarouselItem
              key={index}
              className="p-0 border-rounded md:basis-1/2 lg:basis-1/3 gradient-2 w-64"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col justify-evenly aspect-square items-center  w-auto p-2 pt-4">
                    <div>
                      <div className="flex mb-3">
                        <div className="w-1/5 pr-1">
                          <img src="/images/avatar/demo.png" alt="" />
                        </div>
                        <div className="w-4/5">
                          <p className="font-bold m-0">{item.name}</p>
                          <p className="m-0">{item.designation}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((item) => (
                          <img src="/images/icons/star.png" />
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">{item.review}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
