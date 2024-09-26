import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
