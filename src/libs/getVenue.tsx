import { VenueItem } from "../../interface";

export default async function getVenue(vid: string): Promise<{ data: VenueItem }> {
    const response = await fetch(
        `https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${vid}`
    );
    return await response.json();
}