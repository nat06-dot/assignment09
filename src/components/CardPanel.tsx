'use client'

import { useReducer } from "react";
import Card from "@/components/Card";
import Link from "next/link";

type RatingAction =
  | { type: 'UPDATE_RATING'; venueName: string; rating: number | null }
  | { type: 'REMOVE_RATING'; venueName: string };

const ratingReducer = (state: Map<string, number | null>, action: RatingAction) => {
  switch (action.type) {
    case 'UPDATE_RATING':
      const newStateUpdate = new Map(state);
      newStateUpdate.set(action.venueName, action.rating);
      return newStateUpdate;
    case 'REMOVE_RATING':
      const newStateRemove = new Map(state);
      newStateRemove.delete(action.venueName);
      return newStateRemove;
    default:
      return state;
  }
};

export default function CardPanel() {
  const initialRatings = new Map<string, number | null>([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0],
  ]);

  const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatings);

  const handleRatingChange = (venueName: string, rating: number | null) => {
    dispatch({ type: 'UPDATE_RATING', venueName, rating });
  };

  const handleRemoveRating = (venueName: string) => {
    dispatch({ type: 'REMOVE_RATING', venueName });
  };

  const mockVenues = [
    { vid: "001", name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
    { vid: "002", name: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
    { vid: "003", name: "The Grand Table", imgSrc: "/img/grandtable.jpg" }
  ];

  return (
    <div>
      <div style={{
        margin: "20px", display: "flex", flexDirection: "row",
        alignContent: "space-around", justifyContent: "space-around",
        flexWrap: "wrap", gap: "20px"
      }}>
        {mockVenues.map((venue) => (
          <Link
            key={venue.vid}
            href={`/venue/${venue.vid}`}
            style={{ width: "30%", minWidth: "350px" }}
          >
            <Card
              venueName={venue.name}
              imgSrc={venue.imgSrc}
              onRatingChange={handleRatingChange}
            />
          </Link>
        ))}
      </div>

      <div className="mt-8 p-6 max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Venue Ratings: {ratingMap.size}</h3>
        <div className="flex flex-col gap-3">
          {Array.from(ratingMap.entries()).map(([venue, rating]) => (
            <div
              key={venue}
              data-testid={venue}
              className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all"
              onClick={() => handleRemoveRating(venue)}
            >
              <span className="font-semibold text-gray-700">{venue}</span>
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-medium">
                Rating: {rating}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}