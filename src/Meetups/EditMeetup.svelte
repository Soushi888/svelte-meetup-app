<script>
  import {createEventDispatcher} from "svelte";
  import {isNotEmpty, isValidEmail, isValidUrl} from "../util/validation";

  import meetups from "./meetups.store";

  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  const dispatch = createEventDispatcher();

  export let id = null;

  let title = "",
    subtitle = "",
    description = "",
    imageUrl = "",
    address = "",
    email = "";

  if (id) {
    let selectedMeetup;
    const unsubscribe = meetups.subscribe(items => {
      selectedMeetup = items.find(i => i.id === id)
    })
    let {title, subtitle, description, imageUrl, address, contactEmail: email} = selectedMeetup;
    unsubscribe();
  }

  let titleValid, subtitleValid, descriptionValid, imageUrlValid, addressValid, emailValid, formIsValid;

  $: titleValid = isNotEmpty(title);
  $: subtitleValid = isNotEmpty(subtitle);
  $: descriptionValid = isNotEmpty(description);
  $: imageUrlValid = isNotEmpty(imageUrl) && isValidUrl(imageUrl);
  $: addressValid = isNotEmpty(address);
  $: emailValid = isNotEmpty(email) && isValidEmail(email);
  $: formIsValid = titleValid && subtitleValid && descriptionValid && imageUrlValid && addressValid && emailValid;

  function submitForm() {
    const newMeetup = {
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail: email,
    };

    if (id) {
      meetups.updateMeetup(id, newMeetup)
    } else {
      meetups.addMeetup(newMeetup);
    }

    dispatch('save')
  }

  function cancel() {
    dispatch("cancel");
  }

</script>

<Modal title="Edit Meetup" on:cancel>
    <form on:submit|preventDefault={submitForm}>
        <TextInput id="title"
                   label="Title"
                   value={title}
                   valid={titleValid}
                   validityMessage="This field is required."
                   on:input={(evt) => (title = evt.target.value)}/>
        <TextInput id="subtitle"
                   label="Subtitle"
                   value={subtitle}
                   valid={subtitleValid}
                   validityMessage="This field is required."
                   on:input={(evt) => (subtitle = evt.target.value)}/>
        <TextInput id="address"
                   label="Address"
                   value={address}
                   valid={addressValid}
                   validityMessage="This field is required."
                   on:input={(evt) => (address = evt.target.value)}/>
        <TextInput id="imageUrl"
                   label="Image URL"
                   value={imageUrl}
                   valid={imageUrlValid}
                   validityMessage="Please enter a valid URL."
                   on:input={(evt) => (imageUrl = evt.target.value)}/>
        <TextInput id="email"
                   label="Email"
                   value={email}
                   valid={emailValid}
                   validityMessage="A valid email address must contain a @ and an extension."
                   type="email"
                   on:input={(evt) => (email = evt.target.value)}/>
        <TextInput id="description"
                   label="Description"
                   controlType="textarea"
                   valid={descriptionValid}
                   validityMessage="This field is required."
                   bind:value={description}/>
    </form>

    <div slot="footer">
        <Button on:click={submitForm} disabled="{!formIsValid}">Save</Button>
        <Button on:click={cancel} mode="outline">Cancel</Button>
    </div>
</Modal>

<style>
    form {
        width: 100%;
    }
</style>
