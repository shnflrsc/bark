import { component$, useSignal, $ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuRefreshCcw } from "@qwikest/icons/lucide";

export const useDogData = routeLoader$(async (): Promise<string> => {
  const response = await fetch('https://dogapi.dog/api/v2/facts?limit=1');
  const data = await response.json();
  return data.data[0].attributes.body;
});

export default component$( () => {

  const initialData = useDogData();
  const currentFact = useSignal<string>(initialData.value);

  const getAnotherFact = $(async () => {
    const response = await fetch('https://dogapi.dog/api/v2/facts?limit=1');
    const data = await response.json();
    currentFact.value = data.data[0].attributes.body;
  });

  return (
    <main class="h-dvh">
      <section class="flex flex-col justify-center items-center h-10/12 gap-y-16">
        <p class="text-center text-2xl mx-4 md:max-w-1/2 italic">"{currentFact.value}"</p>
      </section>
      <section class="flex justify-center">
        <button
          class="flex items-center gap-x-1 bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-2 py-2 rounded-md text-white font-bold cursor-pointer md:text-xs"
          onClick$={getAnotherFact}>
            <LuRefreshCcw />
            Give me another
        </button>
      </section>
    </main>
  )
});

export const head: DocumentHead = {
  title: "Bark Dog Facts",
  meta: [
    {
      name: "Bark",
      content: "A website dedicated to giving random interesting dog facts.",
    },
  ],
};
 