import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <footer class="bg-background fixed bottom-0 flex justify-center w-full p-2">
            <p class="text-gray-500">Powered by <a class="text-blue-500 hover:text-blue-700" href="https://dogapi.dog/" target="_blank">Stratonauts Dog API</a></p>
        </footer>
    )
});