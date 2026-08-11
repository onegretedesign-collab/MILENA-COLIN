/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  text: string;
  avatarUrl?: string;
  rating?: number;
}

export interface CourseItem {
  id: string;
  title: string;
  category: string;
  image: string;
  checkoutUrl: string;
  price?: string;
  originalPrice?: string;
  badge?: string;
  description: string;
  features?: string[];
  initialLikes: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  ctaText: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
  iconName: "users" | "sparkles" | "heart" | "check" | "eye" | "puzzle";
}
