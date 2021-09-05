<script>
  import {createEventDispatcher} from "svelte";

  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";

  const dispatch = createEventDispatcher();

  let title = "";
  let subtitle = "";
  let description = "";
  let imageUrl = "";
  let address = "";
  let email = "";

  function submitForm() {
    dispatch('save', {
      title,
      subtitle,
      description,
      imageUrl,
      address,
      email
    })
  }
</script>

<form on:submit|preventDefault={submitForm}>
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

<style>
    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>
