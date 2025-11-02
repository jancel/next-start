import { getServerSession } from "next-auth";

import options from "@/config/auth";
import requireAuth from "@/utils/require-auth";
import ProfileCard from "@/components/ui/profile-card";

export const dynamic = "force-dynamic";

export default async function Profile() {
  await requireAuth();
  const session = (await getServerSession(options))!;

  return (
    <ProfileCard
      name={session.user?.name}
      email={session.user?.email}
      image={session.user?.image}
    />
  );
}
