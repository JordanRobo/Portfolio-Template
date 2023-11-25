<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';

  let images = [
    'src/lib/images/Berner-sunset.jpg',
    'src/lib/images/bernese-mountain-dog-puppy.jpg',
    'src/lib/images/smiling-bernese-mountain-dog.jpg'
  ];
  let currentImageIndex = 0;

  const updateImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  };

  let interval: any;

  onMount(() => {
    interval = setInterval(updateImage, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#each images as image, index (image)}
  {#if index === currentImageIndex}
    <div 
      class="absolute top-0 left-0 w-full h-full bg-fixed bg-cover brightness-50" 
      in:fly={{ x: -200, duration: 1000 }} 
      out:fly={{ x: 200, duration: 1000, delay: 1000 }} 
      style="background-image: url({image})"
    ></div>
  {/if}
{/each}