import { useEffect, useState } from "react";

export default function Team() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
