const SUBMIT_URL =
  'https://questions.greatfrontend.com/api/questions/contact-form';

async function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    try {
        if (form.action !== SUBMIT_URL) {
            alert('Incorrect form action value');
            return;
          }
      
          if (form.method.toLowerCase() !== 'post') {
            alert('Incorrect form method value');
            return;
          }

          const formData = new FormData(form);
          const response = await fetch(SUBMIT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
            }),
          });
          const text = await response.text();
          alert(text);
    }
    catch (e) {
        alert('Error submitting form!');
    }
}

export function ContactForm() {
    return (
    <form onSubmit={submitForm} action={SUBMIT_URL} method="post">
        <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea
          id="message-input"
          name="message"></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
    );
}