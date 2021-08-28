<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";

  let title = "";
  let subtitle = "";
  let description = "";
  let imageUrl = "";
  let address = "";
  let email = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Lear to code in 2 hours",
      description: "In this meetup we'll have some experts that will teach you how to code like an expert, from 0 to hero, in juste 2 hours !",
      imageUrl: "https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg",
      address: "4270 rue Saint-Zotique Est, MOntreal, Quebec, Canada, H1T 1L1",
      contactEmail: 'code@test.com'
    },
    {
      id: "m2",
      title: "Swimming competition",
      subtitle: "Let's compete for the title of the best swimmer",
      description: "In this meetup we'll swim to the death for the sake of a big virile competition about who is the swimmer with the most stamina of all times !",
      imageUrl: "https://cdn.pixabay.com/photo/2017/10/06/16/22/head-2823697_960_720.jpg",
      address: "4270 rue Saint-Zotique Est, MOntreal, Quebec, Canada, H1T 1L1",
      contactEmail: 'swim@test.com'
    }
  ]

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail: email
    };
    meetups = [newMeetup, ...meetups];

    console.log(meetups)
  }
</script>


<Header/>

<main>
    <form on:submit|preventDefault={addMeetup}>
        <TextInput id="title" label="Title" value="{title}" on:input={(evt) => title = evt.target.value}/>
        <TextInput id="subtitle" label="Subtitle" value={subtitle} on:input={(evt) => subtitle = evt.target.value}/>
        <TextInput id="address" label="Address" value={address} on:input={(evt) => address = evt.target.value}/>
        <TextInput id="imageUrl" label="Image URL"
                   value={imageUrl} on:input={(evt) => imageUrl = evt.target.value}/>
        <TextInput id="email" label="Email" value={email} type="email" on:input={(evt) => email = evt.target.value}/>
        <TextInput id="description" label="Description" controlType="textarea"
                   value={description} on:input={(evt) => description = evt.target.value}/>

        <button type="submit">Save</button>
    </form>

    <MeetupGrid {meetups}/>
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
</style>
