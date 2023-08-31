type ModsType = Record<string, string | boolean>;

export const classNames = (
  main: string,
  mods: ModsType,
  additional: string[]
): string => {
  return [
    main,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, mode]) => Boolean(mode))
      .map(([cls, _]) => cls),
  ].join(' ');
};
