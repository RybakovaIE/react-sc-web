export interface ITarget {
  element: HTMLElement;
  addr?: number;
}

export interface IWindowEventData {
  type: string;
  payload?: Record<string, any>;
}

export const enum EWindowEvents {
  deleteScgElement = 'deleteScgElement',
  deleteScgElements = 'deleteScgElements',
  clearScene = 'clearScene',
  updateScg = 'updateScg',
  readyForRender = 'readyForRender',
  onInitializationFinished = 'onInitializationFinished',
  onContextMenu = 'onContextMenu',
}
