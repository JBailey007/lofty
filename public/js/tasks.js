const newTaskFormHandler = async (event) => {
    event.preventDefault();
  
    const task_name = document.querySelector('#task_name').value.trim();
    const note = document.querySelector('#note').value.trim();
    const attainable_parent = document.URL[document.URL.length - 1]
    // const complete = document.querySelector('#complete').value.trim();
  
    if (task_name && note) {
      const response = await fetch(`/api/task`, {
        method: 'POST',
        body: JSON.stringify({ task_name, note, attainable_parent}),
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
      .querySelector('.new-task-form')
      .addEventListener('submit', newTaskFormHandler);