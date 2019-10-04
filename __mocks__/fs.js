// eslint-disable-next-line no-undef
const fs = jest.genMockFromModule('fs');
import { dirname, basename } from 'path';

let mockFiles = Object.create(null);

function __createMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = dirname(file);
    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(basename(file));
    mockFiles[dir][basename(file)] = newMockFiles[file];
  }
}
function existsSync(pathToDirectory) {
  return mockFiles[pathToDirectory];
}

fs.existsSync = existsSync;

fs.__createMockFiles = __createMockFiles;

export default fs;
