<script>
  import InputText from '../components/Input/InputText.svelte';
  import InputEmail from '../components/Input/InputEmail.svelte';
  import Checkbox from '../components/Checkbox/Checkbox.svelte';
  import Button from '../components/Button/Button.svelte';
  import InputNumber from '../components/Input/InputNumber.svelte';
  import { z } from 'zod';
  import TextArea from '../components/TextArea/TextArea.svelte';
  import Modal from '../components/Modal/Modal.svelte';
	let showModal = false;

  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    company: z.string().min(1, 'Company is required'),
    email: z.string().email('Invalid email address'),
    phone: z.number().min(0, 'Phone is required').optional(),
    subject: z.string().min(0, 'Subject is required').optional(),
    message: z.string().min(1, 'Message is required'),
    terms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions')
  });

  let formData = {
    name: '',
    company: '',
    email: '',
    phone: 0,
    subject: '',
    message: '',
    terms: false
  };

  let errors = {};

  function handleSubmit() {
    const result = schema.safeParse(formData);
    if (result.success) {
      console.log('Form submitted:', formData);
			showModal = true;
			setTimeout(() => {
				showModal = false;
			}, 4000);
      errors = {};
    } else {
      errors = result.error.flatten().fieldErrors;
      console.log('Validation errors:', errors);
    }
  }

</script>

<section class="homePage">
  <h1>Hello</h1>
  <div class="formWrapper">
    <div class="info">
      <h2>For business enquiries please use the form below</h2>
      <p>*Required</p>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="inputWrapper">
        <InputText 
          label="Name"
          name="name"
          placeholder=""
          bind:value={formData.name}
          required
					error={errors.name}
        />
        <InputText 
          label="Company"
          name="company"
          placeholder=""
          bind:value={formData.company}
          required
					error={errors.company}
        />
        <InputEmail 
          label="Email"
          name="email"
          placeholder=""
          bind:value={formData.email}
          required
					error={errors.email}
        />
        <InputNumber 
          label="Phone"
          name="phone"
          placeholder=""
          bind:value={formData.phone}
					error={errors.phone}
        />
        <InputText 
          label="Subject"
          name="subject"
          placeholder=""
          bind:value={formData.subject}
					error={errors.subject}
        />
				<TextArea
					label="Message"
					name="message"
					placeholder=""
					bind:value={formData.message}
					required
					error={errors.message}
				/>
      </div>
      <div>
				<div class="checkbox">
					<Checkbox
						checked={formData.terms} 
						onChange={() => formData.terms = !formData.terms} 
						id="terms" 
						name="terms" 
					/>
					<label for="terms">I accept <a href="https://youtube.com">Terms and Privacy Policy</a></label>
				</div>
				{#if errors.terms}
          <p class="error">{errors.terms}</p>
        {/if}
      </div>
      <Button 
        type="submit"
        className="submitBtn" 
        style="max-width: 121px;"
      >
        Send
      </Button>
    </form>
  </div>

	<Modal bind:isOpen={showModal}>
		<div class="successModal">
			<h2>Спасибо за данные</h2>
			<p>данные отправлены успешно!</p>
		</div>
	</Modal>
</section>

<style>
  @import './homePage.css'
</style>