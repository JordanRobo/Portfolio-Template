<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { crossfade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let images = [
    'src/lib/images/Berner-sunset.jpg',
    'src/lib/images/bernese-mountain-dog-puppy.jpg',
    'src/lib/images/smiling-bernese-mountain-dog.jpg'
  ];
  let currentImageIndex = 0;

  const [send, receive] = crossfade({
    duration: 1500,
    easing: quintOut
  });

  const updateImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  };

  let interval: any;

  onMount(() => {
    interval = setInterval(updateImage, 5000); // Change 5000 to your desired interval in milliseconds
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#each images as image, index (image)}
  {#if index === currentImageIndex}
    <div class="absolute top-0 left-0 w-full h-full bg-fixed bg-cover brightness-50" in:receive={{ key: image }} out:send={{ key: image }} style="background-image: url({image})"></div>
  {/if}
{/each}