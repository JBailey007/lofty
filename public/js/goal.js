const newLoftyFormHandler = async (event) => {
  event.preventDefault();

  const lofty_name = document.querySelector('#lofty_name').value.trim();
  const note = document.querySelector('#note').value.trim();
  // const
  // const complete = document.querySelector('#complete').value.trim();

  if (lofty_name && note) {
    const response = await fetch(`/api/lofty`, {
      method: 'POST',
      body: JSON.stringify({ lofty_name, note}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(await response.json());
  }
    console.log("This has been clicked");
};
    // if (response.ok) {
  
  // const delButtonHandlerLofty = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/lofty-routes/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/lofty-routes');
  //     } else {
  //       alert('Failed to delete lofty');
  //     }
  //   }
  // };
  
  document
    .querySelector('.new-lofty-form')
    .addEventListener('submit', newLoftyFormHandler);
    
  
  // document
  //   .querySelector('.lofty-list')
  //   .addEventListener('click', delButtonHandlerLofty);