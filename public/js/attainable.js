const newAttainableFormHandler = async (event) => {
    event.preventDefault();
  
    const attainable_name = document.querySelector('#attainable_name').value.trim();
    const note = document.querySelector('#note').value.trim();
    // const complete = document.querySelector('#complete').value.trim();
  
    if (attainable_name && note) {
      const response = await fetch(`/api/attainable`, {
        method: 'POST',
        body: JSON.stringify({ attainable_name, note}),
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
      .querySelector('.new-attainable-form')
      .addEventListener('submit', newAttainableFormHandler);