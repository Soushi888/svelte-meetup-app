<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import {data} from "./data";

  let title = "";
  let subtitle = "";
  let description = "";
  let imageUrl = "";
  let address = "";
  let email = "";

  let meetups = data;

  let errorMsg = "";

  function addMeetup() {
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

      console.log(meetups);
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
    <form on:submit|preventDefault={addMeetup}>
        <TextInput
                id="title"
                label="Title"
                value={title}
                on:input={(evt) => (title = evt.target.value)}
        />
        <TextInput
                id="subtitle"
                label="Subtitle"
                value={subtitle}
                on:input={(evt) => (subtitle = evt.target.value)}
        />
        <TextInput
                id="address"
                label="Address"
                value={address}
                on:input={(evt) => (address = evt.target.value)}
        />
        <TextInput
                id="imageUrl"
                label="Image URL"
                value={imageUrl}
                on:input={(evt) => (imageUrl = evt.target.value)}
        />
        <TextInput
                id="email"
                label="Email"
                value={email}
                type="email"
                on:input={(evt) => (email = evt.target.value)}
        />
        <TextInput
                id="description"
                label="Description"
                controlType="textarea"
                value={description}
                on:input={(evt) => (description = evt.target.value)}
        />

        <Button type="submit" caption="Save"/>
    </form>

    {#if errorMsg}
        <p class="error">{errorMsg}</p>
    {/if}

    <MeetupGrid {meetups} on:togglefavorite={toggleFavorite}/>
</main>

<style>
    main {
        margin-top: 4.5rem;
    }

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }

    .error {
        color: red;
        text-align: center;
        font-weight: 700;
    }
</style>
