import React from 'react';

export interface Landmark {
  id: string;
  name: string;
  category: 'Nature' | 'Commerce' | 'Spirituality' | 'Infrastructure' | 'Health' | 'Education';
  description: string;
  imageUrl: string;
  details: string;
  location?: { lat: number; lng: number };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  timestamp: Date;
  sources?: { title: string; uri: string }[];
}

export interface Stat {
  label: string;
  value: string;
  subtext: string;
}

export interface DetailedSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  content: string;
  stats: string[];
}