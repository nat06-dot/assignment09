import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);

  let userProfile = null;
  if (session?.user?.token) {
    const profileData = await getUserProfile(session.user.token);
    userProfile = profileData?.data ?? null;
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Book a Venue
        </h1>

        {userProfile && (
          <div
            className="mb-6 p-4 rounded-xl"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <p className="text-white">Name: {userProfile.name}</p>
            <p className="text-white">Email: {userProfile.email}</p>
            <p className="text-white">Tel.: {userProfile.tel}</p>
            <p className="text-white">
              Member Since:{" "}
              {new Date(userProfile.createdAt).toLocaleDateString()}
            </p>
          </div>
        )}

        <BookingForm />
      </div>
    </main>
  );
}
