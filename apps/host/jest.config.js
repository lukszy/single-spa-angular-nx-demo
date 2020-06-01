module.exports = {
  name: 'host',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/host',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
