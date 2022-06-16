import LearnContextProvider from "../contexts/LearnContext/LearnContextProvider";

import Learn from "../components/Learn/Learn";

export default function LearnPage() {
  return (
    <LearnContextProvider>
      <Learn />
    </LearnContextProvider>
  );
}
