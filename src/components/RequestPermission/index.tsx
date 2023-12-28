"use client";

export const RequestPermission = () => (
  <button type="button" className="btn btn-primary" onClick={() => {
    if (!('Notification' in window)) {
      return;
    }

    Notification.requestPermission().then((permission) => {
      console.log(permission);
    });
  }}>
    request
  </button>
)
