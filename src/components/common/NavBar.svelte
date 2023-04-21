<script>
    
    let showNav = true;

    let previousYOffset = 0;

    const handleScroll = () => {

        showNav = window.pageYOffset < previousYOffset;

        previousYOffset = window.pageYOffset;
    }

</script>

<svelte:window on:scroll={handleScroll} />

<nav class="width-full flex justify-center" class:show={showNav}>
    <a href="#gene-search" class="nav-item">Home</a>
    <a href="#about" class="nav-item">About</a>
    <a href="/" class="nav-item">Login</a>
    <a href="/" class="nav-item">Signup</a>
</nav>