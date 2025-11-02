"use client";

import { Card, CardBody, User } from "@heroui/react";

interface ProfileCardProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default function ProfileCard({ name, email, image }: ProfileCardProps) {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <User
          name={name}
          description={email}
          avatarProps={{
            showFallback: !image,
            src: image || "",
          }}
        />
      </CardBody>
    </Card>
  );
}
