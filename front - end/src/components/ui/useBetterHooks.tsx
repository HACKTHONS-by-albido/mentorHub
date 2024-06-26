import React, {useEffect, useState} from "react";

/**
 * Modified from link below
 * @see https://observablehq.com/@werehamster/avoiding-hydration-mismatch-when-using-react-hooks
 * @param mediaQueryString
 * @returns {unknown}
 */
export function useBetterMediaQuery(mediaQueryString: string) {
    const [matches, setMatches] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQueryString);
        const listener = () => setMatches(!!mediaQueryList.matches);
        listener();
        mediaQueryList.addListener(listener);
        return () => mediaQueryList.removeListener(listener);
    }, [mediaQueryString])

    return matches;
}