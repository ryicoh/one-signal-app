"use client";

import OneSignal from "react-onesignal";

export const RequestPermission = () => (
  <button type="button" className="btn btn-primary" onClick={() => {
    OneSignal.Slidedown.promptPush({
      force: true,
      forceSlidedownOverNative: true,
    });
  }}>
    request
  </button>
)
