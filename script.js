document.getElementById("year").textContent = new Date().getFullYear();

function openEmailDraft(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("Mytecho enquiry");
  const body = encodeURIComponent(
`Hi Mytecho,

My name: ${name}
My email: ${email}

I need help with:
${message}

Thanks,
${name}`
  );

  // Change this to your real business email when ready:
  const to = "hello@mytecho.com.au";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false;
}
