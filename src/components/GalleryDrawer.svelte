<script lang="ts" type="module"></script>
<div class="p-12 grid grid-cols-3 grid-rows-1">
    <div class="">
        <h1 class="h1 text-9xl" style="font-family: 'Bebas Neue', sans-serif;">Gallery</h1>
    </div>
    <div class="col-span-2">
        <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
            {#each Array.from({ length: 8 }) as _, i}
                <div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
            {/each}
        </div>
    </div>
</div>