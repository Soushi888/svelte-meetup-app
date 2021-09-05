<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
  import {data} from "./data";

  let meetups = data;
  let errorMsg = "";
  let editMode = undefined;

  function addMeetup(evt) {
    const {title, subtitle, imageUrl, description, address, email} = evt.detail;
    if (title && subtitle && description && imageUrl && address && email) {
      const newMeetup = {
        id: Math.random().toString(),
        title,
        subtitle,
        description,
        imageUrl,
        address,
        contactEmail: email,
      };
      meetups = [newMeetup, ...meetups];
      errorMsg = "";
      editMode = null;
    } else {
      errorMsg = "Empty fields";
    }
  }

  function toggleFavorite(evt) {
    const id = evt.detail;
    const updatedMeetup = {...meetups.find((m) => m.id === id)};
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const meetupIndex = meetups.findIndex((m) => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<Header/>

<main>
    <div class="meetup-controls">
        <Button on:click={() => editMode = "add"}>New Meetup</Button>
    </div>

    {#if (editMode === "add")}
        <EditMeetup on:save={addMeetup}/>
    {/if}

    {#if errorMsg}
        <p class="error">{errorMsg}</p>
    {/if}

    <MeetupGrid {meetups} on:togglefavorite={toggleFavorite}/>
</main>

<style>
    main {
        margin-top: 4.5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }

    .error {
        color: red;
        text-align: center;
        font-weight: 700;
    }
</style>
