const badKeywords = [
  'monster', 'chase', 'falling', 'lost', 'dark', 'fear', 'haunted', 'drowning', 'screaming',
  'late', 'exam', 'failure', 'embarrassed', 'dead', 'death', 'injury', 'forgot'
];

const goodKeywords = [
  'flying', 'love', 'peace', 'sunshine', 'friends', 'family', 'success',
  'mountains', 'rainbow', 'lottery', 'winning', 'achievement', 'celebration', 'adventure'
];

export function classifyDream(dreamName: string): 'Good' | 'Bad' {
  const name = dreamName.toLowerCase();

  const hasBad = badKeywords.some(word => name.includes(word));
  const hasGood = goodKeywords.some(word => name.includes(word));

  if (hasBad && !hasGood) return 'Bad';
  if (hasGood && !hasBad) return 'Good';

  // Fallback logic
  return name.length % 2 === 0 ? 'Good' : 'Bad';
}
