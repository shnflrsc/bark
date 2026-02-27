import { component$ } from "@builder.io/qwik";
import { LuPawPrint, LuGithub, LuSunMoon } from "@qwikest/icons/lucide";

export default component$(() => {
    return (
        <header class="items-center bg-background fixed top-0 w-full flex p-8 justify-between gap-x-8">
            <a href="/">
                <h1
                    class="flex gap-x-2 text-3xl text-center font-bold"
                    >
                        <LuPawPrint />
                        Bark
                    </h1>
            </a>
            <div class="flex gap-x-8 ">
                <a class="text-xl" href="https://github.com/shnflrsc/bark" target="_blank">
                    <LuGithub />
                </a>
            </div>
        </header>
    )
});