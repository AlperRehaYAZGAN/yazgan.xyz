'use client';

import { useContext } from 'react';
import { WebContainerContext } from './WebcontainerProvider';

export function useWebContainer() {
  const webContainer = useContext(WebContainerContext);

  return webContainer;
}
