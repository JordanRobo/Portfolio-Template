<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    import { inputText, imageUrls } from '../../store';
    import { writable } from 'svelte/store';
  
    let text = '';
    $: inputText.set(text);
  
    const tempFiles = writable([null, null, null]);
  
    function saveChanges() {
      inputText.set(text); // Update text in store
  
      // Update images in store
      const files = $tempFiles;
      for (let i = 0; i < files.length; i++) {
        if (files[i]) {
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            imageUrls.update(urls => {
              let newUrls = [...urls];
              newUrls[i] = e.target.result;
              return newUrls;
            });
          };
          fileReader.readAsDataURL(files[i]);
        }
      }
    }
  
    function handleFileChange(event: any, index: any) {
      const file = event.target.files[0];
      if (file) {
        tempFiles.update(files => {
          let newFiles = [...files];
          newFiles[index] = file;
          return newFiles;
        });
      }
    }
  </script>

<div class="bg-gradient-to-r from-primary-700 to-secondary-700 h-full background-animate">
<div class="container p-24">
    <h1 class="h1 text-9xl font-serif">Admin Portal</h1>
    <div>
    <label class="label">
        <span>About Me</span>
        <textarea bind:value={text} class="textarea" rows="4" placeholder={$inputText} />
    </label>
    
    </div>
    <div class="grid grid-cols-3 gap-4 mt-4">
        <div><FileDropzone name="bg 1" on:change={(e) => handleFileChange(e, 0)}></FileDropzone></div>
        <div><FileDropzone name="bg 2" on:change={(e) => handleFileChange(e, 1)}></FileDropzone></div>
        <div><FileDropzone name="bg 3" on:change={(e) => handleFileChange(e, 2)}></FileDropzone></div>
        <button on:click={saveChanges} class="btn variant-filled">Save Changes</button>
    </div>
</div>
</div>

<style>
    .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 8s ease infinite;
    -moz-animation: AnimationName 8s ease infinite;
    animation: AnimationName 8s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>