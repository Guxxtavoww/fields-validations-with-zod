import { ReactNode, FC } from 'react';

export type Children = {
  children: ReactNode;
};

export type FCWithChildren<
  ComponentProps extends object = {},
  IsChildrenRequired extends boolean = false
> = FC<
  IsChildrenRequired extends true
    ? ComponentProps & Children
    : ComponentProps & Partial<Children>
>;

export type Value = string | number | symbol;

export type LooseAutoComplete<T extends Value> = T | Omit<Value, T>;

export type ParseToReadonly<T extends object> = {
  readonly [K in keyof T]: T[K];
};
