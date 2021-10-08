<script>
  import meetups from "./Meetups/meetups.store";

  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";

  let editMode = undefined;

  function addMeetup(evt) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }
</script>

<Header/>

<main>
    <div class="meetup-controls">
        <Button on:click={() => (editMode = "add")}>New Meetup</Button>
    </div>

    {#if editMode === "add"}
        <EditMeetup on:save={addMeetup} on:cancel={cancelEdit}/>
    {/if}

    <MeetupGrid meetups={$meetups}/>
</main>

<style>
    main {
        margin-top: 4.5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>
