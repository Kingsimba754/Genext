<script>
    /** @type {import('./$types').LayoutData} */

    import '@public/global.css';

    // @ts-ignore
    import NavBar from '@components/common/NavBar.svelte';
    
</script>

<div class="page-container">
    <header>
        <NavBar />
    </header>
    <main>
        <slot />
    </main>
    <footer>

    </footer>
</div>