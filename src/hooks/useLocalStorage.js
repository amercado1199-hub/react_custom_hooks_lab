import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
const [value, setValue] = useState(() => {
const savedValue = localStorage.getItem(key);
return savedValue !== null ? savedValue : initialValue;
});

useEffect(() => {
localStorage.setItem(key, value);
}, [key, value]);

return [value, setValue];
}