# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2025-03-30)


### ⚠ BREAKING CHANGES

* This updates the default builder image to use Node 14 instead of Node 10
* removal of Node 8 support
* The api for the openshift rest client has changed slightly, but there should be no nodeshift api changes
* Changing the base s2i images
* Slight Refactor
* This removes the watch command
* this now uses the nodeshift/centos7-s2i-nodejs image by default. This should be a semver major change.

### src

* using ubi7/nodejs-10 as default image ([#372](https://github.com/lholmquist/nodeshift/issues/372)) ([0bc82bd](https://github.com/lholmquist/nodeshift/commit/0bc82bdf18a6bc0bb7195a95093bf91cd0c48294))


### Features

* add a flag, --build.incremental, that turns on incremental builds. ([#254](https://github.com/lholmquist/nodeshift/issues/254)) ([68be3dc](https://github.com/lholmquist/nodeshift/commit/68be3dcec18ebe4f784df902a9baebea6022d10a)), closes [#253](https://github.com/lholmquist/nodeshift/issues/253)
* add a token flag to pass in an auth token for API calls ([#529](https://github.com/lholmquist/nodeshift/issues/529)) ([4093fe0](https://github.com/lholmquist/nodeshift/commit/4093fe03588504aac8fcbee7acabb2c796ff632a))
* Add an `--expose` flag which when true will create a default route and expose the default service ([6e06ec6](https://github.com/lholmquist/nodeshift/commit/6e06ec6bcb9f5052b442bee02c019d761bd9ef8b))
* add the --deploy.env flag ([#226](https://github.com/lholmquist/nodeshift/issues/226)) ([74c482c](https://github.com/lholmquist/nodeshift/commit/74c482c282a903dc8201ef04ad2498bdba81bc35)), closes [#223](https://github.com/lholmquist/nodeshift/issues/223)
* Add the ability to deploy a node app to Kubernetes(Minikube) ([3e03c00](https://github.com/lholmquist/nodeshift/commit/3e03c002f9d6221d800b702c3190f0b6870ccf2e))
* add the imageTag flag. ([#258](https://github.com/lholmquist/nodeshift/issues/258)) ([399081e](https://github.com/lholmquist/nodeshift/commit/399081e55e664f0835a9946b66179fedfeee9eac))
* add the namespace flag ([#234](https://github.com/lholmquist/nodeshift/issues/234)) ([13e5316](https://github.com/lholmquist/nodeshift/commit/13e5316bb9e9dea505770271d4f865618dd60809)), closes [#233](https://github.com/lholmquist/nodeshift/issues/233)
* Adding web-app flag ([#395](https://github.com/lholmquist/nodeshift/issues/395)) ([d1d0c14](https://github.com/lholmquist/nodeshift/commit/d1d0c1429b12e3a00ad2cf754ec14639ff79e581))
* adds the --dockerImage flag. ([0d036f8](https://github.com/lholmquist/nodeshift/commit/0d036f8b6206d34cd92e647e4b9cf31705384c1b)), closes [#178](https://github.com/lholmquist/nodeshift/issues/178)
* BREAKING CHANGE: remove the nodeVersion flag. ([#298](https://github.com/lholmquist/nodeshift/issues/298)) ([1c104ff](https://github.com/lholmquist/nodeshift/commit/1c104ffd259d1a45fde9fb15820b78c5081a813e)), closes [#281](https://github.com/lholmquist/nodeshift/issues/281)
* **build-strategy:** Add Docker build strategy ([#442](https://github.com/lholmquist/nodeshift/issues/442)) ([384690f](https://github.com/lholmquist/nodeshift/commit/384690f1c6395b27dbfb131f2841c3c418848881))
* **build.env:** add a --build.env flag to specify build config environment variables ([0a43536](https://github.com/lholmquist/nodeshift/commit/0a43536607c4ec55e65744ba854d71db8462ce67)), closes [#208](https://github.com/lholmquist/nodeshift/issues/208)
* change the output Image Stream name and tag ([#347](https://github.com/lholmquist/nodeshift/issues/347)) ([3faa599](https://github.com/lholmquist/nodeshift/commit/3faa599dc932237575304310b003c595e5bc4cf9))
* **config-loader:** expose the configLocation options for the openshift-config-loader. ([#198](https://github.com/lholmquist/nodeshift/issues/198)) ([7462ead](https://github.com/lholmquist/nodeshift/commit/7462eada1944a34a221b8f864ce2e6834b4c27b6)), closes [#197](https://github.com/lholmquist/nodeshift/issues/197)
* Create a namespace/project if one doesn't exist when using the --namespace flag ([#275](https://github.com/lholmquist/nodeshift/issues/275)) ([202d71b](https://github.com/lholmquist/nodeshift/commit/202d71b584f15f282c94892c6113237c7e01cd34))
* create/update/remove a config map if there is one in the .nodeshift directory. ([#255](https://github.com/lholmquist/nodeshift/issues/255)) ([f6f96c7](https://github.com/lholmquist/nodeshift/commit/f6f96c74697d2e581f15127c68de5ceb0b228933)), closes [#203](https://github.com/lholmquist/nodeshift/issues/203)
* Default to Node 14 for the build image ([#536](https://github.com/lholmquist/nodeshift/issues/536)) ([76b6420](https://github.com/lholmquist/nodeshift/commit/76b6420503dc74f1e5944586cf39cf90cc620bbc))
* Define a subdirectory below .nodeshift/ that indicates where Openshift resources are stored ([#493](https://github.com/lholmquist/nodeshift/issues/493)) ([ed269ea](https://github.com/lholmquist/nodeshift/commit/ed269ea38aea9e9726bdbbf9a53c8b113561a2e7))
* deprecate apiServer and replace with server ([#527](https://github.com/lholmquist/nodeshift/issues/527)) ([e80e1d9](https://github.com/lholmquist/nodeshift/commit/e80e1d91d01b57850dafdb6a7d9d8e42a0f3807b))
* **enricher:** add runtime labels to resources. ([#380](https://github.com/lholmquist/nodeshift/issues/380)) ([1028af2](https://github.com/lholmquist/nodeshift/commit/1028af2c5776a54023d9e1ddca17f90b86c923ec)), closes [#374](https://github.com/lholmquist/nodeshift/issues/374)
* **enricher:** Addition of a Health Check Enricher. ([ec01ba5](https://github.com/lholmquist/nodeshift/commit/ec01ba5062efd77f037ad23e6989ef49124b53a5)), closes [#102](https://github.com/lholmquist/nodeshift/issues/102)
* **git-enricher:** Added a git enricher which will add annotations to the metadata. ([e46cf7d](https://github.com/lholmquist/nodeshift/commit/e46cf7dba67e84b32b6eb291efebf904c37a8e3f))
* **ingress:** create an Ingress if there is one in the .nodeshift directory ([#244](https://github.com/lholmquist/nodeshift/issues/244)) ([f98cad4](https://github.com/lholmquist/nodeshift/commit/f98cad47dcc87d8fe591c11d664ab514554a65ec)), closes [#238](https://github.com/lholmquist/nodeshift/issues/238)
* Knative Serving Deployment ([#454](https://github.com/lholmquist/nodeshift/issues/454)) ([88eed5d](https://github.com/lholmquist/nodeshift/commit/88eed5d3ee0870036c34ff30b62862704f284eeb))
* **knative:** Each deploy should create a new revision. ([#467](https://github.com/lholmquist/nodeshift/issues/467)) ([3ba9cb0](https://github.com/lholmquist/nodeshift/commit/3ba9cb0592417ac067dd072ff34d30cd45cb111a))
* Make the docker container tag configurable. ([#45](https://github.com/lholmquist/nodeshift/issues/45)) ([2cce930](https://github.com/lholmquist/nodeshift/commit/2cce9303f9aea118f5884a08f287f4773b781027))
* nodeshift now know how to handle a Secret resource file.   fixes [#68](https://github.com/lholmquist/nodeshift/issues/68) ([64a5098](https://github.com/lholmquist/nodeshift/commit/64a5098467cbaa13fc7e2263e5ffde656eabc3d9))
* Nodeshift should be able to use a Deployment type ([#478](https://github.com/lholmquist/nodeshift/issues/478)) ([816b0a3](https://github.com/lholmquist/nodeshift/commit/816b0a39b0c5c85746aaf478cc93ea6941da559b))
* **nodeshift:** pass new config loader options to the option config loader. ([8b83d08](https://github.com/lholmquist/nodeshift/commit/8b83d08ed8ce6ff8063458efea4b966a4547acf7)), closes [#66](https://github.com/lholmquist/nodeshift/issues/66)
* pass in a non-default configLocation. ([#400](https://github.com/lholmquist/nodeshift/issues/400)) ([f1bd1b3](https://github.com/lholmquist/nodeshift/commit/f1bd1b3cba5e64cbfd8356f842f1c16e42f2e036))
* **project-archiver:** Adding .gitignore ([#463](https://github.com/lholmquist/nodeshift/issues/463)) ([3f7d48d](https://github.com/lholmquist/nodeshift/commit/3f7d48d2661a34fd5c46f3d2c26f1532f16d6de4))
* remove deprecation warnings from openshift rest client ([#398](https://github.com/lholmquist/nodeshift/issues/398)) ([2b97f49](https://github.com/lholmquist/nodeshift/commit/2b97f491eaf252ed0166eb1cf6f6067d081a66c9))
* Remove Watch command ([#296](https://github.com/lholmquist/nodeshift/issues/296)) ([fa79166](https://github.com/lholmquist/nodeshift/commit/fa79166f85c059636117fd7019e661cfa17a1591)), closes [#280](https://github.com/lholmquist/nodeshift/issues/280)
* Replacing rimraf with custom module ([#413](https://github.com/lholmquist/nodeshift/issues/413)) ([9351d45](https://github.com/lholmquist/nodeshift/commit/9351d4527cd1688ef5b349ca711425c37f0e0cce))
* update references of bucharest-gold to use the nodeshift namespace ([#269](https://github.com/lholmquist/nodeshift/issues/269)) ([6092108](https://github.com/lholmquist/nodeshift/commit/60921089e76eaa133b4dc4668d806e6259f9aacc)), closes [#268](https://github.com/lholmquist/nodeshift/issues/268)
* Update to latest Openshift Rest Client ([#293](https://github.com/lholmquist/nodeshift/issues/293)) ([e73db9c](https://github.com/lholmquist/nodeshift/commit/e73db9ce98f0040d50a035b4b749596d19724314))
* use async/await where appropriate ([#48](https://github.com/lholmquist/nodeshift/issues/48)) ([4735be4](https://github.com/lholmquist/nodeshift/commit/4735be4ba6b84f58f08c6a0aa04eb19f2669619c))
* Use passed in credentials to deploy instead of getting the local kube config ([#524](https://github.com/lholmquist/nodeshift/issues/524)) ([7612ef8](https://github.com/lholmquist/nodeshift/commit/7612ef8b447210065a0b23a3b733e0aabade2e3e))


### Bug Fixes

* actually obey 'ignore' in the --metadata.out option ([#157](https://github.com/lholmquist/nodeshift/issues/157)) ([8d85fbd](https://github.com/lholmquist/nodeshift/commit/8d85fbd59a5b3d8b04408666b2db21a024c8df63))
* add a name (http) to the service port ([#218](https://github.com/lholmquist/nodeshift/issues/218)) ([c599dc0](https://github.com/lholmquist/nodeshift/commit/c599dc0813e8347d2d05c08b066f0d0483d2d669))
* add the --no-perm=true option to the oc rsync command ([#277](https://github.com/lholmquist/nodeshift/issues/277)) ([b4695c6](https://github.com/lholmquist/nodeshift/commit/b4695c6b51e69c2af3dc7b5ab90682db6756b5dd)), closes [#274](https://github.com/lholmquist/nodeshift/issues/274)
* **archiver:** fix for source archiver when no files property is found in the package.json ([3c856e8](https://github.com/lholmquist/nodeshift/commit/3c856e8d2e0e1cec1a7a4ab196261314dd25f013)), closes [#200](https://github.com/lholmquist/nodeshift/issues/200)
* **build-watcher:** update how strictSSL option is found ([6c61ae6](https://github.com/lholmquist/nodeshift/commit/6c61ae63e6cc9adc07ae1e5bd1027a0753a60beb))
* build.recreate should also check the string version of true/false ([#297](https://github.com/lholmquist/nodeshift/issues/297)) ([140b13a](https://github.com/lholmquist/nodeshift/commit/140b13ad759b4abfcc9ccf9b8a027753b920102d)), closes [#295](https://github.com/lholmquist/nodeshift/issues/295)
* **build:** Adding the configuration for coveralls ([#516](https://github.com/lholmquist/nodeshift/issues/516)) ([74dbf89](https://github.com/lholmquist/nodeshift/commit/74dbf899fbb296553dae539be56db0a23ee0c719))
* **config:** add package name sanitisation ([#212](https://github.com/lholmquist/nodeshift/issues/212)) ([1c18b2a](https://github.com/lholmquist/nodeshift/commit/1c18b2a3abab8e3f58f1f9973d6259ab1e98e3b3)), closes [#211](https://github.com/lholmquist/nodeshift/issues/211)
* **config:** Allow scoped applications in the package name. ([#539](https://github.com/lholmquist/nodeshift/issues/539)) ([0e4a5db](https://github.com/lholmquist/nodeshift/commit/0e4a5db9941468dc88afc75c88d463ed7c7ef8df)), closes [#538](https://github.com/lholmquist/nodeshift/issues/538)
* container image name should be the project name ([#83](https://github.com/lholmquist/nodeshift/issues/83)) ([7fa4424](https://github.com/lholmquist/nodeshift/commit/7fa442414ca601028e11722d58455653c7dd195e))
* default enrichers should be named properly ([68eb2fa](https://github.com/lholmquist/nodeshift/commit/68eb2fa7a67178e8280b72e9b96ab009b21a6a88))
* deployment enricher should also look for DeploymentConfig kind ([6a2c162](https://github.com/lholmquist/nodeshift/commit/6a2c16229d5e6ba1f6c7b0e81705774c4c0ee78a)), closes [#271](https://github.com/lholmquist/nodeshift/issues/271)
* fix typo in CLI option ([3bc2ac6](https://github.com/lholmquist/nodeshift/commit/3bc2ac6a9bfd34d2d1d61cdb704246b33282b109))
* **health-check enricher:** don't fail if there is no dependencies prop in the package.json ([#250](https://github.com/lholmquist/nodeshift/issues/250)) ([96789c1](https://github.com/lholmquist/nodeshift/commit/96789c1c4d2cec4ad517df82b0e6e9391c911ad4)), closes [#249](https://github.com/lholmquist/nodeshift/issues/249)
* increase build wait times linearly ([#62](https://github.com/lholmquist/nodeshift/issues/62)) ([356c53d](https://github.com/lholmquist/nodeshift/commit/356c53d7b9ae1ce449ba08c48f40681c2e064987))
* label enricher should be called labels not label ([0074e5b](https://github.com/lholmquist/nodeshift/commit/0074e5b0d0e6edfbe862329b93d5ace4e22db13d))
* **lint:** update lint script.  fix linting issues ([#82](https://github.com/lholmquist/nodeshift/issues/82)) ([8acaae3](https://github.com/lholmquist/nodeshift/commit/8acaae3eb89ba6a620a7beca2d1a691a83309575))
* load the projectLocation not relative to the nodeshift-config.js file ([#302](https://github.com/lholmquist/nodeshift/issues/302)) ([eaf0046](https://github.com/lholmquist/nodeshift/commit/eaf00467295e5be8ed69db982b96a7b75d32ff1b)), closes [#301](https://github.com/lholmquist/nodeshift/issues/301)
* make --quiet flag work again ([#155](https://github.com/lholmquist/nodeshift/issues/155)) ([f9a5cfb](https://github.com/lholmquist/nodeshift/commit/f9a5cfbc9e4f7b69ea17536ed1d90b1c13ad7ad7))
* make sure the pod is initialized first before trying to get the log ([66a7e8d](https://github.com/lholmquist/nodeshift/commit/66a7e8d54bb024ed7ce1a3ac2b04689dfc4ef3a8)), closes [#164](https://github.com/lholmquist/nodeshift/issues/164)
* namespace.name spelling/parsing error ([#283](https://github.com/lholmquist/nodeshift/issues/283)) ([afb2a64](https://github.com/lholmquist/nodeshift/commit/afb2a642c1fffd898d75e7837c68575606b7bb69))
* new request and openshift-rest-client version to fix nsp ([cc57558](https://github.com/lholmquist/nodeshift/commit/cc57558a9d9356bd6f3e59c315c1c79a1738de7d))
* no need for .js to be at the end in the require ([b7af0c0](https://github.com/lholmquist/nodeshift/commit/b7af0c0b0589e997d1555d3b1f9423e25a4bca84))
* **nodeshift-config:** allow config properties to overwritten with new rest client update ([#187](https://github.com/lholmquist/nodeshift/issues/187)) ([9587efb](https://github.com/lholmquist/nodeshift/commit/9587efbbfc170ef2bf7c595a7d601459d8cdebc5))
* **nodeshift:** No longer check and emit a warning for non-standard Node versions. ([fa0c44e](https://github.com/lholmquist/nodeshift/commit/fa0c44e65daabada720b24477f5cbe768f5936c9)), closes [#194](https://github.com/lholmquist/nodeshift/issues/194)
* only small typo fix ([#61](https://github.com/lholmquist/nodeshift/issues/61)) ([9c148b6](https://github.com/lholmquist/nodeshift/commit/9c148b6de48b929d540e7a9634d25d21f62ffe08))
* package.json & package-lock.json to reduce vulnerabilities ([#485](https://github.com/lholmquist/nodeshift/issues/485)) ([c249a8f](https://github.com/lholmquist/nodeshift/commit/c249a8f6a378882c6aa1be5bd3dc17da7c578e2a))
* package.json & package-lock.json to reduce vulnerabilities ([#486](https://github.com/lholmquist/nodeshift/issues/486)) ([80f85bc](https://github.com/lholmquist/nodeshift/commit/80f85bc600813cf86b66051eed1e8bdc862b27b3))
* package.json & package-lock.json to reduce vulnerabilities ([#506](https://github.com/lholmquist/nodeshift/issues/506)) ([7e3ffdb](https://github.com/lholmquist/nodeshift/commit/7e3ffdb6a1401f1945b868f1a62ab5124224f50c))
* package.json & package-lock.json to reduce vulnerabilities ([#531](https://github.com/lholmquist/nodeshift/issues/531)) ([4cfdc8f](https://github.com/lholmquist/nodeshift/commit/4cfdc8f03099341b8f873dd4e1c6ecda48db8522))
* **package:** update openshift-config-loader to version 0.3.0 ([#65](https://github.com/lholmquist/nodeshift/issues/65)) ([f5b88c3](https://github.com/lholmquist/nodeshift/commit/f5b88c3e4267b81992d81f0f24cd9edda28dc2fb))
* **package:** update request to version 2.87.0 ([#224](https://github.com/lholmquist/nodeshift/issues/224)) ([2af9b47](https://github.com/lholmquist/nodeshift/commit/2af9b470cf5081341c1e94b4ab72bc1432baa705))
* **package:** update yargs to version 10.0.3 ([81effff](https://github.com/lholmquist/nodeshift/commit/81effff386ce3155b658fec3c28b9159d28d1f18))
* **package:** update yargs to version 9.0.1 ([e5efac9](https://github.com/lholmquist/nodeshift/commit/e5efac9a4a22fd710bbf478e11bf13731861c13d))
* projectLocation should be set correctly. ([#189](https://github.com/lholmquist/nodeshift/issues/189)) ([4e061a9](https://github.com/lholmquist/nodeshift/commit/4e061a9f8d6fe0ae16ab523e3f1bc8c8ebf74fea)), closes [#188](https://github.com/lholmquist/nodeshift/issues/188)
* promisifying the newest release of mkdirp breaks mkdirp. ([#412](https://github.com/lholmquist/nodeshift/issues/412)) ([94a22f2](https://github.com/lholmquist/nodeshift/commit/94a22f28ac2d823e85c7d3b6cb1b4c32ea2bb166)), closes [#411](https://github.com/lholmquist/nodeshift/issues/411)
* **README:** remove the section talking about default environment variables being added to the DeploymentConfig ([14cfb74](https://github.com/lholmquist/nodeshift/commit/14cfb7457b2fafeb7bec103e3e454200fdeb1ee9)), closes [#231](https://github.com/lholmquist/nodeshift/issues/231)
* remove the hardcoded 8080 for ports. ([bd3f10b](https://github.com/lholmquist/nodeshift/commit/bd3f10b9ce0a9dd6e5142c12ecbde94df2499285)), closes [#216](https://github.com/lholmquist/nodeshift/issues/216)
* **secrets:** fix bug with secret naming. ([5e9d324](https://github.com/lholmquist/nodeshift/commit/5e9d3242c47bade757f1202f65a362b58f7edd50)), closes [#73](https://github.com/lholmquist/nodeshift/issues/73)
* some typos in code and comments ([#330](https://github.com/lholmquist/nodeshift/issues/330)) ([b510e9d](https://github.com/lholmquist/nodeshift/commit/b510e9d7f7bc6c6e150b2f144c73c015fd44b103))
* Template parameters should be inline with the openshift templates. ([0d6c8cc](https://github.com/lholmquist/nodeshift/commit/0d6c8cc3f5e0707164344d33581a8b5068ba59a1)), closes [#103](https://github.com/lholmquist/nodeshift/issues/103)
* travis-ci should use npm install instead of npm ci ([#242](https://github.com/lholmquist/nodeshift/issues/242)) ([938ec7d](https://github.com/lholmquist/nodeshift/commit/938ec7da1a6f2b6cd269d20dfacf9ed221e407fc))
* update and pin the openshift-rest-client version to 4.0.1 ([#435](https://github.com/lholmquist/nodeshift/issues/435)) ([e09d2be](https://github.com/lholmquist/nodeshift/commit/e09d2be07c6a7cf97d4fcf9eb4a9682ec7a8d9e7))
* update openshift-rest-client and request for security vulnerability.  https://nodesecurity.io/advisories/606 ([#220](https://github.com/lholmquist/nodeshift/issues/220)) ([95cf4c9](https://github.com/lholmquist/nodeshift/commit/95cf4c9c5b7a0052cc75b759d756a31f67b24324))
* update travis and package.json to only use node 8+ ([7d9ff92](https://github.com/lholmquist/nodeshift/commit/7d9ff92e5622f3bf1602b3d5c69cf85ccf873ea8))
* upgrade cross-env from 7.0.0 to 7.0.1 ([#428](https://github.com/lholmquist/nodeshift/issues/428)) ([56de6c6](https://github.com/lholmquist/nodeshift/commit/56de6c65c3dc1d5c143fbf5c763a29b99148e6a8))
* upgrade cross-env from 7.0.2 to 7.0.3 ([#519](https://github.com/lholmquist/nodeshift/issues/519)) ([1ce7f1f](https://github.com/lholmquist/nodeshift/commit/1ce7f1fbb9f4211fa16b79738aefa0345c2c77f2))
* upgrade documentation from 12.1.4 to 12.2.0 ([#438](https://github.com/lholmquist/nodeshift/issues/438)) ([a6820a1](https://github.com/lholmquist/nodeshift/commit/a6820a1e529e9e88549379ec0f59dddfa03107d9))
* upgrade documentation from 13.0.2 to 13.1.0 ([#505](https://github.com/lholmquist/nodeshift/issues/505)) ([8a80bda](https://github.com/lholmquist/nodeshift/commit/8a80bdaf0797cf6f74a42d9825b85aacbf55288e))
* upgrade eslint-plugin-import from 2.22.0 to 2.22.1 ([#499](https://github.com/lholmquist/nodeshift/issues/499)) ([e8714d9](https://github.com/lholmquist/nodeshift/commit/e8714d95ab4df9eb7f95a1d4a378f8a7a5e5b765))
* upgrade eslint-plugin-node from 11.0.0 to 11.1.0 ([#437](https://github.com/lholmquist/nodeshift/issues/437)) ([591646e](https://github.com/lholmquist/nodeshift/commit/591646e1ce170ca0c630c832c9e57abdb6289d67))
* upgrade eslint-plugin-standard from 4.0.1 to 4.0.2 ([#504](https://github.com/lholmquist/nodeshift/issues/504)) ([8902b01](https://github.com/lholmquist/nodeshift/commit/8902b0143653138555094a39889918ee36cb614a))
* upgrade eslint-plugin-standard from 4.0.2 to 4.1.0 ([#509](https://github.com/lholmquist/nodeshift/issues/509)) ([f47fa95](https://github.com/lholmquist/nodeshift/commit/f47fa9515ae4a409ead90ff5b9588f12625dd6ec))
* upgrade js-yaml from 3.13.1 to 3.14.0 ([#461](https://github.com/lholmquist/nodeshift/issues/461)) ([afc4cb3](https://github.com/lholmquist/nodeshift/commit/afc4cb3153c3326e60d17f0111d3751d5d80518d))
* upgrade js-yaml from 3.14.0 to 3.14.1 ([#521](https://github.com/lholmquist/nodeshift/issues/521)) ([8564710](https://github.com/lholmquist/nodeshift/commit/85647107863009a523728ac43ba5b9d1d4b02221))
* upgrade nock from 12.0.0 to 12.0.2 ([#427](https://github.com/lholmquist/nodeshift/issues/427)) ([8097b9d](https://github.com/lholmquist/nodeshift/commit/8097b9d38141898f046e655e1746c383c902992f))
* upgrade sinon from 9.0.2 to 9.0.3 ([#489](https://github.com/lholmquist/nodeshift/issues/489)) ([c565b23](https://github.com/lholmquist/nodeshift/commit/c565b23d615338c187c5adc70294958c54c48385))
* upgrade sinon from 9.0.3 to 9.1.0 ([#501](https://github.com/lholmquist/nodeshift/issues/501)) ([dc3bf1a](https://github.com/lholmquist/nodeshift/commit/dc3bf1a32d2deb153783d911e74b48f85b8ab40c))
* upgrade sinon from 9.1.0 to 9.2.0 ([#502](https://github.com/lholmquist/nodeshift/issues/502)) ([5ad111e](https://github.com/lholmquist/nodeshift/commit/5ad111e56a07938db112d60980824fad2e88223c))
* upgrade sinon from 9.2.0 to 9.2.1 ([#508](https://github.com/lholmquist/nodeshift/issues/508)) ([94b3ed1](https://github.com/lholmquist/nodeshift/commit/94b3ed174c11790a4c450d046934d6705eb1ba92))
* upgrade sinon from 9.2.1 to 9.2.2 ([#522](https://github.com/lholmquist/nodeshift/issues/522)) ([3873041](https://github.com/lholmquist/nodeshift/commit/38730419160ab2a5904d9fc2d2014371a630ac6d))
* upgrade sinon from 9.2.2 to 9.2.3 ([#534](https://github.com/lholmquist/nodeshift/issues/534)) ([dc77ebc](https://github.com/lholmquist/nodeshift/commit/dc77ebc3fabe9ad53aef6debe43a9d9a6f1bb872))
* upgrade sinon from 9.2.3 to 9.2.4 ([#541](https://github.com/lholmquist/nodeshift/issues/541)) ([089809e](https://github.com/lholmquist/nodeshift/commit/089809e0fe7c8b95be1c6334175dd87b937075b6))
* upgrade standard-version from 8.0.1 to 8.0.2 ([#482](https://github.com/lholmquist/nodeshift/issues/482)) ([82c962c](https://github.com/lholmquist/nodeshift/commit/82c962c00f5cfd7030be5f71116ffe21b4f07b2f))
* upgrade standard-version from 9.0.0 to 9.1.0 ([#532](https://github.com/lholmquist/nodeshift/issues/532)) ([7e46c89](https://github.com/lholmquist/nodeshift/commit/7e46c8977a250241edb3bc1074662b5e16da907b))
* upgrade tape from 4.13.0 to 4.13.2 ([#429](https://github.com/lholmquist/nodeshift/issues/429)) ([f064833](https://github.com/lholmquist/nodeshift/commit/f064833f04fb2efb37b1fb49714a214a3db82e04))
* upgrade tar from 6.0.2 to 6.0.5 ([#492](https://github.com/lholmquist/nodeshift/issues/492)) ([14a3b1f](https://github.com/lholmquist/nodeshift/commit/14a3b1f6a0b6177fed38eeda2a86fb195f9d88f1))
* upgrade tar from 6.0.5 to 6.1.0 ([#535](https://github.com/lholmquist/nodeshift/issues/535)) ([f600596](https://github.com/lholmquist/nodeshift/commit/f60059631e55f89931813d72849344b91b11b269))
* upgrade yargs from 15.1.0 to 15.2.0 ([#426](https://github.com/lholmquist/nodeshift/issues/426)) ([fefb21e](https://github.com/lholmquist/nodeshift/commit/fefb21eacfd012d0babee1e16b56447b5fe0e1be))
* upgrade yargs from 15.4.0 to 15.4.1 ([#487](https://github.com/lholmquist/nodeshift/issues/487)) ([2744f85](https://github.com/lholmquist/nodeshift/commit/2744f8558377eb42385866edd6c318805bdc9a20))
* upgrade yargs from 16.0.0 to 16.1.0 ([#507](https://github.com/lholmquist/nodeshift/issues/507)) ([a95cb44](https://github.com/lholmquist/nodeshift/commit/a95cb44ed1e21f7066b9c79d22325734f04bd13b))
* upgrade yargs from 16.1.0 to 16.1.1 ([#511](https://github.com/lholmquist/nodeshift/issues/511)) ([28a8408](https://github.com/lholmquist/nodeshift/commit/28a8408d49e12515ea1ce46c20f5fc7a3afe9a17))
* upgrade yargs from 16.1.1 to 16.2.0 ([#520](https://github.com/lholmquist/nodeshift/issues/520)) ([0a2dc42](https://github.com/lholmquist/nodeshift/commit/0a2dc423e18626f8b4a9788e3a047e99fa4bda0d))
* when the projectLocation flag is used and no file property in the package.json, use the correct location ([58e340a](https://github.com/lholmquist/nodeshift/commit/58e340aa538d08f110a40de54d8d4b80fe1e9432)), closes [#303](https://github.com/lholmquist/nodeshift/issues/303)


### Miscellaneous Chores

* Engine parameter targets node 10+ ([#406](https://github.com/lholmquist/nodeshift/issues/406)) ([c820b80](https://github.com/lholmquist/nodeshift/commit/c820b80de0650a3c1dbf0d6e8098c20cd4bb198b))

### [8.0.1](https://www.github.com/nodeshift/nodeshift/compare/v8.0.0...v8.0.1) (2021-02-12)


### Bug Fixes

* **config:** Allow scoped applications in the package name. ([#539](https://www.github.com/nodeshift/nodeshift/issues/539)) ([0e4a5db](https://www.github.com/nodeshift/nodeshift/commit/0e4a5db9941468dc88afc75c88d463ed7c7ef8df)), closes [#538](https://www.github.com/nodeshift/nodeshift/issues/538)

## [8.0.0](https://www.github.com/nodeshift/nodeshift/compare/v7.5.0...v8.0.0) (2021-02-01)


### ⚠ BREAKING CHANGES

* This updates the default builder image to use Node 14 instead of Node 10

### Features

* Default to Node 14 for the build image ([#536](https://www.github.com/nodeshift/nodeshift/issues/536)) ([76b6420](https://www.github.com/nodeshift/nodeshift/commit/76b6420503dc74f1e5944586cf39cf90cc620bbc))


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([#531](https://www.github.com/nodeshift/nodeshift/issues/531)) ([4cfdc8f](https://www.github.com/nodeshift/nodeshift/commit/4cfdc8f03099341b8f873dd4e1c6ecda48db8522))
* upgrade sinon from 9.2.2 to 9.2.3 ([#534](https://www.github.com/nodeshift/nodeshift/issues/534)) ([dc77ebc](https://www.github.com/nodeshift/nodeshift/commit/dc77ebc3fabe9ad53aef6debe43a9d9a6f1bb872))
* upgrade standard-version from 9.0.0 to 9.1.0 ([#532](https://www.github.com/nodeshift/nodeshift/issues/532)) ([7e46c89](https://www.github.com/nodeshift/nodeshift/commit/7e46c8977a250241edb3bc1074662b5e16da907b))
* upgrade tar from 6.0.5 to 6.1.0 ([#535](https://www.github.com/nodeshift/nodeshift/issues/535)) ([f600596](https://www.github.com/nodeshift/nodeshift/commit/f60059631e55f89931813d72849344b91b11b269))

## [7.5.0](https://www.github.com/nodeshift/nodeshift/compare/v7.4.0...v7.5.0) (2021-01-13)


### Features

*  add a token flag to pass in an auth token for API calls ([#529](https://www.github.com/nodeshift/nodeshift/issues/529)) ([4093fe0](https://www.github.com/nodeshift/nodeshift/commit/4093fe03588504aac8fcbee7acabb2c796ff632a))
* deprecate apiServer and replace with server ([#527](https://www.github.com/nodeshift/nodeshift/issues/527)) ([e80e1d9](https://www.github.com/nodeshift/nodeshift/commit/e80e1d91d01b57850dafdb6a7d9d8e42a0f3807b))

## [7.4.0](https://www.github.com/nodeshift/nodeshift/compare/v7.3.0...v7.4.0) (2021-01-08)


### Features

* Use passed in credentials to deploy instead of getting the local kube config ([#524](https://www.github.com/nodeshift/nodeshift/issues/524)) ([7612ef8](https://www.github.com/nodeshift/nodeshift/commit/7612ef8b447210065a0b23a3b733e0aabade2e3e))

## [7.3.0](https://www.github.com/nodeshift/nodeshift/compare/v7.2.1...v7.3.0) (2021-01-04)


### Features

* Add the ability to deploy a node app to Kubernetes(Minikube) ([3e03c00](https://www.github.com/nodeshift/nodeshift/commit/3e03c002f9d6221d800b702c3190f0b6870ccf2e))


### Bug Fixes

* upgrade cross-env from 7.0.2 to 7.0.3 ([#519](https://www.github.com/nodeshift/nodeshift/issues/519)) ([1ce7f1f](https://www.github.com/nodeshift/nodeshift/commit/1ce7f1fbb9f4211fa16b79738aefa0345c2c77f2))
* upgrade js-yaml from 3.14.0 to 3.14.1 ([#521](https://www.github.com/nodeshift/nodeshift/issues/521)) ([8564710](https://www.github.com/nodeshift/nodeshift/commit/85647107863009a523728ac43ba5b9d1d4b02221))
* upgrade sinon from 9.2.1 to 9.2.2 ([#522](https://www.github.com/nodeshift/nodeshift/issues/522)) ([3873041](https://www.github.com/nodeshift/nodeshift/commit/38730419160ab2a5904d9fc2d2014371a630ac6d))
* upgrade yargs from 16.1.1 to 16.2.0 ([#520](https://www.github.com/nodeshift/nodeshift/issues/520)) ([0a2dc42](https://www.github.com/nodeshift/nodeshift/commit/0a2dc423e18626f8b4a9788e3a047e99fa4bda0d))
* **build:** Adding the configuration for coveralls ([#516](https://www.github.com/nodeshift/nodeshift/issues/516)) ([74dbf89](https://www.github.com/nodeshift/nodeshift/commit/74dbf899fbb296553dae539be56db0a23ee0c719))
* upgrade yargs from 16.1.0 to 16.1.1 ([#511](https://www.github.com/nodeshift/nodeshift/issues/511)) ([28a8408](https://www.github.com/nodeshift/nodeshift/commit/28a8408d49e12515ea1ce46c20f5fc7a3afe9a17))

### [7.2.1](https://www.github.com/nodeshift/nodeshift/compare/v7.2.0...v7.2.1) (2020-12-01)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([#506](https://www.github.com/nodeshift/nodeshift/issues/506)) ([7e3ffdb](https://www.github.com/nodeshift/nodeshift/commit/7e3ffdb6a1401f1945b868f1a62ab5124224f50c))
* upgrade documentation from 13.0.2 to 13.1.0 ([#505](https://www.github.com/nodeshift/nodeshift/issues/505)) ([8a80bda](https://www.github.com/nodeshift/nodeshift/commit/8a80bdaf0797cf6f74a42d9825b85aacbf55288e))
* upgrade eslint-plugin-import from 2.22.0 to 2.22.1 ([#499](https://www.github.com/nodeshift/nodeshift/issues/499)) ([e8714d9](https://www.github.com/nodeshift/nodeshift/commit/e8714d95ab4df9eb7f95a1d4a378f8a7a5e5b765))
* upgrade eslint-plugin-standard from 4.0.1 to 4.0.2 ([#504](https://www.github.com/nodeshift/nodeshift/issues/504)) ([8902b01](https://www.github.com/nodeshift/nodeshift/commit/8902b0143653138555094a39889918ee36cb614a))
* upgrade eslint-plugin-standard from 4.0.2 to 4.1.0 ([#509](https://www.github.com/nodeshift/nodeshift/issues/509)) ([f47fa95](https://www.github.com/nodeshift/nodeshift/commit/f47fa9515ae4a409ead90ff5b9588f12625dd6ec))
* upgrade sinon from 9.0.3 to 9.1.0 ([#501](https://www.github.com/nodeshift/nodeshift/issues/501)) ([dc3bf1a](https://www.github.com/nodeshift/nodeshift/commit/dc3bf1a32d2deb153783d911e74b48f85b8ab40c))
* upgrade sinon from 9.1.0 to 9.2.0 ([#502](https://www.github.com/nodeshift/nodeshift/issues/502)) ([5ad111e](https://www.github.com/nodeshift/nodeshift/commit/5ad111e56a07938db112d60980824fad2e88223c))
* upgrade sinon from 9.2.0 to 9.2.1 ([#508](https://www.github.com/nodeshift/nodeshift/issues/508)) ([94b3ed1](https://www.github.com/nodeshift/nodeshift/commit/94b3ed174c11790a4c450d046934d6705eb1ba92))
* upgrade yargs from 16.0.0 to 16.1.0 ([#507](https://www.github.com/nodeshift/nodeshift/issues/507)) ([a95cb44](https://www.github.com/nodeshift/nodeshift/commit/a95cb44ed1e21f7066b9c79d22325734f04bd13b))

## [7.2.0](https://github.com/nodeshift/nodeshift/compare/v7.1.0...v7.2.0) (2020-09-14)


### Features

* Define a subdirectory below .nodeshift/ that indicates where Openshift resources are stored ([#493](https://github.com/nodeshift/nodeshift/issues/493)) ([ed269ea](https://github.com/nodeshift/nodeshift/commit/ed269ea38aea9e9726bdbbf9a53c8b113561a2e7))


### Bug Fixes

* fix typo in CLI option ([3bc2ac6](https://github.com/nodeshift/nodeshift/commit/3bc2ac6a9bfd34d2d1d61cdb704246b33282b109))
* package.json & package-lock.json to reduce vulnerabilities ([#485](https://github.com/nodeshift/nodeshift/issues/485)) ([c249a8f](https://github.com/nodeshift/nodeshift/commit/c249a8f6a378882c6aa1be5bd3dc17da7c578e2a))
* package.json & package-lock.json to reduce vulnerabilities ([#486](https://github.com/nodeshift/nodeshift/issues/486)) ([80f85bc](https://github.com/nodeshift/nodeshift/commit/80f85bc600813cf86b66051eed1e8bdc862b27b3))
* upgrade sinon from 9.0.2 to 9.0.3 ([#489](https://github.com/nodeshift/nodeshift/issues/489)) ([c565b23](https://github.com/nodeshift/nodeshift/commit/c565b23d615338c187c5adc70294958c54c48385))
* upgrade standard-version from 8.0.1 to 8.0.2 ([#482](https://github.com/nodeshift/nodeshift/issues/482)) ([82c962c](https://github.com/nodeshift/nodeshift/commit/82c962c00f5cfd7030be5f71116ffe21b4f07b2f))
* upgrade tar from 6.0.2 to 6.0.5 ([#492](https://github.com/nodeshift/nodeshift/issues/492)) ([14a3b1f](https://github.com/nodeshift/nodeshift/commit/14a3b1f6a0b6177fed38eeda2a86fb195f9d88f1))
* upgrade yargs from 15.4.0 to 15.4.1 ([#487](https://github.com/nodeshift/nodeshift/issues/487)) ([2744f85](https://github.com/nodeshift/nodeshift/commit/2744f8558377eb42385866edd6c318805bdc9a20))

## [7.1.0](https://github.com/nodeshift/nodeshift/compare/v7.0.0...v7.1.0) (2020-07-29)


### Features

* Nodeshift should be able to use a Deployment type ([#478](https://github.com/nodeshift/nodeshift/issues/478)) ([816b0a3](https://github.com/nodeshift/nodeshift/commit/816b0a39b0c5c85746aaf478cc93ea6941da559b))

## [7.0.0](https://github.com/nodeshift/nodeshift/compare/v6.2.0...v7.0.0) (2020-07-02)


### Features

* **knative:** Each deploy should create a new revision. ([#467](https://github.com/nodeshift/nodeshift/issues/467)) ([3ba9cb0](https://github.com/nodeshift/nodeshift/commit/3ba9cb0592417ac067dd072ff34d30cd45cb111a))
* **project-archiver:** Adding .gitignore ([#463](https://github.com/nodeshift/nodeshift/issues/463)) ([3f7d48d](https://github.com/nodeshift/nodeshift/commit/3f7d48d2661a34fd5c46f3d2c26f1532f16d6de4))


### Bug Fixes

* upgrade js-yaml from 3.13.1 to 3.14.0 ([#461](https://github.com/nodeshift/nodeshift/issues/461)) ([afc4cb3](https://github.com/nodeshift/nodeshift/commit/afc4cb3153c3326e60d17f0111d3751d5d80518d))

## [6.2.0](https://github.com/nodeshift/nodeshift/compare/v6.1.0...v6.2.0) (2020-06-05)


### Features

* Knative Serving Deployment ([#454](https://github.com/nodeshift/nodeshift/issues/454)) ([88eed5d](https://github.com/nodeshift/nodeshift/commit/88eed5d3ee0870036c34ff30b62862704f284eeb))

## [6.1.0](https://github.com/nodeshift/nodeshift/compare/v6.0.2...v6.1.0) (2020-05-13)


### Features

* **build-strategy:** Add Docker build strategy ([#442](https://github.com/nodeshift/nodeshift/issues/442)) ([384690f](https://github.com/nodeshift/nodeshift/commit/384690f1c6395b27dbfb131f2841c3c418848881))


### Bug Fixes

* upgrade documentation from 12.1.4 to 12.2.0 ([#438](https://github.com/nodeshift/nodeshift/issues/438)) ([a6820a1](https://github.com/nodeshift/nodeshift/commit/a6820a1e529e9e88549379ec0f59dddfa03107d9))
* upgrade eslint-plugin-node from 11.0.0 to 11.1.0 ([#437](https://github.com/nodeshift/nodeshift/issues/437)) ([591646e](https://github.com/nodeshift/nodeshift/commit/591646e1ce170ca0c630c832c9e57abdb6289d67))

### [6.0.2](https://github.com/nodeshift/nodeshift/compare/v6.0.1...v6.0.2) (2020-04-13)


### Features

* Replacing rimraf with custom module ([#413](https://github.com/nodeshift/nodeshift/issues/413)) ([9351d45](https://github.com/nodeshift/nodeshift/commit/9351d4527cd1688ef5b349ca711425c37f0e0cce))


### Bug Fixes

* update and pin the openshift-rest-client version to 4.0.1 ([#435](https://github.com/nodeshift/nodeshift/issues/435)) ([e09d2be](https://github.com/nodeshift/nodeshift/commit/e09d2be07c6a7cf97d4fcf9eb4a9682ec7a8d9e7))
* upgrade cross-env from 7.0.0 to 7.0.1 ([#428](https://github.com/nodeshift/nodeshift/issues/428)) ([56de6c6](https://github.com/nodeshift/nodeshift/commit/56de6c65c3dc1d5c143fbf5c763a29b99148e6a8))
* upgrade nock from 12.0.0 to 12.0.2 ([#427](https://github.com/nodeshift/nodeshift/issues/427)) ([8097b9d](https://github.com/nodeshift/nodeshift/commit/8097b9d38141898f046e655e1746c383c902992f))
* upgrade tape from 4.13.0 to 4.13.2 ([#429](https://github.com/nodeshift/nodeshift/issues/429)) ([f064833](https://github.com/nodeshift/nodeshift/commit/f064833f04fb2efb37b1fb49714a214a3db82e04))
* upgrade yargs from 15.1.0 to 15.2.0 ([#426](https://github.com/nodeshift/nodeshift/issues/426)) ([fefb21e](https://github.com/nodeshift/nodeshift/commit/fefb21eacfd012d0babee1e16b56447b5fe0e1be))

### [6.0.1](https://github.com/nodeshift/nodeshift/compare/v6.0.0...v6.0.1) (2020-02-19)


### Bug Fixes

* promisifying the newest release of mkdirp breaks mkdirp. ([#412](https://github.com/nodeshift/nodeshift/issues/412)) ([94a22f2](https://github.com/nodeshift/nodeshift/commit/94a22f28ac2d823e85c7d3b6cb1b4c32ea2bb166)), closes [#411](https://github.com/nodeshift/nodeshift/issues/411)

## [6.0.0](https://github.com/nodeshift/nodeshift/compare/v5.0.0...v6.0.0) (2020-02-17)


### ⚠ BREAKING CHANGES

* removal of Node 8 support

* Engine parameter targets node 10+ ([#406](https://github.com/nodeshift/nodeshift/issues/406)) ([c820b80](https://github.com/nodeshift/nodeshift/commit/c820b80de0650a3c1dbf0d6e8098c20cd4bb198b))

## [5.0.0](https://github.com/nodeshift/nodeshift/compare/v4.2.0...v5.0.0) (2020-01-22)


### ⚠ BREAKING CHANGES

* The api for the openshift rest client has changed slightly, but there should be no nodeshift api changes

While this doesn't have to be a semver-major release, there might be some unexpected bugs.  One known issue, is we are no longer passing a custom config to the rest client.  If this removal causes issues we can work on a way to put it back in

### Features

* pass in a non-default configLocation. ([#400](https://github.com/nodeshift/nodeshift/issues/400)) ([f1bd1b3](https://github.com/nodeshift/nodeshift/commit/f1bd1b3cba5e64cbfd8356f842f1c16e42f2e036)), closes [#341](https://github.com/nodeshift/nodeshift/issues/341) [#373](https://github.com/nodeshift/nodeshift/issues/373)
* remove deprecation warnings from openshift rest client ([#398](https://github.com/nodeshift/nodeshift/issues/398)) ([2b97f49](https://github.com/nodeshift/nodeshift/commit/2b97f491eaf252ed0166eb1cf6f6067d081a66c9)), closes [#377](https://github.com/nodeshift/nodeshift/issues/377)

## [4.2.0](https://github.com/nodeshift/nodeshift/compare/v4.1.0...v4.2.0) (2020-01-13)


### Features

* Adding web-app flag ([#395](https://github.com/nodeshift/nodeshift/issues/395)) ([d1d0c14](https://github.com/nodeshift/nodeshift/commit/d1d0c1429b12e3a00ad2cf754ec14639ff79e581))

## [4.1.0](https://github.com/nodeshift/nodeshift/compare/v4.0.0...v4.1.0) (2019-11-18)


### Features

* **enricher:** add runtime labels to resources. ([#380](https://github.com/nodeshift/nodeshift/issues/380)) ([1028af2](https://github.com/nodeshift/nodeshift/commit/1028af2c5776a54023d9e1ddca17f90b86c923ec)), closes [#374](https://github.com/nodeshift/nodeshift/issues/374)

## [4.0.0](https://github.com/nodeshift/nodeshift/compare/v3.1.1...v4.0.0) (2019-11-04)


### ⚠ BREAKING CHANGES

* Changing the base s2i images

This removes the deprecated nodeshift/centos7-s2i-nodejs images and replaces then with the UBI based Node images from Red Hat Software Collections

### src

* using ubi7/nodejs-10 as default image ([#372](https://github.com/nodeshift/nodeshift/issues/372)) ([0bc82bd](https://github.com/nodeshift/nodeshift/commit/0bc82bdf18a6bc0bb7195a95093bf91cd0c48294))

### [3.1.1](https://github.com/nodeshift/nodeshift/compare/v3.1.0...v3.1.1) (2019-08-19)

## [3.1.0](https://github.com/nodeshift/nodeshift/compare/v3.0.1...v3.1.0) (2019-08-19)


### Bug Fixes

* some typos in code and comments ([#330](https://github.com/nodeshift/nodeshift/issues/330)) ([b510e9d](https://github.com/nodeshift/nodeshift/commit/b510e9d))


### Features

* change the output Image Stream name and tag ([#347](https://github.com/nodeshift/nodeshift/issues/347)) ([3faa599](https://github.com/nodeshift/nodeshift/commit/3faa599)), closes [#337](https://github.com/nodeshift/nodeshift/issues/337)

## [3.0.1](https://github.com/nodeshift/nodeshift/compare/v3.0.0...v3.0.1) (2019-04-24)



# [3.0.0](https://github.com/nodeshift/nodeshift/compare/v2.1.1...v3.0.0) (2019-04-12)


* remove the string version of the namespace flag (#299) ([5674b89](https://github.com/nodeshift/nodeshift/commit/5674b89)), closes [#299](https://github.com/nodeshift/nodeshift/issues/299) [#282](https://github.com/nodeshift/nodeshift/issues/282)


### Bug Fixes

* build.recreate should also check the string version of true/false ([#297](https://github.com/nodeshift/nodeshift/issues/297)) ([140b13a](https://github.com/nodeshift/nodeshift/commit/140b13a)), closes [#295](https://github.com/nodeshift/nodeshift/issues/295)
* load the projectLocation not relative to the nodeshift-config.js file ([#302](https://github.com/nodeshift/nodeshift/issues/302)) ([eaf0046](https://github.com/nodeshift/nodeshift/commit/eaf0046)), closes [#301](https://github.com/nodeshift/nodeshift/issues/301)
* when the projectLocation flag is used and no file property in the package.json, use the correct location ([58e340a](https://github.com/nodeshift/nodeshift/commit/58e340a)), closes [#303](https://github.com/nodeshift/nodeshift/issues/303)


### Features

* BREAKING CHANGE: remove the nodeVersion flag. ([#298](https://github.com/nodeshift/nodeshift/issues/298)) ([1c104ff](https://github.com/nodeshift/nodeshift/commit/1c104ff)), closes [#281](https://github.com/nodeshift/nodeshift/issues/281)
* Remove Watch command ([#296](https://github.com/nodeshift/nodeshift/issues/296)) ([fa79166](https://github.com/nodeshift/nodeshift/commit/fa79166)), closes [#280](https://github.com/nodeshift/nodeshift/issues/280)
* Update to latest Openshift Rest Client ([#293](https://github.com/nodeshift/nodeshift/issues/293)) ([e73db9c](https://github.com/nodeshift/nodeshift/commit/e73db9c))


### BREAKING CHANGES

* Slight Refactor

* Updating the Openshift Rest Client to 2.1.0, which has a new API

* Removing strictSSL and tryServiceAccount flags since the updated openshift rest client doesn't need them.

* Removes the openshift config loader, which is no longer used
* remove the string option for namespace creation.  This has been deprecated and it is now time to remove it
* This removes the watch command

This feature was just wrapping the `oc rsync` command, which nodeshift probably shouldn't be doing.  It is better to just use that command instead



<a name="2.1.1"></a>
## [2.1.1](https://github.com/nodeshift/nodeshift/compare/v2.1.0...v2.1.1) (2019-02-04)


### Bug Fixes

* namespace.name spelling/parsing error ([#283](https://github.com/nodeshift/nodeshift/issues/283)) ([afb2a64](https://github.com/nodeshift/nodeshift/commit/afb2a64))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/nodeshift/nodeshift/compare/v2.0.1...v2.1.0) (2019-02-01)


### Bug Fixes

* add the --no-perm=true option to the oc rsync command ([#277](https://github.com/nodeshift/nodeshift/issues/277)) ([b4695c6](https://github.com/nodeshift/nodeshift/commit/b4695c6)), closes [#274](https://github.com/nodeshift/nodeshift/issues/274)


### Features

* Create a namespace/project if one doesn't exist when using the --namespace flag ([#275](https://github.com/nodeshift/nodeshift/issues/275)) ([202d71b](https://github.com/nodeshift/nodeshift/commit/202d71b)), closes [#235](https://github.com/nodeshift/nodeshift/issues/235)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/nodeshift/nodeshift/compare/v2.0.0...v2.0.1) (2018-12-12)


### Bug Fixes

* deployment enricher should also look for DeploymentConfig kind ([6a2c162](https://github.com/nodeshift/nodeshift/commit/6a2c162)), closes [#271](https://github.com/nodeshift/nodeshift/issues/271)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/nodeshift/nodeshift/compare/v1.12.0...v2.0.0) (2018-11-07)


### Features

* update references of bucharest-gold to use the nodeshift namespace ([#269](https://github.com/nodeshift/nodeshift/issues/269)) ([6092108](https://github.com/nodeshift/nodeshift/commit/6092108)), closes [#268](https://github.com/nodeshift/nodeshift/issues/268)


### BREAKING CHANGES

* this now uses the nodeshift/centos7-s2i-nodejs image by default. This should be a semver major change.



<a name="1.12.0"></a>
# [1.12.0](https://github.com/nodeshift/nodeshift/compare/v1.11.0...v1.12.0) (2018-08-15)


### Features

* add the imageTag flag. ([#258](https://github.com/nodeshift/nodeshift/issues/258)) ([399081e](https://github.com/nodeshift/nodeshift/commit/399081e)), closes [#256](https://github.com/nodeshift/nodeshift/issues/256)



<a name="1.11.0"></a>
# [1.11.0](https://github.com/nodeshift/nodeshift/compare/v1.10.0...v1.11.0) (2018-07-24)


### Features

* create/update/remove a config map if there is one in the .nodeshift directory. ([#255](https://github.com/nodeshift/nodeshift/issues/255)) ([f6f96c7](https://github.com/nodeshift/nodeshift/commit/f6f96c7)), closes [#203](https://github.com/nodeshift/nodeshift/issues/203)



<a name="1.10.0"></a>
# [1.10.0](https://github.com/nodeshift/nodeshift/compare/v1.9.1...v1.10.0) (2018-07-19)


### Features

* add a flag, --build.incremental, that turns on incremental builds. ([#254](https://github.com/nodeshift/nodeshift/issues/254)) ([68be3dc](https://github.com/nodeshift/nodeshift/commit/68be3dc)), closes [#253](https://github.com/nodeshift/nodeshift/issues/253)



<a name="1.9.1"></a>
## [1.9.1](https://github.com/nodeshift/nodeshift/compare/v1.9.0...v1.9.1) (2018-07-03)


### Bug Fixes

* **health-check enricher:** don't fail if there is no dependencies prop in the package.json ([#250](https://github.com/nodeshift/nodeshift/issues/250)) ([96789c1](https://github.com/nodeshift/nodeshift/commit/96789c1)), closes [#249](https://github.com/nodeshift/nodeshift/issues/249)



<a name="1.9.0"></a>
# [1.9.0](https://github.com/nodeshift/nodeshift/compare/v1.8.1...v1.9.0) (2018-06-07)


### Bug Fixes

* travis-ci should use npm install instead of npm ci ([#242](https://github.com/nodeshift/nodeshift/issues/242)) ([938ec7d](https://github.com/nodeshift/nodeshift/commit/938ec7d))


### Features

* add the namespace flag ([#234](https://github.com/nodeshift/nodeshift/issues/234)) ([13e5316](https://github.com/nodeshift/nodeshift/commit/13e5316)), closes [#233](https://github.com/nodeshift/nodeshift/issues/233)
* **ingress:** create an Ingress if there is one in the .nodeshift directory ([#244](https://github.com/nodeshift/nodeshift/issues/244)) ([f98cad4](https://github.com/nodeshift/nodeshift/commit/f98cad4)), closes [#238](https://github.com/nodeshift/nodeshift/issues/238)



<a name="1.8.1"></a>
## [1.8.1](https://github.com/nodeshift/nodeshift/compare/v1.8.0...v1.8.1) (2018-05-25)


### Bug Fixes

* **README:** remove the section talking about default environment variables being added to the DeploymentConfig ([14cfb74](https://github.com/nodeshift/nodeshift/commit/14cfb74)), closes [#231](https://github.com/nodeshift/nodeshift/issues/231)



<a name="1.8.0"></a>
# [1.8.0](https://github.com/nodeshift/nodeshift/compare/v1.7.3...v1.8.0) (2018-05-25)


### Features

* add the --deploy.env flag ([#226](https://github.com/nodeshift/nodeshift/issues/226)) ([74c482c](https://github.com/nodeshift/nodeshift/commit/74c482c)), closes [#223](https://github.com/nodeshift/nodeshift/issues/223)



<a name="1.7.3"></a>
## [1.7.3](https://github.com/nodeshift/nodeshift/compare/v1.7.2...v1.7.3) (2018-05-21)


### Bug Fixes

* **package:** update request to version 2.87.0 ([#224](https://github.com/nodeshift/nodeshift/issues/224)) ([2af9b47](https://github.com/nodeshift/nodeshift/commit/2af9b47))



<a name="1.7.2"></a>
## [1.7.2](https://github.com/nodeshift/nodeshift/compare/v1.7.1...v1.7.2) (2018-05-14)


### Bug Fixes

* add a name (http) to the service port ([#218](https://github.com/nodeshift/nodeshift/issues/218)) ([c599dc0](https://github.com/nodeshift/nodeshift/commit/c599dc0))
* remove the hardcoded 8080 for ports. ([bd3f10b](https://github.com/nodeshift/nodeshift/commit/bd3f10b)), closes [#216](https://github.com/nodeshift/nodeshift/issues/216)
* update openshift-rest-client and request for security vulnerability.  https://nodesecurity.io/advisories/606 ([#220](https://github.com/nodeshift/nodeshift/issues/220)) ([95cf4c9](https://github.com/nodeshift/nodeshift/commit/95cf4c9))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/nodeshift/nodeshift/compare/v1.7.0...v1.7.1) (2018-04-10)


### Bug Fixes

* **config:** add package name sanitisation ([#212](https://github.com/nodeshift/nodeshift/issues/212)) ([1c18b2a](https://github.com/nodeshift/nodeshift/commit/1c18b2a)), closes [#211](https://github.com/nodeshift/nodeshift/issues/211)



<a name="1.7.0"></a>
# [1.7.0](https://github.com/nodeshift/nodeshift/compare/v1.6.0...v1.7.0) (2018-04-02)


### Features

* **build.env:** add a --build.env flag to specify build config environment variables ([0a43536](https://github.com/nodeshift/nodeshift/commit/0a43536)), closes [#208](https://github.com/nodeshift/nodeshift/issues/208)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/nodeshift/nodeshift/compare/v1.5.1...v1.6.0) (2018-03-22)


### Features

* Add an `--expose` flag which when true will create a default route and expose the default service ([6e06ec6](https://github.com/nodeshift/nodeshift/commit/6e06ec6))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/nodeshift/nodeshift/compare/v1.5.0...v1.5.1) (2018-03-15)


### Bug Fixes

* **archiver:** fix for source archiver when no files property is found in the package.json ([3c856e8](https://github.com/nodeshift/nodeshift/commit/3c856e8)), closes [#200](https://github.com/nodeshift/nodeshift/issues/200)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/nodeshift/nodeshift/compare/v1.4.1...v1.5.0) (2018-03-12)


### Features

* **config-loader:** expose the configLocation options for the openshift-config-loader. ([#198](https://github.com/nodeshift/nodeshift/issues/198)) ([7462ead](https://github.com/nodeshift/nodeshift/commit/7462ead)), closes [#197](https://github.com/nodeshift/nodeshift/issues/197)



<a name="1.4.1"></a>
## [1.4.1](https://github.com/nodeshift/nodeshift/compare/v1.4.0...v1.4.1) (2018-03-02)


### Bug Fixes

* **nodeshift:** No longer check and emit a warning for non-standard Node versions. ([fa0c44e](https://github.com/nodeshift/nodeshift/commit/fa0c44e)), closes [#194](https://github.com/nodeshift/nodeshift/issues/194)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/nodeshift/nodeshift/compare/v1.3.3...v1.4.0) (2018-02-21)


### Features

* undeploy: Add an option that, when true, will also remove builds, buildConfigs and Imagestreams ([#190](https://github.com/nodeshift/nodeshift/issues/190))([aebb5a1](https://github.com/nodeshift/nodeshift/commit/aebb5a1626f861e0143807d133ce8dc5b3ab767a))


<a name="1.3.3"></a>
## [1.3.3](https://github.com/nodeshift/nodeshift/compare/v1.3.2...v1.3.3) (2018-02-19)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/nodeshift/nodeshift/compare/v1.3.1...v1.3.2) (2018-02-13)


### Bug Fixes

* projectLocation should be set correctly. ([#189](https://github.com/nodeshift/nodeshift/issues/189)) ([4e061a9](https://github.com/nodeshift/nodeshift/commit/4e061a9)), closes [#188](https://github.com/nodeshift/nodeshift/issues/188)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/nodeshift/nodeshift/compare/v1.3.0...v1.3.1) (2018-02-12)


### Bug Fixes

* **nodeshift-config:** allow config properties to overwritten with new rest client update ([#187](https://github.com/nodeshift/nodeshift/issues/187)) ([9587efb](https://github.com/nodeshift/nodeshift/commit/9587efb))

* **route-spec** update route spec definition to not overwrite the spec:to:name property if one is specified. ([#185](https://github.com/nodeshift/nodeshift/pull/185)) fixes [#184](https://github.com/nodeshift/nodeshift/issues/184)



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
