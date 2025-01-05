<script>
    import { onMount } from 'svelte';
    import World from './index'
    
    let canvas

    onMount(() => {
        World.canvas = canvas
    })
</script>

<div class="fixed top-0 left-0 p-4">
    test overlay
</div>

<canvas bind:this={canvas} class="fixed top-0 left-0 w-full h-full"></canvas>
