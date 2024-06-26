export const categories = [
  { key: 1, classifications: ['cup', 'gs25', 'nhua', 'bottle'] },
  {
    key: 2,
    classifications: [
      'pin',
      'maxshell',
      'battery',
      'maxell',
      'batteries',
      'supper',
    ],
  },
];

export const removeUnicode = (text) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
