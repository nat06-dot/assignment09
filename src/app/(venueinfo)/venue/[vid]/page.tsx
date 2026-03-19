import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params

  const venueData = await getVenue(vid)
  console.log("venueData:", JSON.stringify(venueData)) // ← ดู structure จริง

  const venue = venueData.data

  if (!venue) {
    return (
      <main className="p-8" style={{ paddingTop: "70px" }}>
        <h1>Venue not found</h1>
      </main>
    )
  }

  return (
    <main className="p-8" style={{ paddingTop: "70px" }}>
      <div className="flex flex-row gap-6 border p-6 rounded-lg max-w-3xl mx-auto">
        <div style={{ position: "relative", width: "300px", height: "200px", flexShrink: 0 }}>
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <p className="text-xl font-bold mb-2">{venue.name}</p>
          <p>Address: {venue.address}</p>
          <p>District: {venue.district}</p>
          <p>Postal Code: {venue.postalcode}</p>
          <p>Tel: {venue.tel}</p>
          <p>Daily Rate: {venue.dailyrate}</p>
        </div>
      </div>
    </main>
  )
}