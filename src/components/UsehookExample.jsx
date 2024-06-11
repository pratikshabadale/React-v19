import { Suspense } from "react";
import Users from "./Users";

function UsehookExample() {
  const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Users usersPromise={usersPromise} />;
    </Suspense>
  );
}
export default UsehookExample;
