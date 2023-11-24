<script lang="ts">
    import "../app.pcss";
    import { AppShell, TabGroup, Tab, TabAnchor, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import AboutDrawer from "../components/AboutDrawer.svelte";
	import InfoDrawer from "../components/InfoDrawer.svelte";
	import ContactDrawer from "../components/ContactDrawer.svelte";

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
    {:else if $drawerStore.id === 'info'}
        <InfoDrawer />
    {:else if $drawerStore.id === 'contact'}
        <ContactDrawer />
        
    {:else}
        <!-- Fallback content -->
    {/if}
</Drawer>
<AppShell>
    <div class="flex flex-col h-full">
        <slot />
    </div>
	<svelte:fragment slot="footer"> 
    <div class="h-12">
        <TabGroup>
            <TabAnchor on:click={() => openDrawer('about')}>About</TabAnchor>
            <TabAnchor on:click={() => openDrawer('info')}>Info</TabAnchor>
            <TabAnchor on:click={() => openDrawer('contact')}>Contact</TabAnchor>
        </TabGroup>    
    </div>					
    </svelte:fragment>
</AppShell>