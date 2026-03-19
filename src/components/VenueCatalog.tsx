import { VenueJson, VenueItem } from "../../interface";
import Card from "./Card";
import Link from "next/link";

export default async function VenueCatalog({
    venuesJson,
}: {
    venuesJson: Promise<VenueJson>;
}) {
    const venueJsonReady = await venuesJson;

    return (
        <div className="flex flex-row flex-wrap justify-center gap-4">
            {venueJsonReady.data.map((venue: VenueItem) => (
                <Link key={venue._id} href={`/venue/${venue._id}`}>
                    <Card
                        venueName={venue.name}
                        imgSrc={venue.picture}
                    />
                </Link>
            ))}
        </div>
    );
}