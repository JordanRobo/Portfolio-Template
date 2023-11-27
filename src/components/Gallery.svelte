<script lang="ts" type="module">
  import { onMount, onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  import { imageUrls } from '../store';

  let currentImageIndex = 0;
  let interval: any;
  $: currentImageUrl = $imageUrls[currentImageIndex];

  const updateImage = () => {
    currentImageIndex = (currentImageIndex + 1) % $imageUrls.length;
  };

  onMount(() => {
    interval = setInterval(updateImage, 6000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#each $imageUrls as image, index (image)}
  {#if index === currentImageIndex}
    <div 
      class="absolute top-0 left-0 w-full h-full bg-fixed bg-cover brightness-50 grayscale"
      in:fly={{ x: '-100vw', duration: 2000, easing: quintInOut }} 
      out:fly={{ x: '100vw', duration: 2000, easing: quintInOut }} 
      style="background-image: url({image})"
    ></div>
  {/if}
{/each}
