import fetcherFromApi from "@/helpers/fetcher-from-api";
import fetcherFromLocalStorage from "@/helpers/fetcher-from-localstorage";
import fetcherFromMock from "@/helpers/fetcher-from-mock";

import Todos from "@/components/todos/Todos";

export default function DependencyInversionPrinciple() {
  return (
    <div>
      <h2>DIP</h2>

      <h3>Fetch from mock</h3>
      <Todos id="fetch-mock" fetcher={fetcherFromMock} />

      <h3>Fetch from local storage</h3>
      <Todos id="fetch-ls" fetcher={fetcherFromLocalStorage} />

      <h3>Fetch from api</h3>
      <Todos id="fetch-api" fetcher={fetcherFromApi} />
    </div>
  );
}
