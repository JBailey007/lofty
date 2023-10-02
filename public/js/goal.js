const newLoftyFormHandler = async (event) => {
  event.preventDefault();

  const lofty_name = document.querySelector('#lofty_name').value.trim();
  const note = document.querySelector('#note').value.trim();
  // const complete = document.querySelector('#complete').value.trim();

  if (lofty_name && note) {
    const response = await fetch(`/api/lofty`, {
      method: 'POST',
      body: JSON.stringify({ lofty_name, note, id}),
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

    //ATTAINABLE
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
        
// //TASK
// const newTaskFormHandler = async (event) => {
//     event.preventDefault();
  
//     const taskName = document.querySelector('#task-name').value.trim();
//     const taskNote = document.querySelector('#note').value.trim();
//     const taskComplete = document.querySelector('#complete').value.trim();
  
//     if (taskName && taskNote && taskComplete) {
//       const response = await fetch(`/api/task-routes`, {
//         method: 'POST',
//         body: JSON.stringify({ taskName, taskNote, taskComplete }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/ ');
//       } else {
//         alert('Failed to create task');
//       }
//     }
//   };
  
//   const delButtonHandlerTask = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/task-routes/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/task-routes');
//       } else {
//         alert('Failed to delete task');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-task-form')
//     .addEventListener('submit', newTaskFormHandler);
  
//   document
//     .querySelector('.task-list')
//     .addEventListener('click', delButtonHandlerTask);
  