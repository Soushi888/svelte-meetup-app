<script>
  import meetups from "./Meetups/meetups.store";

  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";
  import MeetupDetails from "./Meetups/MeetupDetails.svelte";

  let editMode = undefined;
  let page = "overview";
  let pageData = {};

  function addMeetup(evt) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }

  function showDetails(evt) {
    console.log("Show details :", evt.detail)
    pageData.id = evt.detail;
    page = "details";
  }

  function closeDetails(evt) {
    page = "overview";
    pageData = {};
  }
</script>

<Header/>

<main>
    {#if (page === "overview")}
        <div class="meetup-controls">
            <Button on:click={() => (editMode = "add")}>New Meetup</Button>
        </div>

        {#if editMode === "add"}
            <EditMeetup on:save={addMeetup} on:cancel={cancelEdit}/>
        {/if}

        <MeetupGrid meetups={$meetups} on:showdetails={showDetails}/>
    {:else if (page === "details")}
        <MeetupDetails id={pageData.id} on:close={closeDetails}/>
    {/if}
</main>

<style>
    main {
        margin-top: 4.5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>
