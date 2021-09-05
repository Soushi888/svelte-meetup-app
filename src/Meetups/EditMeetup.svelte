<script>
  import {createEventDispatcher} from "svelte";

  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

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
    });
  }

  function cancel() {
    dispatch('cancel');
  }
</script>

<Modal title="Edit Meetup" on:cancel>
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
    </form>

    <slot/>

    <div slot="footer">
        <Button on:click={submitForm}>Save</Button>
        <Button on:click={cancel} mode="outline">Cancel</Button>
    </div>
</Modal>

<style>
    form {
        width: 100%;
    }
</style>
