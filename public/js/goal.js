const newLoftyFormHandler = async (event) => {
    event.preventDefault();
  
    const loftyName = document.querySelector('#loftyName').value.trim();
    const loftyNote = document.querySelector('#note').value.trim();
    const loftyComplete = document.querySelector('#complete').value.trim();
  
    if (loftyName && loftyNote && loftyComplete) {
      const response = await fetch(`/api/lofty-routes`, {
        method: 'POST',
        body: JSON.stringify({ loftyName, loftyNote, loftyComplete }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create lofty');
      }
    }
  };
  
  const delButtonHandlerLofty = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/lofty-routes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/lofty-routes');
      } else {
        alert('Failed to delete lofty');
      }
    }
  };
  
  document
    .querySelector('.new-lofty-form')
    .addEventListener('submit', newLoftyFormHandler);
  
  document
    .querySelector('.lofty-list')
    .addEventListener('click', delButtonHandlerLofty);

    //ATTAINABLE
    const newAttainableFormHandler = async (event) => {
        event.preventDefault();
      
        const attainableName = document.querySelector('#attainable-name').value.trim();
        const attainableNote = document.querySelector('#note').value.trim();
        const attainableComplete = document.querySelector('#complete').value.trim();
      
        if (attainableName && attainableNote && attainableComplete) {
          const response = await fetch(`/api/attainable-routes`, {
            method: 'POST',
            body: JSON.stringify({ attainableName, attainableNote, attainableComplete }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            document.location.replace('/ ');
          } else {
            alert('Failed to create attainable');
          }
        }
      };
      
      const delButtonHandlerAttainable = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/attainable-routes/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/attainable-routes');
          } else {
            alert('Failed to delete attainable');
          }
        }
      };
      
      document
        .querySelector('.new-attainable-form')
        .addEventListener('submit', newAttainableFormHandler);
      
      document
        .querySelector('.attainable-list')
        .addEventListener('click', delButtonHandlerAttainable);
      
//TASK
const newTaskFormHandler = async (event) => {
    event.preventDefault();
  
    const taskName = document.querySelector('#task-name').value.trim();
    const taskNote = document.querySelector('#note').value.trim();
    const taskComplete = document.querySelector('#complete').value.trim();
  
    if (taskName && taskNote && taskComplete) {
      const response = await fetch(`/api/task-routes`, {
        method: 'POST',
        body: JSON.stringify({ taskName, taskNote, taskComplete }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/ ');
      } else {
        alert('Failed to create task');
      }
    }
  };
  
  const delButtonHandlerTask = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/task-routes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/task-routes');
      } else {
        alert('Failed to delete task');
      }
    }
  };
  
  document
    .querySelector('.new-task-form')
    .addEventListener('submit', newTaskFormHandler);
  
  document
    .querySelector('.task-list')
    .addEventListener('click', delButtonHandlerTask);
  