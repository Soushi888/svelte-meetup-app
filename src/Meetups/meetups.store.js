import {writable} from "svelte/store";

export const meetups = writable([
  {
    id: "m1",
    title: "Coding Bootcamp",
    subtitle: "Lear to code in 2 hours",
    description: "In this meetup we'll have some experts that will teach you how to code like an expert, from zero to hero, in juste 2 hours !",
    imageUrl: "https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg",
    address: "4270 rue Saint-Zotique Est, Montreal, Quebec, Canada, H1T 1L1",
    contactEmail: 'code@test.com'
  },
  {
    id: "m2",
    title: "Swimming competition",
    subtitle: "Let's compete for the title of the best swimmer",
    description: "In this meetup we'll swim to the death for the sake of a big virile competition about who is the swimmer with the most stamina of all times !",
    imageUrl: "https://cdn.pixabay.com/photo/2017/10/06/16/22/head-2823697_960_720.jpg",
    address: "4270 rue Saint-Zotique Est, Montreal, Quebec, Canada, H1T 1L1",
    contactEmail: 'swim@test.com'
  }
])

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData, id: Math.random().toString(),
      isFavorite: false
    };

    meetups.update(items => {
      return [newMeetup, ...items]
    })
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updatedMeetup = {...items.find((i) => i.id === id)};
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex((i) => i.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;

      return updatedMeetups;
    })
  },
}

export default customMeetupsStore;
