<script>
  import {createEventDispatcher} from "svelte";
  import meetups from "./meetups.store";

  import Button from "../UI/Button.svelte";
  import Badge from "../UI/Badge.svelte";

  export let id, data;
  const {title, subtitle, imageUrl, description, address, contactEmail} = data;

  let isFavorite;
  $: isFavorite = data.isFavorite;

  const dispatch = createEventDispatcher();

  function toggleFavorite() {
    meetups.toggleFavorite(id);
  }
</script>

<article>
    <header>
        <h1 class:is-favorite={isFavorite}>{title}
            {#if isFavorite}
                <Badge>FAVORITE</Badge>
            {/if}
        </h1>
        <h2>{subtitle}</h2>
        <p class="address">Address : {address}</p>
    </header>
    <div class="image">
        <img src={imageUrl} alt={title}/>
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <Button href="mailto:{contactEmail}">Contact</Button>
        <Button mode="outline"
                color="{isFavorite ? null : 'success'}"
                on:click={toggleFavorite}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>

        <Button on:click={() => dispatch('showdetails', id)}>Show Details</Button>
    </footer>
</article>

<style>
    article {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
        background: white;
        margin: 1rem;
    }

    header,
    .content,
    footer {
        padding: 1rem;
    }

    .image {
        width: 100%;
        height: 14rem;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
        font-family: "Roboto Slab", sans-serif;
        display: flex;
        align-items: center;
    }

    h1.is-favorite {
        color: #01a129;
    }

    h2 {
        font-size: 1rem;
        color: #808080;
        margin: 0.5rem 0;
    }

    p {
        font-size: 1.25rem;
    }

    .address {
        padding-top: 10px;
        font-size: 1em;
    }
</style>
