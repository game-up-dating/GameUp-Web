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
      <Carousel className="w-full lg:max-w-7xl ">
        <CarouselContent className="ml-1">
          {Content.map((item, index) => (
            <CarouselItem
              key={index}
              className="mx-1 p-0 border-rounded md:basis-1/2 lg:basis-1/3 gradient-2 "
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col w-auto ">
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
                    <div>{item.review}</div>
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
