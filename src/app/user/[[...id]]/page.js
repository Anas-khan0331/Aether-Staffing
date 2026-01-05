import UserInfo from "../../../features/Home/userInfo/UserInfoClient";

export default async function UserPage({ params }) {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  let userData = null;
  if (id && id !== "undefined") {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        next: { revalidate: 60 },
      });

      if (response.ok) {
        userData = await response.json();
      } else {
        console.error(`API Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Network failed to fetch user data:", error);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <UserInfo userInfo={userData} fallbackId={id} />
    </div>
  );
}
