function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  const total = days.reduce((sum, day) => sum + day.calories, 0);
  return total / days.length;
}
