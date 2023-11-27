<script lang="ts">
    import "../app.pcss";
    import { AppShell, TabGroup, Tab, TabAnchor, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import AboutDrawer from "../components/AboutDrawer.svelte";
	import GalleryDrawer from "../components/GalleryDrawer.svelte";
	import ContactDrawer from "../components/ContactDrawer.svelte";
    import ServicesDrawer from "../components/ServicesDrawer.svelte";

    initializeStores();
    const drawerStore = getDrawerStore();

    function openDrawer(tab: string): void {
        const drawerSettings: DrawerSettings = {
            id: tab,
            position: 'bottom',
        };
        drawerStore.open(drawerSettings);
    }
    
</script>

<Drawer>
    {#if $drawerStore.id === 'about'}
        <AboutDrawer />
    {:else if $drawerStore.id === 'gallery'}
        <GalleryDrawer />
    {:else if $drawerStore.id === 'contact'}
        <ContactDrawer />
    {:else if $drawerStore.id === 'services'}
        <ServicesDrawer />
        
    {:else}
        <!-- Fallback content -->
    {/if}
</Drawer>
<AppShell>
    <div class="flex flex-col h-full">
        <slot />
    </div>
	<svelte:fragment slot="footer"> 
    <div class="h-12 px-6">
        <TabGroup>
            <TabAnchor on:click={() => openDrawer('about')}><h2 style="font-family: 'Bebas Neue', sans-serif;" class="h3 hover:text-primary-500">About</h2></TabAnchor>
            <TabAnchor on:click={() => openDrawer('gallery')}><h2 style="font-family: 'Bebas Neue', sans-serif;" class="h3 hover:text-primary-500">Gallery</h2></TabAnchor>
            <TabAnchor on:click={() => openDrawer('services')}><h2 style="font-family: 'Bebas Neue', sans-serif;" class="h3 hover:text-primary-500">Services</h2></TabAnchor>
            <TabAnchor on:click={() => openDrawer('contact')}><h2 style="font-family: 'Bebas Neue', sans-serif;" class="h3 hover:text-primary-500">Contact</h2></TabAnchor>
        </TabGroup>    
    </div>					
    </svelte:fragment>
</AppShell>