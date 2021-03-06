'use strict';

const test = require('tape');
const proxyquire = require('proxyquire');

test('test basic resource loader', (t) => {
  const resourceLoader = require('../lib/resource-loader');
  t.equal(typeof resourceLoader, 'function', 'resourceLoader is a function');
  t.end();
});

test('test no .nodeshift directory using defaults', (t) => {
  const mockedfs = {
    readFile: (locations, options, cb) => { return cb(null, null); },
    readdir: (path, cb) => {
      // test default path
      t.equals(path, `${process.cwd()}/.nodeshift`, 'should be using default locations');
      const err = new Error('no directory found');
      err.code = 'ENOENT';
      return cb(err, null);
    }
  };
  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift'
  };

  const result = resourceLoader(config).then((resourceList) => {
    t.equals(Array.isArray(resourceList), true, 'returns an array');
    t.equal(resourceList.length, 0, 'should be length zero when no directory found');
    t.end();
  });

  t.equals(result instanceof Promise, true, 'resource loader function is a promise');
});

test('test using different nodeshift and projectLocation', (t) => {
  const config = {
    projectLocation: 'not_default',
    nodeshiftDirectory: '.nodeshift'
  };

  const mockedfs = {
    readFile: (locations, config, cb) => { return cb(null, null); },
    readdir: (path, cb) => {
      // test default path
      t.equals(path, `${config.projectLocation}/${config.nodeshiftDirectory}`, 'should be using non default locations');
      return cb(null, []);
    }
  };
  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs
  });

  resourceLoader(config).then((resourceList) => {
    t.end();
  });
});

test('test error with readdir', (t) => {
  const mockedfs = {
    readFile: (locations, options, cb) => { return cb(null, null); },
    readdir: (path, cb) => {
      const err = new Error('not a good error');
      err.code = 'NOT_ENOENT';
      return cb(err, null);
    }
  };
  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift'
  };

  resourceLoader(config).catch(() => {
    t.end();
  });
});

test('test only return .ymls or .yamls or .json', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => { return {}; }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      return cb(null, '{}');
    },
    readdir: (path, cb) => {
      // test default path
      return cb(null, ['yes-svc.yml', 'no.js', 'yes1-route.yml', 'yes3-secret.yaml', 'deployment.json']);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    namespace: 'my namespace'
  };

  resourceLoader(config).then((resourceList) => {
    t.equals(Array.isArray(resourceList), true, 'returns an array');
    t.equal(resourceList.length, 4, 'should be length 4');
    t.end();
  });
});

test('test error on kind mapping', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => { return {}; }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      const parts = locations.split('/');
      const file = parts[parts.length - 1];
      return cb(null, file);
    },
    readdir: (path, cb) => {
      // test default path
      return cb(null, ['name-kind.yml']);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    namespace: 'my namespace'
  };

  resourceLoader(config).catch((err) => {
    t.equal(err.message, 'unknown type: kind for file: name-kind.yml', 'should have error message if no kind is found');
    t.end();
  });
});

test('test error on kind from name', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => { return {}; }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      const parts = locations.split('/');
      const file = parts[parts.length - 1];
      return cb(null, file);
    },
    readdir: (path, cb) => {
      // test default path
      return cb(null, ['name.yml']);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    namespace: 'my namespace'
  };

  resourceLoader(config).catch((err) => {
    t.equal(err.message, 'No type given as part of the file name (e.g. \'app-rc.yml\') and no \'Kind\' defined in resource descriptor name.yml');
    t.end();
  });
});

test('test not overwriting metadata', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => { return { metadata: { name: 'here' } }; }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      const parts = locations.split('/');
      const file = parts[parts.length - 1];
      return cb(null, file);
    },
    readdir: (path, cb) => {
      // test default path
      return cb(null, ['yes-svc.yml']);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    namespace: 'my namespace'
  };

  resourceLoader(config).then((resourceList) => {
    t.equal(resourceList[0].metadata.name, 'here', 'not overwritten');
    t.end();
  });
});

test('test error reading file from list', (t) => {
  const mockedfs = {
    readFile: (locations, options, cb) => {
      return cb(new Error('this is an error'), null);
    },
    readdir: (path, cb) => {
      // test default path
      return cb(null, ['yes.yml', 'no.js', 'yes1.yml']);
    }
  };
  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift'
  };

  resourceLoader(config).catch(() => {
    t.pass();
    t.end();
  });
});

/* eslint no-template-curly-in-string: "off" */
test('test string substitution', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => {
      return {
        templates: {
          SSO_AUTH_SERVER_URL: '${SSO_AUTH_SERVER_URL}'
        }
      };
    }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      const parts = locations.split('/');
      const file = parts[parts.length - 1];
      return cb(null, file);
    },
    readdir: (path, cb) => {
      // test default path
      return cb(null, ['yes1-service.yml']);
    }
  };
  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    namespace: 'my namespace',
    definedProperties: [{ name: 'SSO_AUTH_SERVER_URL', value: 'https://yea' }]
  };

  resourceLoader(config).then((resourceList) => {
    t.equals(resourceList[0].templates.SSO_AUTH_SERVER_URL, 'https://yea', 'should have been substituted');
    t.end();
  });
});

test('test using custom resource location', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => { return {}; }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      return cb(null, '{}');
    },
    readdir: (path, cb) => {
      // test custom path
      t.equals(path, `${process.cwd()}/.nodeshift/prod`, 'should be using custom resource location');
      return cb(null, ['yes-svc.yml', 'yes1-route.yml', 'yes3-secret.yaml', 'deployment.json']);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    resourceProfile: 'prod',
    namespace: 'my namespace'
  };

  resourceLoader(config).then((resourceList) => {
    t.equals(Array.isArray(resourceList), true, 'returns an array');
    t.equal(resourceList.length, 4, 'should be length 4');
    t.end();
  });
});

test('test files at the top level with a subdirectory but no resourceProfile flag used', (t) => {
  const mockedHelper = {
    yamlToJson: (file) => { return {}; }
  };

  const mockedfs = {
    readFile: (locations, options, cb) => {
      return cb(null, '{}');
    },
    readdir: (path, cb) => {
      return cb(null, ['prod', 'yes3-secret.yaml', 'deployment.json']);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs,
    './helpers': mockedHelper
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    namespace: 'my namespace'
  };

  resourceLoader(config).then((resourceList) => {
    t.equals(Array.isArray(resourceList), true, 'returns an array');
    t.equal(resourceList.length, 2, 'should be length 2');
    t.end();
  });
});

test('test no resource directory while using the resourceProfile flag', (t) => {
  const mockedfs = {
    readFile: (locations, options, cb) => { return cb(null, null); },
    readdir: (path, cb) => {
      // test custom resource directory
      t.equals(path, `${process.cwd()}/.nodeshift/prod`, 'should be using custom resource location');
      const err = new Error('no directory found');
      err.code = 'ENOENT';
      return cb(err, null);
    }
  };

  const resourceLoader = proxyquire('../lib/resource-loader', {
    fs: mockedfs
  });

  const config = {
    projectLocation: process.cwd(),
    nodeshiftDirectory: '.nodeshift',
    resourceProfile: 'prod'
  };

  const result = resourceLoader(config).then((resourceList) => {
    t.equals(Array.isArray(resourceList), true, 'returns an array');
    t.equal(resourceList.length, 0, 'should be length zero when no directory found');
    t.end();
  });

  t.equals(result instanceof Promise, true, 'resource loader function is a promise');
});
