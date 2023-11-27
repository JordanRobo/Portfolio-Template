<script lang="ts" type="module">
    import { inputText } from '../store';
</script>

<div class="p-12 grid grid-cols-3 gap-12">
    <div>
        <h1 class="h1 text-9xl font-serif">About</h1>
        <p class="font-sans text-2xl pt-6">{$inputText}</p>
        
    </div>
    <div>
        <h3 class="h3 text-6xl" style="font-family: 'Bebas Neue', sans-serif;">Stats</h3>
        <hr class="!border-t-2" />
        <ul class="py-8">
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Height:</span> 173cm - 5'9"</li>
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Bust:</span> 90cm - D34"</li>
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Waist:</span> 68cm - 27"</li>
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Hips:</span> 99cm - 39"</li>
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Shoes:</span> eu 40 - aus 9</li>
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Hair:</span> Blonde</li>
            <li class="h3 text-3xl font-sans"><span class="h2 font-serif">Eyes:</span> Blue</li>
        </ul>
    </div>
    <div>
        <h3 class="h3 text-6xl" style="font-family: 'Bebas Neue', sans-serif;">Background</h3>
        <hr class="!border-t-2" />
    </div>
</div>