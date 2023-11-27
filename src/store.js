import { writable } from 'svelte/store';

export const inputText = writable("");

export const imageUrls = writable([
    'src/lib/images/Berner-sunset.jpg',
    'src/lib/images/bernese-mountain-dog-puppy.jpg',
    'src/lib/images/smiling-bernese-mountain-dog.jpg'
  ]);