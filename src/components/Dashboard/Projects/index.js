import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const fetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default function Projects() {
  const { data, status } = useQuery(["users"], fetcher);

  if (status === "loading") return <p>loading....</p>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2>React Query </h2>
        {data?.map((user) => (
          <p key={user.id}>
            {user.id}--{user.name}
          </p>
        ))}
        <ReactQueryDevtools initialIsOpen={true} />
      </div>
    </div>
  );
}
