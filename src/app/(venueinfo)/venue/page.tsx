import Banner from "@/components/Banner"
import VenueCatalog from "@/components/VenueCatalog"
import getVenues from "@/libs/getVenues"

export default function VenuePage() {
  const venuesJson = getVenues() // ไม่ต้อง await — ส่ง Promise ตรงๆ ให้ VenueCatalog

  return (
    <main>
      <Banner />
      <VenueCatalog venuesJson={venuesJson} />
    </main>
  )
}