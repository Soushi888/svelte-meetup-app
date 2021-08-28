<script>
  import Header from "./UI/Header.svelte";

  const meetups = [
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
</script>

<Header/>
