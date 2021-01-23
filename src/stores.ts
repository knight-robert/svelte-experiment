import { writable } from 'svelte/store';

export const isMailingForm = writable(false);
export const toggleIsMailingFormOn = () => isMailingForm.update(() => true);
export const toggleIsMailingFormOff = () => isMailingForm.update(() => false);

export const isSent = writable(false);
export const toggleIsSentOn = () => isSent.update(() => true);
export const toggleIsSentOff = () => isSent.update(() => false);