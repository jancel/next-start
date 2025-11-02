import db from "@/db";
import GuestbookEntries from "@/components/ui/guestbook-entries";
import GuestbookClient from "./page.client";

export const dynamic = "force-dynamic";

export default async function GuestBook() {
  const entries = await db.query.guestbookEntries.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt);
    },
    with: {
      user: true,
    },
  });

  return (
    <GuestbookEntries entries={entries}>
      <GuestbookClient />
    </GuestbookEntries>
  );
}
