// trigger an immediate page refresh when an update is found
// export const onServiceWorkerUpdateReady = () => window.location.reload();

export const onServiceWorkerUpdateReady = () => {
    // const answer = window.confirm(
    //   `UDAAN has had a new update! ` +
    //     `Reload to display the latest version?`
    // )
  
    // if (answer === true)  window.location.reload()
    window.location.reload(true);
}

export const onRouteUpdate = () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
        reg.update();
    });
};
