import { cubicOut } from 'svelte/easing';

/**
 * cardIn — анимация «влёта» карточки (in‑transition).
 * Напр.: появляется снизу, чуть поворачиваясь.
 */
export function cardIn(node, {
  delay = 0,
  duration = 600,
  angle = 10,   // угол наклона
  y = 50        // смещение по оси Y (в пикселях)
} = {}) {
  const style = getComputedStyle(node);
  const initial_opacity = +style.opacity || 1;

  return {
    delay,
    duration,
    easing: cubicOut,
    // t движется от 0 к 1 при появлении
    css: t => {
      const inv = 1 - t;
      return `
        opacity: ${t * initial_opacity};
        transform: translateY(${inv * y}px) rotate(${inv * angle}deg);
      `;
    }
  };
}

/**
 * cardOut — анимация «вылета» карточки (out‑transition).
 * Напр.: «уходит» вверх, слегка поворачиваясь.
 */
export function cardOut(node, {
  delay = 0,
  duration = 600,
  angle = -10,  // угол в другую сторону
  y = -50       // смещение вверх (отрицательное)
} = {}) {
  const style = getComputedStyle(node);
  const initial_opacity = +style.opacity || 1;

  return {
    delay,
    duration,
    easing: cubicOut,
    // при out:transition, Svelte двигает t от 1 к 0
    css: t => {
      const inv = 1 - t;
      return `
        opacity: ${t * initial_opacity};
        transform: translateY(${inv * y}px) rotate(${inv * angle}deg);
      `;
    }
  };
}
