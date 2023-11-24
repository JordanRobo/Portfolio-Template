<script>
    import SVGAnimation from '../components/SVGAnimation.svelte'
    import Gallery from '../components/Gallery.svelte';
  </script>

<div class="flex-grow flex items-center justify-center relative">
    <div class="btn-group-vertical variant-glass absolute z-10 left-0">
        <button type="button" class="btn-icon btn-icon-lg hover:variant-filled-primary"><i class="fa-brands fa-instagram"></i></button>
        <button type="button" class="btn-icon btn-icon-lg hover:variant-filled-primary"><i class="fa-solid fa-heart"></i></button>
        <button type="button" class="btn-icon btn-icon-lg hover:variant-filled-primary"><i class="fa-solid fa-comments-dollar"></i></button>
    </div>
    <div class="z-10">
        <SVGAnimation />
    </div>
    <div>
        <Gallery />
    </div>
</div>