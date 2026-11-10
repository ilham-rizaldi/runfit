const epsilon = 0.0000001;

export function parseLength(input) {
  const value = input.trim();
  if (!/^\d{1,2}(?:[.,]\d{1,2})?$/.test(value)) return null;
  const length = Number(value.replace(',', '.'));
  return length >= 15 && length <= 45 ? length : null;
}

export function findSize(chart, length) {
  const { rows, rule, tolerance = 0, fillGaps = false } = chart;
  const first = rows[0];
  const last = rows.at(-1);
  const min = first[4] ?? first[0];
  const max = last[0];
  if (length < min - tolerance - epsilon || length > max + tolerance + epsilon) {
    return { kind: 'outside', min, max };
  }

  const intervals = rows.some(row => row[4] != null);
  if (intervals) {
    const bands = rows.filter(row => length >= (row[4] ?? row[0]) - epsilon && length <= row[0] + epsilon);
    if (bands.length) {
      return { kind: bands.length > 1 ? 'boundary' : 'band', primary: bands.at(-1), candidates: bands, min, max };
    }
  }

  const atLength = cm => rows.filter(row => Math.abs(row[0] - cm) < epsilon);
  const exact = atLength(length);
  if (exact.length) {
    return { kind: exact.length > 1 ? 'multiple' : 'exact', primary: exact[0], candidates: exact, min, max };
  }

  const highIndex = rows.findIndex(row => row[0] > length);
  const low = highIndex === -1 ? last : rows[highIndex - 1];
  const high = rows[highIndex];
  const candidates = [low, high].filter(Boolean);

  if (rule === 'nearest') {
    const nearest = candidates.reduce((best, row) => Math.abs(row[0] - length) <= Math.abs(best[0] - length) + epsilon ? row : best);
    if (tolerance && Math.abs(nearest[0] - length) > tolerance + epsilon) {
      return { kind: 'gap', candidates, min, max };
    }
    return { kind: 'nearest', primary: nearest, candidates, min, max };
  }

  if (!low || !high || (intervals && !fillGaps)) return { kind: 'gap', candidates, min, max };
  const upperOptions = atLength(high[0]);
  if (rule === 'choice') {
    return { kind: 'choice', primary: high, candidates: [...atLength(low[0]), ...upperOptions], min, max };
  }
  if (upperOptions.length > 1) {
    return { kind: 'multiple', primary: high, candidates: upperOptions, rounded: true, min, max };
  }
  return { kind: 'next', primary: high, candidates, min, max };
}
