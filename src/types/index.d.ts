import {NavigatorScreenParams,ParamListBase} from '@react-navigation/native';
import React from 'react';

export interface ErrorResponse {
  error: {message: string; status_code: number};
}

export type Item = {
  userId: number;
  id: React.Key;
  title: string;
  body: string;
};

export type StackParamList = ParamListBase & {
  Main: undefined;
  addPersone: undefined;
  WelcomScreen: { step: number };
  Login: undefined;
  Register: undefined;
  addPersone: undefined;
  ChooseFromContact: undefined;
  someSetting: {email: string, name: string,password:string};
  SettingFrined: {data: string[], number:number};
  ImageViewerPage:undefined;
  LiquidScreen:undefined;
};

export type TabParamList = {
  Home: undefined;
  contact: undefined;
  Not: undefined;
  Setting: undefined;
};
