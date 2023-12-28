"use client";
import { PropsWithChildren, useEffect, useRef } from "react";
import OneSignal from "react-onesignal";

export const oneSignalAppId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID!;

export const OneSignalInit = ({ children }: PropsWithChildren) => {
  const initialized = useRef<boolean>(false);

  const initializeOneSignal = async () => {
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    await OneSignal.init({
      appId: oneSignalAppId,
    });
  };

  useEffect(() => {
    initializeOneSignal();
  }, []);

  return <>{children}</>;
};

