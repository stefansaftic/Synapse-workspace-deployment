/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 411:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BundleManager = void 0;
var fs = __importStar(__webpack_require__(896));
var https = __importStar(__webpack_require__(692));
var path = __importStar(__webpack_require__(928));
var child_process_1 = __webpack_require__(317);
var logger_1 = __webpack_require__(47);
var BundleManager = /** @class */ (function () {
    function BundleManager(source) {
        if (source === void 0) { source = 'prod'; }
        this._bundleUrl = BundleManager.prodBundleUrl;
        this._source = "Prod";
        this._source = source;
        if (source.toLowerCase() == "ppe") {
            this._bundleUrl = BundleManager.ppeBundleUrl;
            logger_1.SystemLogger.info("Setting bundle source as PPE");
        }
        logger_1.SystemLogger.info("Bundle source : " + this._bundleUrl);
    }
    BundleManager.prototype.invokeBundle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    if (!fs.existsSync(BundleManager.defaultBundleDir)) {
                        fs.mkdirSync(BundleManager.defaultBundleDir);
                    }
                    file_1 = fs.createWriteStream(BundleManager.defaultBundleFilePath);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            logger_1.SystemLogger.info("Downloading asset file");
                            https.get(_this._bundleUrl, function (response) {
                                response.pipe(file_1);
                                file_1.on('finish', function () {
                                    file_1.close();
                                    logger_1.SystemLogger.info("Asset file downloaded at : " + BundleManager.defaultBundleFilePath);
                                    return resolve();
                                });
                            });
                        })];
                }
                catch (ex) {
                    logger_1.SystemLogger.info("Bundle manager failed to download asset file.");
                    throw ex;
                }
                return [2 /*return*/];
            });
        });
    };
    BundleManager.ExecuteShellCommand = function (cmd) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.SystemLogger.info("Executing shell command");
                        logger_1.SystemLogger.info("Command : " + cmd);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var command = child_process_1.spawn(cmd, { shell: true });
                                command.stdout.on('data', function (data) {
                                    logger_1.SystemLogger.info("Stdout: " + data.toString());
                                });
                                command.stderr.on('data', function (data) {
                                    logger_1.SystemLogger.info("Stderr: " + data.toString());
                                });
                                command.on('error', function (err) {
                                    if (err) {
                                        logger_1.SystemLogger.info("Error: " + err.toString());
                                        return reject("Shell execution failed.");
                                    }
                                });
                                command.on('close', function (code) {
                                    if (code != 0) {
                                        return reject("Shell execution failed.");
                                    }
                                    else {
                                        return resolve("Shell command execution is successful.");
                                    }
                                });
                            })];
                    case 2:
                        result = _a.sent();
                        if (result == "Shell execution failed.") {
                            throw new Error("Shell execution failed.");
                        }
                        logger_1.SystemLogger.info("Shell command execution is successful.");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        logger_1.SystemLogger.info("Shell execution failed.");
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BundleManager.prodBundleUrl = 'https://web.azuresynapse.net/assets/cmd-api/main.js';
    BundleManager.ppeBundleUrl = 'https://web-ci.azuresynapse.net/assets/cmd-api/main.js';
    BundleManager.defaultBundleDir = 'downloads';
    BundleManager.defaultBundleName = 'main.js';
    BundleManager.defaultBundleFilePath = path.join(process.cwd(), BundleManager.defaultBundleDir, BundleManager.defaultBundleName);
    return BundleManager;
}());
exports.BundleManager = BundleManager;
//# sourceMappingURL=BundleManager.js.map

/***/ }),

/***/ 563:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetExportParams = exports.GetValidateParams = exports.GetDeployParams = void 0;
var core = __importStar(__webpack_require__(659));
var common_utils_1 = __webpack_require__(456);
var artifacts_enum_1 = __webpack_require__(206);
function GetDeployParams(templateFile, parameterFile) {
    if (templateFile === void 0) { templateFile = ""; }
    if (parameterFile === void 0) { parameterFile = ""; }
    templateFile = templateFile == "" ? core.getInput("TemplateFile") : templateFile;
    parameterFile = parameterFile == "" ? core.getInput("ParametersFile") : parameterFile;
    var overrides = core.getInput("OverrideArmParameters");
    var workspaceName = core.getInput("TargetWorkspaceName");
    var environment = core.getInput("Environment");
    if (common_utils_1.isStrNullOrEmpty(environment)) {
        environment = 'prod';
    }
    var deleteArtifacts = core.getInput("DeleteArtifactsNotInTemplate").toLowerCase() == "true";
    var deployMPE = core.getInput("deployManagedPrivateEndpoint").toLowerCase() == "true";
    var failOnMissingOverrides = core.getInput("FailOnMissingOverrides").toLowerCase() == "true";
    return {
        templateFile: templateFile,
        parameterFile: parameterFile,
        overrides: overrides,
        environment: environment,
        deleteArtifacts: deleteArtifacts,
        deployMPE: deployMPE,
        failOnMissingOverrides: failOnMissingOverrides,
        workspaceName: workspaceName
    };
}
exports.GetDeployParams = GetDeployParams;
function GetValidateParams() {
    var artifactsFolder = core.getInput("ArtifactsFolder");
    var workspaceName = core.getInput("TargetWorkspaceName");
    return {
        artifactsFolder: artifactsFolder,
        workspaceName: workspaceName
    };
}
exports.GetValidateParams = GetValidateParams;
function GetExportParams(publishArtifact) {
    var destinationFolder = artifacts_enum_1.ExportConstants.destinationFolder;
    var artifactsFolder = core.getInput("ArtifactsFolder");
    var workspaceName = core.getInput("TargetWorkspaceName");
    return {
        artifactsFolder: artifactsFolder,
        workspaceName: workspaceName,
        destinationFolder: destinationFolder,
        publishArtifact: publishArtifact
    };
}
exports.GetExportParams = GetExportParams;
//# sourceMappingURL=OperationParams.js.map

/***/ }),

/***/ 116:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportOperation = exports.ValidateOperation = exports.DeployOperation = void 0;
var BundleManager_1 = __webpack_require__(411);
var artifacts_enum_1 = __webpack_require__(206);
var common_utils_1 = __webpack_require__(456);
var package_file_1 = __webpack_require__(806);
var deploy_utils_1 = __webpack_require__(825);
var orchestrator_1 = __webpack_require__(693);
var artifacts_client_1 = __webpack_require__(355);
var logger_1 = __webpack_require__(47);
var DeployOperation = /** @class */ (function () {
    function DeployOperation(operationParams) {
        this.operationType = artifacts_enum_1.OPERATIONS.deploy;
        this.operationParams = operationParams;
    }
    DeployOperation.prototype.PerformOperation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageFiles, params, artifactClient, orchestrator, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.SystemLogger.info("Starting " + this.operationType + " operation");
                        if (common_utils_1.isStrNullOrEmpty(this.operationParams.overrides) && this.operationParams.failOnMissingOverrides) {
                            throw new Error("Overrides not provided.");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        packageFiles = new package_file_1.PackageFile(this.operationParams.templateFile, this.operationParams.parameterFile, this.operationParams.overrides);
                        return [4 /*yield*/, deploy_utils_1.getParams()];
                    case 2:
                        params = _a.sent();
                        artifactClient = new artifacts_client_1.ArtifactClient(params);
                        orchestrator = new orchestrator_1.Orchestrator(packageFiles, artifactClient, this.operationParams.workspaceName, this.operationParams.environment, this.operationParams.deleteArtifacts, this.operationParams.deployMPE);
                        return [4 /*yield*/, orchestrator.orchestrateFromPublishBranch()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        logger_1.SystemLogger.info(this.operationType + " operation failed");
                        throw err_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return DeployOperation;
}());
exports.DeployOperation = DeployOperation;
var ValidateOperation = /** @class */ (function () {
    function ValidateOperation(operationParams) {
        this.operationType = artifacts_enum_1.OPERATIONS.validate;
        this.operationParams = operationParams;
    }
    ValidateOperation.prototype.PerformOperation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cmd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.SystemLogger.info("Starting " + this.operationType + " operation");
                        cmd = [
                            'node',
                            BundleManager_1.BundleManager.defaultBundleFilePath,
                            this.operationType,
                            "\"" + this.operationParams.artifactsFolder + "\"",
                            this.operationParams.workspaceName
                        ].join(' ');
                        return [4 /*yield*/, BundleManager_1.BundleManager.ExecuteShellCommand(cmd)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ValidateOperation;
}());
exports.ValidateOperation = ValidateOperation;
var ExportOperation = /** @class */ (function () {
    function ExportOperation(operationParams) {
        this.operationType = artifacts_enum_1.OPERATIONS.export;
        this.operationParams = operationParams;
    }
    ExportOperation.prototype.PerformOperation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cmd;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logger_1.SystemLogger.info("Starting " + this.operationType + " operation");
                        cmd = [
                            'node',
                            BundleManager_1.BundleManager.defaultBundleFilePath,
                            this.operationType,
                            "\"" + this.operationParams.artifactsFolder + "\"",
                            this.operationParams.workspaceName,
                            this.operationParams.destinationFolder
                        ].join(' ');
                        return [4 /*yield*/, BundleManager_1.BundleManager.ExecuteShellCommand(cmd)];
                    case 1:
                        _a.sent();
                        if (this.operationParams.publishArtifact) {
                            logger_1.SystemLogger.info("Generating artifacts in " + this.operationParams.destinationFolder);
                            // Do not remove the below log. It is used to upload the artifact.
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExportOperation;
}());
exports.ExportOperation = ExportOperation;
//# sourceMappingURL=Operations.js.map

/***/ }),

/***/ 345:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperationManager = void 0;
var OperationParams_1 = __webpack_require__(563);
var Operations_1 = __webpack_require__(116);
var path_1 = __importDefault(__webpack_require__(928));
var artifacts_enum_1 = __webpack_require__(206);
var OperationManager = /** @class */ (function () {
    function OperationManager() {
    }
    // Deploy operation
    OperationManager.DeployArtifacts = function (templateFile, parameterFile) {
        if (templateFile === void 0) { templateFile = ""; }
        if (parameterFile === void 0) { parameterFile = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var params, deployer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = OperationParams_1.GetDeployParams(templateFile, parameterFile);
                        deployer = new Operations_1.DeployOperation(params);
                        return [4 /*yield*/, deployer.PerformOperation()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Validate operation
    OperationManager.ValidateArtifacts = function (publishArtifacts) {
        if (publishArtifacts === void 0) { publishArtifacts = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Export function also internally validates
                    return [4 /*yield*/, OperationManager.ExportArtifacts(publishArtifacts)];
                    case 1:
                        // Export function also internally validates
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Export operation
    OperationManager.ExportArtifacts = function (publishArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var params, exporter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = OperationParams_1.GetExportParams(publishArtifacts);
                        exporter = new Operations_1.ExportOperation(params);
                        return [4 /*yield*/, exporter.PerformOperation()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Validate and deploy
    OperationManager.ValidateAndDeploy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var folder, templateFile, parameterFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        folder = artifacts_enum_1.ExportConstants.destinationFolder;
                        templateFile = path_1.default.join(folder, artifacts_enum_1.ExportConstants.templateFile);
                        parameterFile = path_1.default.join(folder, artifacts_enum_1.ExportConstants.parameterFile);
                        // Validate and then export the templates.
                        return [4 /*yield*/, OperationManager.ValidateArtifacts(false)];
                    case 1:
                        // Validate and then export the templates.
                        _a.sent();
                        // Deploy the exported templates.
                        return [4 /*yield*/, OperationManager.DeployArtifacts(templateFile, parameterFile)];
                    case 2:
                        // Deploy the exported templates.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OperationManager;
}());
exports.OperationManager = OperationManager;
//# sourceMappingURL=OperationsManager.js.map

/***/ }),

/***/ 355:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArtifactClient = exports.typeMap = void 0;
var core = __importStar(__webpack_require__(659));
var httpClient = __importStar(__webpack_require__(727));
var artifacts_enum_1 = __webpack_require__(206);
var deploy_utils_1 = __webpack_require__(825);
var logger_1 = __webpack_require__(47);
var q_1 = __webpack_require__(683);
exports.typeMap = new Map([
    [artifacts_enum_1.DataFactoryType.dataset.toLowerCase(), artifacts_enum_1.Artifact.dataset],
    [artifacts_enum_1.DataFactoryType.dataflow.toLowerCase(), artifacts_enum_1.Artifact.dataflow],
    [artifacts_enum_1.DataFactoryType.linkedservice.toLowerCase(), artifacts_enum_1.Artifact.linkedservice],
    [artifacts_enum_1.DataFactoryType.credential.toLowerCase(), artifacts_enum_1.Artifact.credential],
    [artifacts_enum_1.DataFactoryType.integrationruntime.toLowerCase(), artifacts_enum_1.Artifact.integrationruntime],
    [artifacts_enum_1.DataFactoryType.notebook.toLowerCase(), artifacts_enum_1.Artifact.notebook],
    [artifacts_enum_1.DataFactoryType.pipeline.toLowerCase(), artifacts_enum_1.Artifact.pipeline],
    [artifacts_enum_1.DataFactoryType.sparkjobdefinition.toLowerCase(), artifacts_enum_1.Artifact.sparkjobdefinition],
    [artifacts_enum_1.DataFactoryType.bigdatapools.toLowerCase(), artifacts_enum_1.Artifact.bigdatapools],
    [artifacts_enum_1.DataFactoryType.sqlpool.toLowerCase(), artifacts_enum_1.Artifact.sqlpool],
    [artifacts_enum_1.DataFactoryType.sqlscript.toLowerCase(), artifacts_enum_1.Artifact.sqlscript],
    [artifacts_enum_1.DataFactoryType.trigger.toLowerCase(), artifacts_enum_1.Artifact.trigger],
    [artifacts_enum_1.DataFactoryType.managedVirtualNetworks.toLowerCase(), artifacts_enum_1.Artifact.managedvirtualnetworks],
    [artifacts_enum_1.DataFactoryType.managedPrivateEndpoints.toLowerCase(), artifacts_enum_1.Artifact.managedprivateendpoints],
    [artifacts_enum_1.DataFactoryType.kqlScript.toLowerCase(), artifacts_enum_1.Artifact.kqlScript],
    [artifacts_enum_1.DataFactoryType.database.toLowerCase(), artifacts_enum_1.Artifact.database],
    [artifacts_enum_1.DataFactoryType.sparkconfiguration.toLowerCase(), artifacts_enum_1.Artifact.sparkconfiguration],
]);
var ArtifactClient = /** @class */ (function () {
    function ArtifactClient(params) {
        this.requestOptions = {};
        this.apiVersion = 'api-version=2019-06-01-preview';
        this.symsApiVersion = 'api-version=2021-04-01';
        this.idwValidation = 'validationtype=IDWValidation';
        this.nameTag = 'name';
        this.params = params;
        this.requestOptions.ignoreSslError = true;
        this.client = new httpClient.HttpClient('synapse-git-cicd-deploy-task', undefined, this.requestOptions);
        this.deploymentTrackingRequests = new Array();
    }
    ArtifactClient.prototype.getParams = function () {
        return this.params;
    };
    ArtifactClient.prototype.deployArtifact = function (resourceType, payload, workspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, param, token, base_url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUrl = this.getBaseurl(workspace, environment, resourceType);
                        return [4 /*yield*/, deploy_utils_1.getParams(true, environment)];
                    case 1:
                        param = _a.sent();
                        token = param.bearer;
                        base_url = param.activeDirectoryEndpointUrl;
                        base_url = base_url.substr(0, base_url.length - 2);
                        switch (resourceType) {
                            case artifacts_enum_1.Artifact.notebook:
                                return [2 /*return*/, this.deployNotebook(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.sparkjobdefinition:
                                return [2 /*return*/, this.deploySparkJobDefinition(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.sqlscript:
                                return [2 /*return*/, this.deploySqlScript(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.dataset:
                                return [2 /*return*/, this.deployDataset(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.pipeline:
                                return [2 /*return*/, this.deployPipeline(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.dataflow:
                                return [2 /*return*/, this.deployDataflow(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.trigger:
                                return [2 /*return*/, this.deployTrigger(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.linkedservice:
                                return [2 /*return*/, this.deployLinkedservice(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.integrationruntime:
                                return [2 /*return*/, this.deployIntegrationruntime(base_url, payload, token)];
                            case artifacts_enum_1.Artifact.credential:
                                return [2 /*return*/, this.deployCredential(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.kqlScript:
                                return [2 /*return*/, this.deployKqlScript(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.managedprivateendpoints:
                                return [2 /*return*/, this.deployManagedPrivateEndpoint(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.database:
                                return [2 /*return*/, this.deployDatabase(baseUrl, payload, token)];
                            case artifacts_enum_1.Artifact.sparkconfiguration:
                                return [2 /*return*/, this.deploySparkConfiguration(baseUrl, payload, token)];
                            default:
                                return [2 /*return*/, deploy_utils_1.DeployStatus.skipped];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deleteArtifact = function (resourceType, payload, workspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, param, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseUrl = this.getBaseurl(workspace, environment, resourceType);
                        return [4 /*yield*/, deploy_utils_1.getParams(true, environment)];
                    case 1:
                        param = _a.sent();
                        token = param.bearer;
                        return [4 /*yield*/, this.artifactDeletionTask(baseUrl, resourceType, payload, token)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ArtifactClient.prototype.deleteDatalakeChildren = function (resource, workspace, location) {
        return __awaiter(this, void 0, void 0, function () {
            var url, param, token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = ArtifactClient.getUrlByEnvironment(workspace, location);
                        return [4 /*yield*/, deploy_utils_1.getParams(true, location)];
                    case 1:
                        param = _a.sent();
                        token = param.bearer;
                        url = url + "/" + resource + "?" + this.symsApiVersion;
                        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.client.del(url, this.getHeaders(token)).then(function (res) {
                                        var resStatus = res.message.statusCode;
                                        console.log("For Artifact: " + resource + ": ArtifactDeletionTask status: " + resStatus + "; status message: " + res.message.statusMessage);
                                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                            return reject(deploy_utils_1.DeployStatus.failed);
                                        }
                                        return resolve(deploy_utils_1.DeployStatus.success);
                                    });
                                    return [2 /*return*/];
                                });
                            }); })];
                }
            });
        });
    };
    ArtifactClient.prototype.WaitForAllDeployments = function (isDelete) {
        return __awaiter(this, void 0, void 0, function () {
            var i, deploymentTrackingRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.deploymentTrackingRequests.length)) return [3 /*break*/, 6];
                        deploymentTrackingRequest = this.deploymentTrackingRequests[i];
                        if (!isDelete) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.checkStatusForDelete(deploymentTrackingRequest.url, deploymentTrackingRequest.name, deploymentTrackingRequest.token)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.checkStatus(deploymentTrackingRequest.url, deploymentTrackingRequest.name, deploymentTrackingRequest.token)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        while (this.deploymentTrackingRequests.length > 0) {
                            this.deploymentTrackingRequests.pop();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.getStatusUrl = function (baseUrl, artifactype, operationId) {
        var url = this.getCommonPath(baseUrl, artifactype);
        return url + ("/operationResults/" + operationId + "?" + this.apiVersion);
    };
    ArtifactClient.prototype.buildArtifactUrl = function (baseUrl, artifactype, artifactNameValue) {
        var url = this.getCommonPath(baseUrl, artifactype);
        while (artifactNameValue.indexOf(' ') > -1)
            artifactNameValue = artifactNameValue.replace(' ', '%20');
        if (artifactype == artifacts_enum_1.Artifact.managedprivateendpoints + "s") {
            return url + ("/" + artifacts_enum_1.Artifact.managedprivateendpoints + "/" + artifactNameValue + "?" + this.apiVersion);
        }
        var version = (artifactype === artifacts_enum_1.Artifact.database + "s") ? this.symsApiVersion : this.apiVersion;
        return url + ("/" + artifactype + "/" + artifactNameValue + "?" + version);
    };
    ArtifactClient.prototype.getCommonPath = function (baseUrl, artifactype) {
        var url;
        if (artifactype === artifacts_enum_1.Artifact.integrationruntime + "s") {
            url = baseUrl + "/subscriptions/" + this.params.subscriptionId + "/resourceGroups/" + this.params.resourceGroup;
            url = url + ("/providers/Microsoft.Synapse/workspaces/" + core.getInput('TargetWorkspaceName'));
        }
        else if (artifactype === artifacts_enum_1.Artifact.managedprivateendpoints || artifactype == artifacts_enum_1.Artifact.managedprivateendpoints + "s") {
            url = baseUrl + "/" + artifacts_enum_1.Artifact.managedvirtualnetworks + "/default";
        }
        else {
            url = "" + baseUrl;
        }
        return url;
    };
    ArtifactClient.prototype.deployCredential = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.credential.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        throw new Error("Credential deployment failed " + JSON.stringify(err_1));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployIntegrationruntime = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var params, base_url, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, deploy_utils_1.getParams()];
                    case 1:
                        params = _a.sent();
                        token = params.bearer;
                        base_url = params.resourceManagerEndpointUrl;
                        base_url = base_url.substr(0, base_url.length - 1);
                        return [4 /*yield*/, this.artifactDeploymentTask(base_url, artifacts_enum_1.Artifact.integrationruntime.toString() + "s", payload, token)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        throw new Error("Integration runtime deployment failed " + JSON.stringify(err_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployKqlScript = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.kqlScript.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_3 = _a.sent();
                        logger_1.SystemLogger.info(err_3);
                        throw new Error("KqlScript deployment failed " + JSON.stringify(err_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployLinkedservice = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.linkedservice.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_4 = _a.sent();
                        throw new Error("Linked service deployment failed " + JSON.stringify(err_4));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployTrigger = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.trigger.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_5 = _a.sent();
                        throw new Error("Trigger deployment failed " + JSON.stringify(err_5));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployDataflow = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.dataflow.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_6 = _a.sent();
                        throw new Error("Data flow deployment failed " + JSON.stringify(err_6));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployPipeline = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.pipeline.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_7 = _a.sent();
                        throw new Error("Data set deployment failed " + JSON.stringify(err_7));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployDataset = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.dataset.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_8 = _a.sent();
                        throw new Error("Data set deployment failed " + JSON.stringify(err_8));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deploySqlScript = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.sqlscript.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_9 = _a.sent();
                        throw new Error("SQL script deployment status " + JSON.stringify(err_9));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployNotebook = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.notebook.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_10 = _a.sent();
                        throw new Error("Notebook deployment status " + JSON.stringify(err_10));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deploySparkJobDefinition = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.sparkjobdefinition.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_11 = _a.sent();
                        throw new Error("SparkJobDefination deployment status " + JSON.stringify(err_11));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployManagedPrivateEndpoint = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var payLoadJson, err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payLoadJson = JSON.parse(payload.content);
                        if (payLoadJson["properties"].hasOwnProperty("fqdns")) {
                            delete payLoadJson["properties"]["fqdns"];
                        }
                        payload.content = JSON.stringify(payLoadJson);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, "" + artifacts_enum_1.Artifact.managedprivateendpoints.toString(), payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_12 = _a.sent();
                        throw new Error("ManagedPrivateEndpoint deployment status " + JSON.stringify(err_12));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deployDatabase = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactsGroupDeploymentTask(baseUrl, payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_13 = _a.sent();
                        console.log(err_13);
                        throw new Error("Database deployment failed " + JSON.stringify(err_13));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.deploySparkConfiguration = function (baseUrl, payload, token) {
        return __awaiter(this, void 0, void 0, function () {
            var err_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.artifactDeploymentTask(baseUrl, artifacts_enum_1.Artifact.sparkconfiguration.toString() + "s", payload, token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_14 = _a.sent();
                        console.log(err_14);
                        throw new Error("Spark Configuration deployment failed " + JSON.stringify(err_14));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.artifactsGroupDeploymentTask = function (baseUrl, payloadObj, token) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonContent, _loop_1, this_1, _i, _a, ddl, err_15;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        jsonContent = JSON.parse(payloadObj.content);
                        _loop_1 = function (ddl) {
                            var artifact, url, type, dbName;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        artifact = { 'properties': ddl['NewEntity'] };
                                        artifact['name'] = ddl['NewEntity']['Name'];
                                        artifact['type'] = ddl['NewEntity']['EntityType'];
                                        delete ddl['NewEntity']['Name'];
                                        delete ddl['NewEntity']['EntityType'];
                                        url = "";
                                        if (artifact['type'].toLowerCase() == 'database') {
                                            url = baseUrl + "/databases/" + artifact['name'];
                                        }
                                        else {
                                            type = artifact['type'].toLowerCase() + 's';
                                            dbName = artifact['properties']['Namespace']['DatabaseName'];
                                            url = baseUrl + "/databases/" + dbName + "/" + type + "/" + artifact['name'];
                                        }
                                        if (artifact['type'].toLowerCase() == 'relationship') {
                                            if (!artifact['properties'].hasOwnProperty('RelationshipType')) {
                                                artifact['properties']['RelationshipType'] = 0;
                                            }
                                        }
                                        url = encodeURI(url) + ("?" + this_1.symsApiVersion);
                                        console.log("URL for artifact deployment: " + url);
                                        console.log(JSON.stringify(artifact));
                                        return [4 /*yield*/, this_1.client.put(url, JSON.stringify(artifact), this_1.getHeaders(token)).then(function (res) {
                                                var resStatus = res.message.statusCode;
                                                console.log("For Artifact: " + artifact['name'] + " of type " + artifact['type'] + ": ArtifactDeploymentTask status: " + resStatus + "; status message: " + res.message.statusMessage);
                                                try {
                                                    if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                                        res.readBody().then(function (body) {
                                                            if (!!body) {
                                                                console.log("For Artifact: " + artifact['name'] + " of type " + artifact['type'] + " deployment failed : " + body);
                                                            }
                                                        });
                                                        throw new Error(deploy_utils_1.DeployStatus.failed);
                                                    }
                                                    console.log("For Artifact: " + artifact['name'] + " of type " + artifact['type'] + " deployment successful.");
                                                }
                                                catch (err) {
                                                    throw err;
                                                }
                                            })];
                                    case 1:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = jsonContent['properties']['Ddls'];
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        ddl = _a[_i];
                        return [5 /*yield**/, _loop_1(ddl)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        ;
                        return [2 /*return*/, q_1.resolve(deploy_utils_1.DeployStatus.success)];
                    case 5:
                        err_15 = _b.sent();
                        throw err_15;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.artifactDeploymentTask = function (baseUrl, resourceType, payloadObj, token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var url, payload;
                        var _this = this;
                        return __generator(this, function (_a) {
                            url = this.buildArtifactUrl(baseUrl, resourceType, payloadObj.name);
                            payload = payloadObj.content;
                            this.client.put(url, payload, this.getHeaders(token)).then(function (res) {
                                var resStatus = res.message.statusCode;
                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": ArtifactDeploymentTask status: " + resStatus + "; status message: " + res.message.statusMessage);
                                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                    res.readBody().then(function (body) {
                                        if (!!body) {
                                            var responseJson = JSON.parse(body);
                                            logger_1.SystemLogger.info("Deploy artifact failed: " + JSON.stringify(responseJson));
                                        }
                                    });
                                    return reject(deploy_utils_1.DeployStatus.failed);
                                }
                                var location = res.message.headers.location;
                                res.readBody().then(function (body) { return __awaiter(_this, void 0, void 0, function () {
                                    var responseJson, operationId, deploymentTrackingRequest, status_1, deploymentTrackingRequest;
                                    return __generator(this, function (_a) {
                                        responseJson = JSON.parse(body);
                                        operationId = responseJson['operationId'];
                                        if (!!operationId) {
                                            try {
                                                if (!location) {
                                                    location = this.getStatusUrl(baseUrl, resourceType, operationId);
                                                }
                                                deploymentTrackingRequest = {
                                                    url: location,
                                                    name: payloadObj.name,
                                                    token: token
                                                };
                                                this.deploymentTrackingRequests.push(deploymentTrackingRequest);
                                            }
                                            catch (err) {
                                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": Deployment failed with error: " + JSON.stringify(err));
                                                return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                            }
                                            return [2 /*return*/, resolve(deploy_utils_1.DeployStatus.success)];
                                        }
                                        else {
                                            if (resourceType == artifacts_enum_1.Artifact.managedprivateendpoints) {
                                                status_1 = responseJson['properties']['provisioningState'];
                                                if (status_1 == "Succeeded") {
                                                    return [2 /*return*/, resolve(deploy_utils_1.DeployStatus.success)];
                                                }
                                                if (status_1 == "Provisioning") {
                                                    deploymentTrackingRequest = {
                                                        url: url,
                                                        name: payloadObj.name,
                                                        token: token
                                                    };
                                                    this.deploymentTrackingRequests.push(deploymentTrackingRequest);
                                                    return [2 /*return*/, resolve(deploy_utils_1.DeployStatus.success)];
                                                }
                                            }
                                            return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                            }, function (reason) {
                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": Artifact Deployment failed: " + reason);
                                return reject(deploy_utils_1.DeployStatus.failed);
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ArtifactClient.prototype.artifactDeletionTask = function (baseUrl, resourceType, payloadObj, token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var url;
                        var _this = this;
                        return __generator(this, function (_a) {
                            url = this.buildArtifactUrl(baseUrl, resourceType + "s", payloadObj.name);
                            this.client.del(url, this.getHeaders(token)).then(function (res) {
                                var resStatus = res.message.statusCode;
                                logger_1.SystemLogger.info("For Artifact: " + payloadObj.name + ": ArtifactDeletionTask status: " + resStatus + "; status message: " + res.message.statusMessage);
                                if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                    return reject(deploy_utils_1.DeployStatus.failed);
                                }
                                if (resourceType != artifacts_enum_1.Artifact.managedprivateendpoints) {
                                    var location = res.message.headers.location;
                                    if (!!location) {
                                        var deploymentTrackingRequest = {
                                            url: location,
                                            name: payloadObj.name,
                                            token: token
                                        };
                                        _this.deploymentTrackingRequests.push(deploymentTrackingRequest);
                                    }
                                }
                                return resolve(deploy_utils_1.DeployStatus.success);
                            }, function (reason) {
                                logger_1.SystemLogger.info("Artifact Delete failed: " + reason);
                                return reject(deploy_utils_1.DeployStatus.failed);
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    ArtifactClient.prototype.checkStatus = function (url, name, token) {
        return __awaiter(this, void 0, void 0, function () {
            var timeout, delayMilliSecs, currentTime, artifactName, res, resStatus, body, msg, response, responseJson, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeout = new Date().getTime() + (60000 * 20);
                        delayMilliSecs = 30000;
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        currentTime = new Date().getTime();
                        if (timeout < currentTime) {
                            logger_1.SystemLogger.info('Current time: ' + currentTime);
                            throw new Error("Timeout error in checkStatus");
                        }
                        artifactName = '';
                        return [4 /*yield*/, this.client.get(url, this.getHeaders(token))];
                    case 2:
                        res = _a.sent();
                        resStatus = res.message.statusCode;
                        return [4 /*yield*/, res.readBody()];
                    case 3:
                        body = _a.sent();
                        logger_1.SystemLogger.info("For artifact: " + name + ": Checkstatus: " + resStatus + "; status message: " + res.message.statusMessage);
                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                            msg = res.message.statusMessage;
                            response = JSON.parse(body);
                            if (body != null && response.error != null && response.error.message != null) {
                                msg = response.error.message;
                            }
                            throw new Error("Checkstatus => status: " + resStatus + "; status message: " + msg);
                        }
                        if (!!body) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.delay(delayMilliSecs)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 5:
                        responseJson = JSON.parse(body);
                        status = responseJson['status'];
                        if (!(!!status && status == 'Failed')) return [3 /*break*/, 6];
                        logger_1.SystemLogger.info("For artifact: " + name + ": Artifact Deployment status: " + status);
                        throw new Error("Failed to fetch the deployment status " + JSON.stringify(responseJson['error']));
                    case 6:
                        if (!(!!status && (status == 'InProgress' || status == 'Accepted'))) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.delay(delayMilliSecs)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 8:
                        artifactName = responseJson['name'];
                        if (artifactName === name || status === "Succeeded") {
                            logger_1.SystemLogger.info("Artifact " + name + " deployed successfully.");
                            return [3 /*break*/, 9];
                        }
                        else {
                            throw new Error("Artifact deployment validation failed : " + body);
                        }
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.checkStatusForDelete = function (url, name, token) {
        return __awaiter(this, void 0, void 0, function () {
            var timeout, delayMilliSecs, currentTime, nbName, res, resStatus, body, bodyObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timeout = new Date().getTime() + (60000 * 20);
                        delayMilliSecs = 30000;
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        currentTime = new Date().getTime();
                        if (timeout < currentTime) {
                            logger_1.SystemLogger.info("Current time: ' " + currentTime);
                            throw new Error("Timeout error in checkStatus");
                        }
                        nbName = '';
                        return [4 /*yield*/, this.client.get(url, this.getHeaders(token))];
                    case 2:
                        res = _a.sent();
                        resStatus = res.message.statusCode;
                        return [4 /*yield*/, res.readBody()];
                    case 3:
                        body = _a.sent();
                        if (body.trim() != "") {
                            bodyObj = JSON.parse(body);
                            if (bodyObj["status"].toLowerCase() == "failed") {
                                logger_1.SystemLogger.info(bodyObj["error"]["message"]);
                                throw new Error("For Artifact: " + name + " deletion failed. " + JSON.stringify(bodyObj));
                            }
                        }
                        logger_1.SystemLogger.info("For Artifact: " + name + ": Checkstatus: " + resStatus + "; status message: " + res.message.statusMessage);
                        if (!(resStatus != 200 && resStatus < 203)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.delay(delayMilliSecs)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ArtifactClient.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    ArtifactClient.prototype.getHeaders = function (token) {
        var _a;
        var headers = {
            'Authorization': "Bearer " + token,
            'Content-Type': 'application/json',
            'User-Agent': (_a = this.client.userAgent) === null || _a === void 0 ? void 0 : _a.toString()
        };
        return headers;
    };
    ArtifactClient.prototype.getAudienceUrl = function (env) {
        switch (env) {
            case deploy_utils_1.Env.prod.toString():
                return "https://dev.azuresynapse.net";
            case deploy_utils_1.Env.mooncake.toString():
                return "https://dev.azuresynapse.azure.cn";
            case deploy_utils_1.Env.usnat.toString():
                return "https://dev.azuresynapse.usgovcloudapi.net";
            default:
                throw new Error('Environment validation failed. Valid choice are Azure Public, Azure China and Azure US Government');
        }
    };
    ArtifactClient.prototype.getBaseurl = function (workspace, environment, resourceType) {
        return ArtifactClient.getUrlByEnvironment(workspace, environment);
    };
    ArtifactClient.getUrlByEnvironment = function (workspace, environment) {
        switch (environment) {
            case deploy_utils_1.Env.prod.toString():
                return "https://" + workspace + ".dev.azuresynapse.net";
            case deploy_utils_1.Env.mooncake.toString():
                return "https://" + workspace + ".dev.azuresynapse.azure.cn";
            case deploy_utils_1.Env.usnat.toString():
                return "https://" + workspace + ".dev.azuresynapse.usgovcloudapi.net";
            default:
                throw new Error('Environment validation failed. Valid choice are Azure Public, Azure China and Azure US Government');
        }
    };
    return ArtifactClient;
}());
exports.ArtifactClient = ArtifactClient;
//# sourceMappingURL=artifacts_client.js.map

/***/ }),

/***/ 564:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
var core = __importStar(__webpack_require__(659));
var logger_1 = __webpack_require__(47);
var BundleManager_1 = __webpack_require__(411);
var artifacts_enum_1 = __webpack_require__(206);
var OperationsManager_1 = __webpack_require__(345);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var operation, bundle_source, bundle_manager, _a, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger_1.SystemLogger.setLogger(new logger_1.ActionLogger(true));
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 12, , 13]);
                    operation = core.getInput('operation');
                    bundle_source = core.getInput('npmpackage');
                    bundle_manager = new BundleManager_1.BundleManager(bundle_source);
                    _a = operation;
                    switch (_a) {
                        case artifacts_enum_1.OPERATIONS.deploy: return [3 /*break*/, 2];
                        case artifacts_enum_1.OPERATIONS.validateDeploy: return [3 /*break*/, 4];
                        case artifacts_enum_1.OPERATIONS.validate: return [3 /*break*/, 7];
                        case 'default': return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 11];
                case 2: return [4 /*yield*/, OperationsManager_1.OperationManager.DeployArtifacts()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, bundle_manager.invokeBundle()];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, OperationsManager_1.OperationManager.ValidateAndDeploy()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 7: return [4 /*yield*/, bundle_manager.invokeBundle()];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, OperationsManager_1.OperationManager.ValidateArtifacts()];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 10: throw new Error("Operation not supported : " + operation);
                case 11: return [3 /*break*/, 13];
                case 12:
                    err_1 = _b.sent();
                    throw new Error(err_1.message);
                case 13: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
main()
    .then(function () {
    process.exit(0);
})
    .catch(function (err) {
    core.info("Action failed -> " + err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 693:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Orchestrator = void 0;
var artifacts_client_1 = __webpack_require__(355);
var arm_template_utils_1 = __webpack_require__(980);
var artifacts_enum_1 = __webpack_require__(206);
var deploy_utils_1 = __webpack_require__(825);
var logger_1 = __webpack_require__(47);
var service_principal_client_utils_1 = __webpack_require__(937);
var workspace_artifacts_getter_1 = __webpack_require__(818);
var Orchestrator = /** @class */ (function () {
    function Orchestrator(packageFiles, artifactClient, targetWorkspace, environment, deleteArtifactsNotInTemplate, deployMPE) {
        this.packageFiles = packageFiles;
        this.artifactClient = artifactClient;
        this.targetWorkspace = targetWorkspace;
        this.environment = environment;
        this.deleteArtifactsNotInTemplate = deleteArtifactsNotInTemplate;
        this.deployMPE = deployMPE;
    }
    Orchestrator.prototype.orchestrateFromPublishBranch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var packageFilesContent, armTemplateContent, armParameterContent, overrideArmParameters, targetLocation, canDeployMPE, artifactsToDeploy, artifactsInWorkspace, artifactsToDeleteInWorkspace, artifactsToDeleteInWorkspaceInOrder, datalakeSubArtifactsToDelete, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, , 12]);
                        return [4 /*yield*/, this.packageFiles.getPackageFiles()];
                    case 1:
                        packageFilesContent = _a.sent();
                        armTemplateContent = packageFilesContent.templateFileContent;
                        armParameterContent = packageFilesContent.parametersFileContent;
                        overrideArmParameters = packageFilesContent.armOverridesContent;
                        if (!(armTemplateContent && armParameterContent)) {
                            throw new Error('Empty template or parameters file');
                        }
                        return [4 /*yield*/, service_principal_client_utils_1.getWorkspaceLocation(this.artifactClient.getParams(), this.targetWorkspace)];
                    case 2:
                        targetLocation = _a.sent();
                        return [4 /*yield*/, workspace_artifacts_getter_1.SKipManagedPE(this.targetWorkspace, this.environment)];
                    case 3:
                        canDeployMPE = _a.sent();
                        canDeployMPE = !canDeployMPE && this.deployMPE;
                        return [4 /*yield*/, arm_template_utils_1.getArtifacts(armParameterContent, armTemplateContent, overrideArmParameters, this.targetWorkspace, targetLocation)];
                    case 4:
                        artifactsToDeploy = _a.sent();
                        logger_1.SystemLogger.info("Start deploying artifacts from the template.");
                        return [4 /*yield*/, this.deployResourcesInOrder(this.artifactClient, artifactsToDeploy, this.targetWorkspace, this.environment, canDeployMPE)];
                    case 5:
                        _a.sent();
                        logger_1.SystemLogger.info("Completed deploying artifacts from the template.");
                        if (!this.deleteArtifactsNotInTemplate) return [3 /*break*/, 10];
                        // Delete extra artifacts in the workspace
                        logger_1.SystemLogger.info("Attempting to delete artifacts from workspace, that were not in the template.");
                        return [4 /*yield*/, workspace_artifacts_getter_1.getArtifactsFromWorkspace(this.targetWorkspace, this.environment)];
                    case 6:
                        artifactsInWorkspace = _a.sent();
                        logger_1.SystemLogger.info("Found " + artifactsInWorkspace.length + " artifacts in the workspace.");
                        artifactsToDeleteInWorkspace = workspace_artifacts_getter_1.getArtifactsToDeleteFromWorkspace(artifactsInWorkspace, artifactsToDeploy, artifacts_client_1.typeMap);
                        logger_1.SystemLogger.info("Found " + artifactsToDeleteInWorkspace.length + " artifacts in the workspace that many need to be deleted.");
                        artifactsToDeleteInWorkspaceInOrder = workspace_artifacts_getter_1.getArtifactsToDeleteFromWorkspaceInOrder(artifactsToDeleteInWorkspace);
                        return [4 /*yield*/, this.deleteResourcesInOrder(this.artifactClient, artifactsToDeleteInWorkspaceInOrder, this.targetWorkspace, this.environment, armParameterContent)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, workspace_artifacts_getter_1.DatalakeSubArtifactsToDelete(artifactsInWorkspace, artifactsToDeploy, this.targetWorkspace, this.environment)];
                    case 8:
                        datalakeSubArtifactsToDelete = _a.sent();
                        return [4 /*yield*/, this.deleteDatalakeArtifacts(this.artifactClient, datalakeSubArtifactsToDelete, this.targetWorkspace, this.environment)];
                    case 9:
                        _a.sent();
                        logger_1.SystemLogger.info("Completed deleting artifacts from workspace, that were not in the template.");
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        err_1 = _a.sent();
                        throw new Error("Orchestrate failed - " + err_1);
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deployResourcesInOrder = function (artifactClient, artifactsToDeploy, targetWorkspace, environment, canDeployMPE) {
        return __awaiter(this, void 0, void 0, function () {
            var i, batchOfArtifacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < artifactsToDeploy.length)) return [3 /*break*/, 5];
                        batchOfArtifacts = artifactsToDeploy[i];
                        return [4 /*yield*/, this.deployBatch(artifactClient, batchOfArtifacts, targetWorkspace, environment, canDeployMPE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, artifactClient.WaitForAllDeployments(false)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deleteResourcesInOrder = function (artifactClient, artifactsToDelete, targetWorkspace, environment, armParameterContent) {
        return __awaiter(this, void 0, void 0, function () {
            var i, batchOfArtifacts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < artifactsToDelete.length)) return [3 /*break*/, 5];
                        batchOfArtifacts = artifactsToDelete[i];
                        return [4 /*yield*/, this.deleteBatch(artifactClient, batchOfArtifacts, targetWorkspace, environment, armParameterContent)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, artifactClient.WaitForAllDeployments(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.skipDeployment = function (artifactTypeToDeploy) {
        if (artifactTypeToDeploy == artifacts_enum_1.Artifact.sqlpool ||
            artifactTypeToDeploy == artifacts_enum_1.Artifact.bigdatapools ||
            artifactTypeToDeploy == artifacts_enum_1.Artifact.managedvirtualnetworks) {
            return true;
        }
        return false;
    };
    Orchestrator.prototype.deployBatch = function (artifactClient, artifactsToDeploy, targetWorkspace, environment, DeployMPE) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, artifactsToDeploy_1, resource, artifactTypeToDeploy, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, artifactsToDeploy_1 = artifactsToDeploy;
                        _a.label = 1;
                    case 1:
                        if (!(_i < artifactsToDeploy_1.length)) return [3 /*break*/, 6];
                        resource = artifactsToDeploy_1[_i];
                        if (resource.isDefault) {
                            logger_1.SystemLogger.info("Skipping deployment of " + resource.name + " as its a default workspace resource.");
                            return [3 /*break*/, 5];
                        }
                        artifactTypeToDeploy = artifacts_client_1.typeMap.get(resource.type.toLowerCase());
                        if (!resource.content) {
                            logger_1.SystemLogger.info("Empty artifactMap of type : " + resource.type + " skipping deployment");
                            return [3 /*break*/, 5];
                        }
                        logger_1.SystemLogger.info("Deploy " + artifactTypeToDeploy + " " + resource.type);
                        result = void 0;
                        if (!(this.skipDeployment(artifactTypeToDeploy) || (!DeployMPE && artifactTypeToDeploy == artifacts_enum_1.Artifact.managedprivateendpoints))) return [3 /*break*/, 2];
                        // Currently not supporting Sql and spark pools. Skipping
                        //result = await armclient.deploy(resource.content);
                        logger_1.SystemLogger.info("Deployment of type " + artifactTypeToDeploy + " is not currently supported.");
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, artifactClient.deployArtifact(artifactTypeToDeploy, resource, targetWorkspace, environment)];
                    case 3:
                        // Do the artifact deployment
                        result = _a.sent();
                        _a.label = 4;
                    case 4:
                        logger_1.SystemLogger.info("Deployment status : " + result);
                        if (result != deploy_utils_1.DeployStatus.success) {
                            throw new Error("For Artifact " + resource.name + ": Failure in deployment: " + result);
                        }
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deleteBatch = function (artifactClient, artifactsToDelete, targetWorkspace, environment, armParameterContent) {
        return __awaiter(this, void 0, void 0, function () {
            var error, _i, artifactsToDelete_1, resource, artifactTypeToDelete, result, deletionStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = "";
                        _i = 0, artifactsToDelete_1 = artifactsToDelete;
                        _a.label = 1;
                    case 1:
                        if (!(_i < artifactsToDelete_1.length)) return [3 /*break*/, 4];
                        resource = artifactsToDelete_1[_i];
                        if (resource.isDefault) {
                            logger_1.SystemLogger.info("Skipping deletion of " + resource.name + " as its a default workspace resource.");
                            return [3 /*break*/, 3];
                        }
                        artifactTypeToDelete = artifacts_client_1.typeMap.get(resource.type.toLowerCase());
                        logger_1.SystemLogger.info("Deleting " + resource.name + " of type " + artifactTypeToDelete);
                        if (artifactTypeToDelete == artifacts_enum_1.Artifact.sqlpool ||
                            artifactTypeToDelete == artifacts_enum_1.Artifact.bigdatapools ||
                            artifactTypeToDelete == artifacts_enum_1.Artifact.managedvirtualnetworks) {
                            // Skip this.
                            return [3 /*break*/, 3];
                        }
                        return [4 /*yield*/, artifactClient.deleteArtifact(artifactTypeToDelete, resource, targetWorkspace, environment)];
                    case 2:
                        // Do the artifact deletion
                        result = _a.sent();
                        logger_1.SystemLogger.info("Deletion status : " + result);
                        deletionStatus = {
                            key: resource.type.toLowerCase(),
                            value: "Deployment status : " + result
                        };
                        if (result != deploy_utils_1.DeployStatus.success) {
                            // If deletion is not a success, its ok. we move forward.
                            logger_1.SystemLogger.info("Failure in deployment: " + result);
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Orchestrator.prototype.deleteDatalakeArtifacts = function (artifactClient, resources, workspace, environment) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, resources_1, resource, response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        _i = 0, resources_1 = resources;
                        _a.label = 1;
                    case 1:
                        if (!(_i < resources_1.length)) return [3 /*break*/, 4];
                        resource = resources_1[_i];
                        return [4 /*yield*/, artifactClient.deleteDatalakeChildren(resource, workspace, environment)];
                    case 2:
                        response = _a.sent();
                        if (response != deploy_utils_1.DeployStatus.success) {
                            throw new Error("Artifact deletion failed : " + resource);
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log("Deletion successful of tables and relationships in database.");
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        throw new Error("Database deletion failed : " + err_2);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Orchestrator;
}());
exports.Orchestrator = Orchestrator;
//# sourceMappingURL=orchestrator.js.map

/***/ }),

/***/ 806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackageFile = void 0;
var PackageFile = /** @class */ (function () {
    function PackageFile(templateFile, parametersFile, armOverrides) {
        this.fs = __webpack_require__(896);
        this.packageFiles = {
            templateFile: templateFile,
            parametersFile: parametersFile,
            armOverrides: armOverrides
        };
    }
    PackageFile.prototype.getPackageFiles = function () {
        var parametersFileContent = this.getPackageFileContent(this.packageFiles.parametersFile);
        var templateFileContent = this.getPackageFileContent(this.packageFiles.templateFile);
        var armOverridesContent = this.getPackageFileContent(this.packageFiles.armOverrides, true);
        return {
            templateFileContent: templateFileContent,
            parametersFileContent: parametersFileContent,
            armOverridesContent: armOverridesContent
        };
    };
    PackageFile.prototype.getPackageFileContent = function (filePath, returnBlank) {
        if (returnBlank === void 0) { returnBlank = false; }
        if (!this.fs.existsSync(filePath)) {
            if (returnBlank) {
                return "";
            }
        }
        var fileContent = "";
        if (!this.fs.lstatSync(filePath).isDirectory()) {
            try {
                fileContent = this.fs.readFileSync(filePath, 'utf8');
            }
            catch (error) {
                throw new Error("Failed to read file" + filePath);
            }
        }
        else {
            throw new Error("Input file path instead of directory");
        }
        return fileContent;
    };
    return PackageFile;
}());
exports.PackageFile = PackageFile;
//# sourceMappingURL=package_file.js.map

/***/ }),

/***/ 980:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDependentsFromArtifact = exports.checkIfArtifactExists = exports.checkIfNameExists = exports.getArtifactsFromArmTemplate = exports.replaceStrByRegex = exports.findDefaultArtifacts = exports.replaceDoubleQuoteCode = exports.replaceBackSlashCode = exports.createArmTemplate = exports.getArtifacts = void 0;
var yaml = __importStar(__webpack_require__(89));
var uuid_1 = __webpack_require__(903);
var logger_1 = __webpack_require__(47);
var common_utils_1 = __webpack_require__(456);
var artifacts_enum_1 = __webpack_require__(206);
// Just 2 random Guids to replace backslash in parameters file.
var backslash = "7FD5C49AB6444AC1ACCD56B689067FBBAD85B74B0D8943CA887371839DFECF85";
var quote = "48C16896271D483C916DE1C4EC6F24DBC945F900F9AB464B828EC8005364D322";
var doublequote = "4467B65E39AA40998907771187C9B539847A7E801C5E4F0E9513C1D6154BC816";
function getArtifacts(armParams, armTemplate, overrideArmParameters, targetWorkspaceName, targetLocation) {
    return __awaiter(this, void 0, void 0, function () {
        var defaultArtifacts;
        return __generator(this, function (_a) {
            armTemplate = createArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
            defaultArtifacts = findDefaultArtifacts(armTemplate, targetWorkspaceName);
            armTemplate = JSON.stringify(JSON.parse(armTemplate));
            return [2 /*return*/, getArtifactsFromArmTemplate(armTemplate, targetLocation, defaultArtifacts)];
        });
    });
}
exports.getArtifacts = getArtifacts;
function createArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName) {
    armParams = replaceBackSlash(armParams);
    overrideArmParameters = replaceBackSlash(overrideArmParameters);
    armTemplate = replaceParameters(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
    armTemplate = replaceVariables(armTemplate);
    armTemplate = replaceStrByRegex(armTemplate);
    return armTemplate;
}
exports.createArmTemplate = createArmTemplate;
function replaceBackSlashCode(inputString) {
    if (inputString == null) {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf(quote) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(quote))
            + "\\\""
            + outputString.substr(outputString.indexOf(quote) + quote.length);
    }
    while (outputString.indexOf(backslash) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(backslash))
            + "\\"
            + outputString.substr(outputString.indexOf(backslash) + backslash.length);
    }
    return outputString;
}
exports.replaceBackSlashCode = replaceBackSlashCode;
function replaceBackSlash(inputString) {
    if (inputString == null || inputString == "") {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf("\\\"") >= 0) {
        outputString = outputString.substr(0, outputString.indexOf("\\\"")) + quote + outputString.substr(outputString.indexOf("\\\"") + 2);
    }
    while (outputString.indexOf("\\") >= 0) {
        outputString = outputString.substr(0, outputString.indexOf("\\")) + backslash + outputString.substr(outputString.indexOf("\\") + 1);
    }
    return outputString;
}
function replaceDoubleQuoteCode(inputString) {
    if (inputString == null) {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf(doublequote) >= 0) {
        outputString = outputString.substr(0, outputString.indexOf(doublequote))
            + "\""
            + outputString.substr(outputString.indexOf(doublequote) + doublequote.length);
    }
    return outputString;
}
exports.replaceDoubleQuoteCode = replaceDoubleQuoteCode;
function replaceDoubleQuote(inputString) {
    if (inputString == null || inputString == "") {
        return "";
    }
    var outputString = inputString;
    while (outputString.indexOf("\"") >= 0) {
        outputString = outputString.substr(0, outputString.indexOf("\"")) +
            doublequote +
            outputString.substr(outputString.indexOf("\"") + 1);
    }
    return outputString;
}
function findDefaultArtifacts(armTemplate, targetworkspace) {
    var defaultArtifacts = new Map();
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    for (var value in jsonArmTemplateParams.resources) {
        var artifactJson = jsonArmTemplateParams.resources[value];
        var artifactName = artifactJson.name;
        if (common_utils_1.isDefaultArtifact(JSON.stringify(artifactJson))) {
            if (artifactName.indexOf("/") > 0) {
                //example `${targetworkspace}/sourceworkspace-WorkspaceDefaultStorage`;
                var lastIndexOfslash = artifactName.lastIndexOf("/");
                var nametoreplace = artifactName.substr(lastIndexOfslash + 1);
                // Extract source workspace name
                var defaultArtifactName = '';
                for (var i = 0; i < common_utils_1.DefaultArtifact.DefaultArtifacts.length; i++) {
                    var name_1 = common_utils_1.DefaultArtifact.DefaultArtifacts[i];
                    if (nametoreplace.toLowerCase().includes(name_1.name.toLowerCase())) {
                        defaultArtifactName = nametoreplace.substring(nametoreplace.toLowerCase().indexOf(name_1.name.toLowerCase()));
                        break;
                    }
                }
                var replacedName = defaultArtifactName == "WorkspaceSystemIdentity" ? defaultArtifactName : targetworkspace + "-" + defaultArtifactName;
                if (nametoreplace == replacedName) {
                    // source and target workspace are same.
                    continue;
                }
                defaultArtifacts.set(nametoreplace, replacedName);
            }
        }
    }
    return defaultArtifacts;
}
exports.findDefaultArtifacts = findDefaultArtifacts;
function replaceParameters(armParams, armTemplate, overrideArmParameters, targetWorkspaceName) {
    logger_1.SystemLogger.info("Begin replacement of parameters in the template");
    // Build parameters
    var armParamValues = getParameterValuesFromArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName);
    armParamValues.forEach(function (value, key) {
        value = value.toString();
        if (value.indexOf("parameters") > -1) {
            armParamValues.forEach(function (valueInside, keyInside) {
                if (value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split('[' + keyInside + ']').join("'" + valueInside + "'"));
                }
                if (value.indexOf(keyInside) > -1) {
                    armParamValues.set(key, value.split(keyInside).join("'" + valueInside + "'"));
                }
            });
        }
    });
    armParamValues.forEach(function (value, key) {
        value = value.toString();
        if (value.indexOf("concat") > -1) {
            armParamValues.set(key, replaceStrByRegex(value));
        }
    });
    // Replace parameterValues
    armParamValues.forEach(function (value, key) {
        if (isJsonValue(replaceDoubleQuoteCode(value))) {
            armTemplate = armTemplate.split("\"[" + key + "]\"").join("" + replaceDoubleQuoteCode(value));
        }
        else {
            armTemplate = armTemplate.split("\"[" + key + "]\"").join("\"" + replaceDoubleQuoteCode(value) + "\"");
        }
        armTemplate = armTemplate.split(key).join("'" + replaceDoubleQuoteCode(value) + "'");
    });
    logger_1.SystemLogger.info("Complete replacement of parameters in the template");
    return armTemplate;
}
function isJsonValue(testString) {
    try {
        JSON.parse(testString);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function replaceVariables(armTemplate) {
    // Build variables
    logger_1.SystemLogger.info("Begin replacement of variables in the template");
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    var armVariableValues = new Map();
    for (var value in jsonArmTemplateParams.variables) {
        var variableValue = jsonArmTemplateParams.variables[value];
        variableValue = replaceStrByRegex(variableValue);
        armVariableValues.set("variables('" + value + "')", variableValue);
    }
    // Replace variables
    armVariableValues.forEach(function (value, key) {
        armTemplate = armTemplate.split(key).join("" + value);
    });
    logger_1.SystemLogger.info("Complete replacement of variables in the template");
    return armTemplate;
}
/*
    This function will replace variables like [concat('Microsoft.Synapse/workspaces/', 'workspaceName')]
    and convert it into [Microsoft.Synapse/workspaces/workspaceName]
 */
function replaceStrByRegex(str) {
    var regexOutside = /\[concat\((.*?)\)\]/g;
    var resultOutside = str.replace(regexOutside, function (matchedStr, strOutside) {
        var result = "";
        var resultArgs = strOutside.split(",");
        resultArgs.forEach(function (arg) {
            var fragment = arg.trim();
            if (fragment.endsWith("'")) {
                fragment = fragment.substring(1, fragment.length - 1);
            }
            result += fragment;
        });
        return result;
    });
    return resultOutside;
}
exports.replaceStrByRegex = replaceStrByRegex;
function getParameterValuesFromArmTemplate(armParams, armTemplate, overrideArmParameters, targetWorkspaceName) {
    // Parse the parameters and keep a map of these values
    var jsonArmParams = JSON.parse(armParams);
    var armParamValues = new Map();
    for (var value in jsonArmParams.parameters) {
        armParamValues.set("parameters('" + value + "')", replaceDoubleQuote(sanitize(JSON.stringify(jsonArmParams.parameters[value].value))));
    }
    // Convert arm template to json, look at the default parameters if any and add missing ones to the map we have
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    var armTemplateParamValues = new Map();
    for (var value in jsonArmTemplateParams.parameters) {
        armTemplateParamValues.set("parameters('" + value + "')", replaceDoubleQuote(JSON.stringify(jsonArmTemplateParams.parameters[value].defaultValue)));
    }
    armTemplateParamValues.forEach(function (value, key) {
        if (!armParamValues.has(key)) {
            armParamValues.set("parameters('" + key + "')", value);
        }
    });
    // add the target workspace name
    armParamValues.set("parameters('workspaceName')", targetWorkspaceName);
    // Add any overrides.-key1 value1 -key2 value2 -key3 value3
    // Checking length to be > 2 for someone to specify name value, space in between etc. just to be on safe side.
    if (overrideArmParameters != null && overrideArmParameters.length > 2) {
        var cnt = 1;
        if (overrideArmParameters.startsWith('-')) {
            while (overrideArmParameters.length > 0 && overrideArmParameters.indexOf('-') > -1 && overrideArmParameters.indexOf(' ') > -1 && cnt < 1000) {
                cnt = cnt + 1;
                var startIndex = overrideArmParameters.indexOf('-') + '-'.length;
                var endIndex = overrideArmParameters.indexOf(' ');
                var paramName = overrideArmParameters.substring(startIndex, endIndex).trim();
                overrideArmParameters = overrideArmParameters.substring(endIndex);
                startIndex = overrideArmParameters.indexOf(' ') + ' '.length;
                endIndex = overrideArmParameters.indexOf(' -', startIndex);
                if (endIndex == -1) {
                    endIndex = overrideArmParameters.length;
                }
                var paramValue = sanitize(overrideArmParameters.substring(startIndex, endIndex).trim());
                armParamValues.set("parameters('" + paramName + "')", paramValue);
                overrideArmParameters = overrideArmParameters.substring(endIndex).trim();
            }
        }
        // Means user has give a yaml as input
        else {
            var overrides = yaml.load(overrideArmParameters);
            var overridesObj = JSON.parse(JSON.stringify(overrides));
            for (var key in overridesObj) {
                var paramValue = JSON.stringify(overridesObj[key]);
                armParamValues.set("parameters('" + key + "')", sanitize(paramValue));
            }
        }
    }
    return armParamValues;
}
function sanitize(paramValue) {
    if ((paramValue.startsWith("\"") && paramValue.endsWith("\"")) ||
        (paramValue.startsWith("'") && paramValue.endsWith("'"))) {
        paramValue = paramValue.substr(1, paramValue.length - 2);
    }
    return paramValue;
}
function removeWorkspaceNameFromResourceName(resourceName) {
    while (resourceName.indexOf("/") >= 0) {
        resourceName = resourceName.substring(resourceName.indexOf("/") + 1);
    }
    return resourceName;
}
function skipArtifactDeployment(artifactType) {
    if (artifacts_enum_1.DataFactoryType.sqlpool == artifactType || artifacts_enum_1.DataFactoryType.bigdatapools == artifactType || artifacts_enum_1.DataFactoryType.managedVirtualNetworks == artifactType) {
        return true;
    }
    return false;
}
function getArtifactsFromArmTemplate(armTemplate, targetLocation, defaultArtifacts) {
    logger_1.SystemLogger.info("Begin getting Artifacts From Template");
    //now get the resources out:
    var jsonArmTemplateParams = JSON.parse(armTemplate);
    var artifacts = new Array();
    var _loop_1 = function (value) {
        var artifactJson = jsonArmTemplateParams.resources[value];
        var artifactType = artifactJson.type;
        if (skipArtifactDeployment(artifactType)) {
            return "continue";
        }
        if (artifactType.toLowerCase().indexOf("sparkjobdefinition") > -1) {
            var fileLocation = artifactJson['properties']['jobProperties']['file'];
            if (!fileLocation) {
                throw new Error("File is missing in spark job defination ");
            }
        }
        artifactJson.name = removeWorkspaceNameFromResourceName(artifactJson.name);
        var _loop_2 = function (i) {
            var dependancyName = artifactJson.dependsOn[i];
            defaultArtifacts.forEach(function (value, key) {
                if (dependancyName.indexOf(key) > -1 &&
                    dependancyName.indexOf("linkedServices") > -1) {
                    artifactJson.dependsOn[i] = artifactJson.dependsOn[i].replace(key, value);
                }
            });
        };
        for (var i = 0; i < artifactJson.dependsOn.length; i++) {
            _loop_2(i);
        }
        var artifactProperties = artifactJson.properties;
        if (artifactProperties != null) {
            var linkedServiceName = artifactProperties.linkedServiceName;
            if (linkedServiceName != null) {
                var referenceName_1 = linkedServiceName.referenceName;
                if (referenceName_1 != null) {
                    defaultArtifacts.forEach(function (value, key) {
                        if (referenceName_1.indexOf(key) > -1) {
                            artifactJson.properties.linkedServiceName.referenceName = artifactJson.properties.linkedServiceName.referenceName.replace(key, value);
                        }
                    });
                }
            }
        }
        for (var artifactJsonValue in artifactJson.properties) {
            if (artifactJsonValue != "typeProperties" ||
                JSON.stringify(artifactJson.properties.typeProperties).indexOf("LinkedServiceReference") == -1) {
                continue;
            }
            for (var artifactJsonTypeProperties in artifactJson.properties.typeProperties) {
                if (JSON.stringify(artifactJson.properties.typeProperties["" + artifactJsonTypeProperties]).indexOf("LinkedServiceReference") == -1) {
                    continue;
                }
                var artifactJsonTypePropertiesJson = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties];
                for (var artifactJsonTypePropertiesValues in artifactJsonTypePropertiesJson) {
                    var artifactJsonTypePropertiesValueslinkedService = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService;
                    if (artifactJsonTypePropertiesValueslinkedService == null) {
                        continue;
                    }
                    var artifactJsonTypePropertiesValueslinkedServiceType = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.type;
                    if (artifactJsonTypePropertiesValueslinkedServiceType == null) {
                        continue;
                    }
                    if (artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.type
                        == "LinkedServiceReference") {
                        defaultArtifacts.forEach(function (value, key) {
                            if (artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.referenceName.indexOf(key) > -1) {
                                artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.referenceName
                                    = artifactJson.properties.typeProperties["" + artifactJsonTypeProperties][artifactJsonTypePropertiesValues].linkedService.referenceName.replace(key, value);
                            }
                        });
                    }
                }
            }
        }
        var artifactJsonContent = JSON.stringify(artifactJson);
        defaultArtifacts.forEach(function (value, key) {
            var refName = "\"referenceName\":\"" + key + "\"";
            var refNameReplacement = "\"referenceName\":\"" + value + "\"";
            while (artifactJsonContent.indexOf(refName) > -1) {
                artifactJsonContent = artifactJsonContent.replace(refName, refNameReplacement);
            }
        });
        var resource = {
            type: artifactType,
            isDefault: false,
            content: artifactJsonContent,
            name: artifactJson.name,
            dependson: getDependentsFromArtifact(artifactJsonContent)
        };
        if (artifactType.toLowerCase().indexOf("notebook") > -1) {
            if (!artifactJson.name) {
                resource.content = convertIpynb2Payload(artifactJson);
            }
        }
        logger_1.SystemLogger.info("Found Artifact of type " + artifactType);
        if (common_utils_1.isDefaultArtifact(JSON.stringify(artifactJson))) {
            resource.isDefault = true;
            defaultArtifacts.forEach(function (value, key) {
                resource.name = resource.name.replace(key, value);
            });
            logger_1.SystemLogger.info("\tWill be skipped as its a default resource.");
        }
        if (!checkIfArtifactExists(resource, artifacts)) {
            artifacts.push(resource);
        }
    };
    for (var value in jsonArmTemplateParams.resources) {
        _loop_1(value);
    }
    return createDependancyTree(artifacts);
}
exports.getArtifactsFromArmTemplate = getArtifactsFromArmTemplate;
function createDependancyTree(artifacts) {
    var artifactsOrdered = new Array();
    var artifactsBatches = new Array();
    var artifactBatch = new Array();
    var iteration = 0;
    for (var i = 0; i < artifacts.length; i++) {
        //Replace backslash with \
        artifacts[i].content = replaceDoubleQuoteCode(replaceBackSlashCode(artifacts[i].content));
        artifacts[i].name = replaceDoubleQuoteCode(replaceBackSlashCode(artifacts[i].name));
        for (var j = 0; j < artifacts[i].dependson.length; j++) {
            artifacts[i].dependson[j] = replaceDoubleQuoteCode(replaceBackSlashCode(artifacts[i].dependson[j]));
        }
    }
    // This is the max times, we will go through the artifacts to look for dependancies. So this is the max level of dependancies supported.
    var MAX_ITERATIONS = 500;
    var MAX_PARALLEL_ARTIFACTS = 20;
    while (artifactsOrdered.length < artifacts.length && iteration < MAX_ITERATIONS) {
        iteration++;
        if (artifactBatch.length > 0) {
            artifactsBatches.push(artifactBatch);
            artifactBatch = new Array();
        }
        var _loop_3 = function () {
            if (checkIfArtifactExists(artifacts[res], artifactsOrdered)) {
                return "continue";
            }
            var dependancies = artifacts[res].dependson;
            if (dependancies.length == 0) {
                // Adding to the ordered list as this artifact has no dependancies.
                artifactsOrdered.push(artifacts[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array();
                }
                artifactBatch.push(artifacts[res]);
                return "continue";
            }
            var allDependencyMet = true;
            dependancies.forEach(function (dep) {
                if (!checkIfNameExists(dep, artifactsOrdered)) {
                    allDependencyMet = false;
                }
            });
            if (allDependencyMet) {
                // Adding to the ordered list as all dependencies are already in the list
                artifactsOrdered.push(artifacts[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array();
                }
                artifactBatch.push(artifacts[res]);
            }
        };
        for (var res = 0; res < artifacts.length; res++) {
            _loop_3();
        }
        logger_1.SystemLogger.info("Iteration " + iteration + " Figured out deployment order for " + artifactsOrdered.length + " / " + artifacts.length + " Artifacts for Dependencies.");
    }
    if (artifactBatch.length > 0) {
        artifactsBatches.push(artifactBatch);
    }
    if (iteration == MAX_ITERATIONS) {
        logger_1.SystemLogger.info("Could not figure out full dependancy model for these artifacts. Check template for correctness.");
        logger_1.SystemLogger.info("-----------------------------------------------------------------------------------------------");
        for (var res = 0; res < artifacts.length; res++) {
            if (!checkIfArtifactExists(artifacts[res], artifactsOrdered)) {
                // So this artifact's dependancy could not be verified.
                logger_1.SystemLogger.info("Name: " + artifacts[res].name + ", Type: " + artifacts[res].type);
                var dependancies = artifacts[res].dependson;
                dependancies.forEach(function (dep) {
                    if (!checkIfNameExists(dep, artifactsOrdered)) {
                        logger_1.SystemLogger.info("    Dependency Not found: " + dep);
                    }
                });
            }
        }
        logger_1.SystemLogger.info("-----------------------------------------------------------------------------------------------");
        throw new Error("Could not figure out full dependancy model. Some dependancies may not exist in template.");
    }
    logger_1.SystemLogger.info("Complete getting Artifacts From Template");
    return artifactsBatches;
}
function convertIpynb2Payload(payloadObj) {
    logger_1.SystemLogger.info('Converting payload');
    var payload = {
        "name": uuid_1.v4(),
        "properties": {
            "nbformat": 4,
            "nbformat_minor": 2,
            "bigDataPool": {
                "referenceName": "testProd5",
                "type": "BigDataPoolReference"
            },
            "sessionProperties": {
                "driverMemory": "28g",
                "driverCores": 4,
                "executorMemory": "28g",
                "executorCores": 4,
                "numExecutors": 2
            },
            "metadata": payloadObj['metadata'],
            "cells": payloadObj['cells']
        }
    };
    return JSON.stringify(payload);
}
// Checks if the name provided is part of the artifacts list already in some form.
function checkIfNameExists(nameToCheck, selectedListOfResources) {
    if (nameToCheck.indexOf("/") != 0) {
        nameToCheck = "/" + nameToCheck;
    }
    if (nameToCheck.toLowerCase().indexOf("/managedvirtualnetworks/") > -1 ||
        nameToCheck.toLowerCase().indexOf("/sqlpools/") > -1 ||
        nameToCheck.toLowerCase().indexOf("/bigdatapools/") > -1 ||
        nameToCheck.toLowerCase().indexOf("/managedprivateendpoints/") > -1) {
        return true;
    }
    for (var res = 0; res < selectedListOfResources.length; res++) {
        var resource = selectedListOfResources[res];
        var resName = resource.name;
        var restype = resource.type;
        if (restype.indexOf("Microsoft.Synapse/workspaces/") > -1) {
            restype = restype.substr("Microsoft.Synapse/workspaces/".length);
        }
        // Check if name is same / the last part of the name including workspace etc.
        if (resName.toLowerCase() == nameToCheck.toLowerCase() ||
            (nameToCheck.toLowerCase().indexOf('/' + restype.toLowerCase() + '/' + resName.toLowerCase()) != -1 &&
                nameToCheck.toLowerCase().indexOf('/' + restype.toLowerCase() + '/' + resName.toLowerCase()) + restype.length + resName.length == nameToCheck.length - 2)) {
            return true;
        }
    }
    return false;
}
exports.checkIfNameExists = checkIfNameExists;
function checkIfArtifactExists(resourceToCheck, selectedListOfResources) {
    for (var res = 0; res < selectedListOfResources.length; res++) {
        var resource = selectedListOfResources[res];
        if (resource.name == resourceToCheck.name && resource.type == resourceToCheck.type) {
            return true;
        }
    }
    return false;
}
exports.checkIfArtifactExists = checkIfArtifactExists;
// Gets the list of artifacts this artifact depends on.
function getDependentsFromArtifact(artifactContent) {
    var dependants = new Array();
    var artifact = JSON.parse(artifactContent);
    if (artifactContent.indexOf("dependsOn") > -1 && artifact["dependsOn"] != null) {
        artifact["dependsOn"].forEach(function (x) {
            dependants.push(x);
        });
    }
    return dependants;
}
exports.getDependentsFromArtifact = getDependentsFromArtifact;
//# sourceMappingURL=arm_template_utils.js.map

/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportConstants = exports.OPERATIONS = exports.DEFAULT_ARTIFACTS_TYPE = exports.DEFAULT_ARTIFACTS = exports.DataFactoryType = exports.Artifact = void 0;
var Artifact;
(function (Artifact) {
    Artifact["notebook"] = "notebook";
    Artifact["sparkjobdefinition"] = "sparkJobDefinition";
    Artifact["sqlscript"] = "sqlScript";
    Artifact["dataset"] = "dataset";
    Artifact["pipeline"] = "pipeline";
    Artifact["trigger"] = "trigger";
    Artifact["dataflow"] = "dataflow";
    Artifact["linkedservice"] = "linkedService";
    Artifact["integrationruntime"] = "integrationRuntime";
    Artifact["credential"] = "credential";
    Artifact["sqlpool"] = "sqlpool";
    Artifact["bigdatapools"] = "bigdatapools";
    Artifact["managedvirtualnetworks"] = "managedVirtualNetworks";
    Artifact["managedprivateendpoints"] = "managedPrivateEndpoints";
    Artifact["kqlScript"] = "kqlScript";
    Artifact["database"] = "database";
    Artifact["sparkconfiguration"] = "sparkConfiguration";
})(Artifact = exports.Artifact || (exports.Artifact = {}));
var DataFactoryType;
(function (DataFactoryType) {
    DataFactoryType["dataset"] = "Microsoft.Synapse/workspaces/datasets";
    DataFactoryType["dataflow"] = "Microsoft.Synapse/workspaces/dataflows";
    DataFactoryType["linkedservice"] = "Microsoft.Synapse/workspaces/linkedServices";
    DataFactoryType["credential"] = "Microsoft.Synapse/workspaces/credentials";
    DataFactoryType["integrationruntime"] = "Microsoft.Synapse/workspaces/integrationRuntimes";
    DataFactoryType["notebook"] = "Microsoft.Synapse/workspaces/notebooks";
    DataFactoryType["pipeline"] = "Microsoft.Synapse/workspaces/pipelines";
    DataFactoryType["sparkjobdefinition"] = "Microsoft.Synapse/workspaces/sparkJobDefinitions";
    DataFactoryType["bigdatapools"] = "Microsoft.Synapse/workspaces/bigDataPools";
    DataFactoryType["sqlscript"] = "Microsoft.Synapse/workspaces/sqlscripts";
    DataFactoryType["trigger"] = "Microsoft.Synapse/workspaces/triggers";
    DataFactoryType["sqlpool"] = "Microsoft.Synapse/workspaces/sqlPools";
    DataFactoryType["managedVirtualNetworks"] = "Microsoft.Synapse/workspaces/managedVirtualNetworks";
    DataFactoryType["managedPrivateEndpoints"] = "Microsoft.Synapse/workspaces/managedVirtualNetworks/managedPrivateEndpoints";
    DataFactoryType["kqlScript"] = "Microsoft.Synapse/workspaces/kqlscripts";
    DataFactoryType["database"] = "Microsoft.Synapse/workspaces/databases";
    DataFactoryType["sparkconfiguration"] = "Microsoft.Synapse/workspaces/sparkConfigurations";
})(DataFactoryType = exports.DataFactoryType || (exports.DataFactoryType = {}));
var DEFAULT_ARTIFACTS;
(function (DEFAULT_ARTIFACTS) {
    DEFAULT_ARTIFACTS["sqlserver"] = "workspacedefaultsqlserver";
    DEFAULT_ARTIFACTS["storage"] = "workspacedefaultstorage";
    DEFAULT_ARTIFACTS["credentials"] = "workspacesystemidentity";
})(DEFAULT_ARTIFACTS = exports.DEFAULT_ARTIFACTS || (exports.DEFAULT_ARTIFACTS = {}));
var DEFAULT_ARTIFACTS_TYPE;
(function (DEFAULT_ARTIFACTS_TYPE) {
    DEFAULT_ARTIFACTS_TYPE["sqlserver"] = "AzureSqlDW";
    DEFAULT_ARTIFACTS_TYPE["storage"] = "AzureBlobFS";
    DEFAULT_ARTIFACTS_TYPE["credentials"] = "ManagedIdentity";
})(DEFAULT_ARTIFACTS_TYPE = exports.DEFAULT_ARTIFACTS_TYPE || (exports.DEFAULT_ARTIFACTS_TYPE = {}));
var OPERATIONS;
(function (OPERATIONS) {
    OPERATIONS["deploy"] = "deploy";
    OPERATIONS["validate"] = "validate";
    OPERATIONS["export"] = "export";
    OPERATIONS["validateDeploy"] = "validateDeploy";
})(OPERATIONS = exports.OPERATIONS || (exports.OPERATIONS = {}));
var ExportConstants;
(function (ExportConstants) {
    ExportConstants["destinationFolder"] = "ExportedArtifacts";
    ExportConstants["templateFile"] = "TemplateForWorkspace.json";
    ExportConstants["parameterFile"] = "TemplateParametersForWorkspace.json";
})(ExportConstants = exports.ExportConstants || (exports.ExportConstants = {}));
//# sourceMappingURL=artifacts_enum.js.map

/***/ }),

/***/ 456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultArtifact = exports.isDefaultArtifact = exports.isStrNullOrEmpty = void 0;
var artifacts_enum_1 = __webpack_require__(206);
function isStrNullOrEmpty(val) {
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
}
exports.isStrNullOrEmpty = isStrNullOrEmpty;
function isDefaultArtifact(artifact) {
    var artifactJson = JSON.parse(artifact);
    if (artifactJson.type == artifacts_enum_1.DataFactoryType.managedPrivateEndpoints)
        return DefaultArtifact.DefaultArtifacts.some(function (e) { return e.matches(artifactJson.name, artifactJson.properties.groupId, artifactJson.type); });
    return DefaultArtifact.DefaultArtifacts.some(function (e) { return e.matches(artifactJson.name, artifactJson.properties.type, artifactJson.type); });
}
exports.isDefaultArtifact = isDefaultArtifact;
var DefaultArtifact = /** @class */ (function () {
    function DefaultArtifact(name, type, dataFactoryType) {
        this.name = name;
        this.type = type;
        this.dataFactoryType = dataFactoryType;
    }
    DefaultArtifact.prototype.matches = function (name, type, dataFactoryType) {
        return name.toLowerCase().includes(this.name.toLowerCase())
            && type.toLowerCase() === this.type.toLowerCase()
            && dataFactoryType.toLowerCase() === this.dataFactoryType.toLowerCase();
    };
    DefaultArtifact.DefaultArtifacts = [
        new DefaultArtifact("workspacedefaultsqlserver", "azuresqldw", artifacts_enum_1.DataFactoryType.linkedservice),
        new DefaultArtifact("workspacedefaultstorage", "azureblobfs", artifacts_enum_1.DataFactoryType.linkedservice),
        new DefaultArtifact("workspacesystemidentity", "managedidentity", artifacts_enum_1.DataFactoryType.credential),
        new DefaultArtifact("synapse-ws-sql", "sql", artifacts_enum_1.DataFactoryType.managedPrivateEndpoints),
        new DefaultArtifact("synapse-ws-sqlOnDemand", "sqlOnDemand", artifacts_enum_1.DataFactoryType.managedPrivateEndpoints),
        new DefaultArtifact("synapse-ws-kusto", "Kusto", artifacts_enum_1.DataFactoryType.managedPrivateEndpoints),
    ];
    return DefaultArtifact;
}());
exports.DefaultArtifact = DefaultArtifact;
//# sourceMappingURL=common_utils.js.map

/***/ }),

/***/ 825:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRmEndpointUrl = exports.getAdEndpointUrl = exports.getRMUrl = exports.getParams = exports.Env = exports.DeployStatus = void 0;
var core = __importStar(__webpack_require__(659));
var service_principal_client_utils_1 = __webpack_require__(937);
var DeployStatus;
(function (DeployStatus) {
    DeployStatus["success"] = "Success";
    DeployStatus["failed"] = "Failed";
    DeployStatus["skipped"] = "Skipped";
})(DeployStatus = exports.DeployStatus || (exports.DeployStatus = {}));
var Env;
(function (Env) {
    Env["prod"] = "Azure Public";
    Env["mooncake"] = "Azure China";
    Env["usnat"] = "Azure US Government";
})(Env = exports.Env || (exports.Env = {}));
function getParams(dataplane, env) {
    if (dataplane === void 0) { dataplane = false; }
    if (env === void 0) { env = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var env_1, resourceGroup, clientId, clientSecret, subscriptionId, tenantId, managedIdentity, activeDirectoryEndpointUrl, resourceManagerEndpointUrl, bearer, params, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    try {
                        env_1 = core.getInput('Environment');
                        resourceGroup = core.getInput("resourceGroup");
                        clientId = core.getInput("clientId");
                        clientSecret = core.getInput("clientSecret");
                        subscriptionId = core.getInput("subscriptionId");
                        tenantId = core.getInput("tenantId");
                        managedIdentity = core.getInput("managedIdentity");
                        activeDirectoryEndpointUrl = getAdEndpointUrl(env_1);
                        resourceManagerEndpointUrl = getRmEndpointUrl(env_1);
                    }
                    catch (err) {
                        throw new Error("Unable to parse the secret: " + err);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!dataplane) return [3 /*break*/, 3];
                    return [4 /*yield*/, getRMUrl(env)];
                case 2:
                    resourceManagerEndpointUrl = _a.sent();
                    _a.label = 3;
                case 3:
                    bearer = void 0;
                    if (!(managedIdentity == 'true')) return [3 /*break*/, 5];
                    return [4 /*yield*/, service_principal_client_utils_1.getManagedIdentityBearer(resourceManagerEndpointUrl)];
                case 4:
                    bearer = _a.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, service_principal_client_utils_1.getBearer(clientId, clientSecret, subscriptionId, tenantId, resourceManagerEndpointUrl, activeDirectoryEndpointUrl)];
                case 6:
                    bearer = _a.sent();
                    _a.label = 7;
                case 7:
                    params = {
                        'clientId': clientId,
                        'clientSecret': clientSecret,
                        'subscriptionId': subscriptionId,
                        'tenantId': tenantId,
                        'managedIdentity': managedIdentity,
                        'activeDirectoryEndpointUrl': activeDirectoryEndpointUrl,
                        'resourceManagerEndpointUrl': resourceManagerEndpointUrl,
                        'bearer': bearer,
                        'resourceGroup': resourceGroup
                    };
                    return [2 /*return*/, params];
                case 8:
                    err_1 = _a.sent();
                    throw new Error("Failed to fetch Bearer: " + err_1);
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.getParams = getParams;
function getRMUrl(env) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (env) {
                case Env.prod.toString():
                    return [2 /*return*/, "https://dev.azuresynapse.net"];
                case Env.mooncake.toString():
                    return [2 /*return*/, "https://dev.azuresynapse.azure.cn"];
                case Env.usnat.toString():
                    return [2 /*return*/, "https://dev.azuresynapse.usgovcloudapi.net"];
                default:
                    throw new Error('Environment validation failed');
            }
            return [2 /*return*/];
        });
    });
}
exports.getRMUrl = getRMUrl;
function getAdEndpointUrl(env) {
    switch (env) {
        case Env.prod.toString():
            return "https://login.microsoftonline.com/";
        case Env.mooncake.toString():
            return "https://login.chinacloudapi.cn/";
        case Env.usnat.toString():
            return "https://login.microsoftonline.us/";
        default:
            throw new Error('Environment validation failed');
    }
}
exports.getAdEndpointUrl = getAdEndpointUrl;
function getRmEndpointUrl(env) {
    switch (env) {
        case Env.prod.toString():
            return "https://management.azure.com/";
        case Env.mooncake.toString():
            return "https://management.chinacloudapi.cn/";
        case Env.usnat.toString():
            return "https://management.usgovcloudapi.net/";
        default:
            throw new Error('Environment validation failed');
    }
}
exports.getRmEndpointUrl = getRmEndpointUrl;
//# sourceMappingURL=deploy_utils.js.map

/***/ }),

/***/ 47:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemLogger = exports.ActionLogger = void 0;
var core = __importStar(__webpack_require__(659));
var SystemLogger = /** @class */ (function () {
    function SystemLogger() {
    }
    SystemLogger.setLogger = function (logger) {
        SystemLogger.logger = logger;
    };
    SystemLogger.info = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.info(message);
        return message;
    };
    SystemLogger.warn = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.warn(message);
        return message;
    };
    SystemLogger.error = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.error(message);
        return message;
    };
    SystemLogger.debug = function (message) {
        var _a;
        (_a = SystemLogger.logger) === null || _a === void 0 ? void 0 : _a.debug(message);
        return message;
    };
    SystemLogger.logger = undefined;
    return SystemLogger;
}());
exports.SystemLogger = SystemLogger;
var ActionLogger = /** @class */ (function () {
    function ActionLogger(debugEnabled) {
        this.debugEnabled = debugEnabled;
    }
    ActionLogger.prototype.info = function (message) {
        core.info(message);
        return message;
    };
    ActionLogger.prototype.warn = function (message) {
        core.warning(message);
        return message;
    };
    ActionLogger.prototype.error = function (message) {
        core.error(message);
        return message;
    };
    ActionLogger.prototype.debug = function (message) {
        if (this.debugEnabled) {
            core.debug(message);
        }
        return message;
    };
    return ActionLogger;
}());
exports.ActionLogger = ActionLogger;
;
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 937:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWorkspaceLocation = exports.getManagedIdentityBearer = exports.getBearer = void 0;
var httpClient = __importStar(__webpack_require__(727));
var deploy_utils_1 = __webpack_require__(825);
var logger_1 = __webpack_require__(47);
var userAgent = 'synapse-github-cicd-deploy-task';
var requestOptions = {};
var client = new httpClient.HttpClient(userAgent, undefined, requestOptions);
function getBearer(clientId, clientSecret, subscriptionId, tenantId, resourceManagerEndpointUrl, activeDirectoryEndpointUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var url = "" + activeDirectoryEndpointUrl + tenantId + "/oauth2/token";
                        var headers = {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        };
                        var requestBody = "client_id=" + clientId + "&client_secret=" + clientSecret + "&resource=" + encodeURIComponent(resourceManagerEndpointUrl) + "&subscription_id=" + subscriptionId + "&grant_type=client_credentials";
                        client.post(url, requestBody, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, error, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (!(resStatus != 200 && resStatus != 201 && resStatus != 202)) return [3 /*break*/, 2];
                                        logger_1.SystemLogger.info("Unable to fetch service principal token, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        error = _a.sent();
                                        logger_1.SystemLogger.info(error);
                                        return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                    case 2:
                                        logger_1.SystemLogger.info("Able to fetch service principal token: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 3:
                                        body = _a.sent();
                                        return [2 /*return*/, resolve(JSON.parse(body)["access_token"])];
                                }
                            });
                        }); });
                    })];
            }
            catch (err) {
                throw new Error("Unable to fetch the service principal token: " + err.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getBearer = getBearer;
function getManagedIdentityBearer(resourceManagerEndpointUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var url = "http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=" + resourceManagerEndpointUrl;
                        var headers = {
                            'Metadata': 'true'
                        };
                        client.get(url, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, error, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (!(resStatus != 200 && resStatus != 201 && resStatus != 202)) return [3 /*break*/, 2];
                                        logger_1.SystemLogger.info("Unable to fetch managed identity bearer token, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        error = _a.sent();
                                        logger_1.SystemLogger.info(error);
                                        return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                    case 2:
                                        logger_1.SystemLogger.info("Able to fetch managed identity bearer token: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 3:
                                        body = _a.sent();
                                        return [2 /*return*/, resolve(JSON.parse(body)["access_token"])];
                                }
                            });
                        }); });
                    })];
            }
            catch (err) {
                throw new Error("Unable to fetch the managed identity bearer token: " + err.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getManagedIdentityBearer = getManagedIdentityBearer;
function getWorkspaceLocation(params, targetWorkspace) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var resourceManagerEndpointUrl = params.resourceManagerEndpointUrl;
                        var subscriptionId = params.subscriptionId;
                        var resourceGroup = params.resourceGroup;
                        var headers = {
                            'Authorization': 'Bearer ' + params.bearer
                        };
                        var url = resourceManagerEndpointUrl + "subscriptions/" + subscriptionId + "/" +
                            ("resourceGroups/" + resourceGroup + "/providers/Microsoft.Synapse/workspaces/") +
                            (targetWorkspace + "?api-version=2019-06-01-preview");
                        client.get(url, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                            logger_1.SystemLogger.info("Unable to fetch location of workspace, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                            return [2 /*return*/, reject(deploy_utils_1.DeployStatus.failed)];
                                        }
                                        logger_1.SystemLogger.info("Able to fetch location of workspace: " + resStatus + "; status message: " + res.message.statusMessage);
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        body = _a.sent();
                                        return [2 /*return*/, resolve(JSON.parse(body)['location'])];
                                }
                            });
                        }); });
                    })];
            }
            catch (err) {
                throw new Error("Unable to fetch the location of the workspace: " + err.message);
            }
            return [2 /*return*/];
        });
    });
}
exports.getWorkspaceLocation = getWorkspaceLocation;
//# sourceMappingURL=service_principal_client_utils.js.map

/***/ }),

/***/ 818:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SKipManagedPE = exports.getDependentsFromArtifactFromWorkspace = exports.getArtifactsToDeleteFromWorkspaceInOrder = exports.DatalakeSubArtifactsToDelete = exports.getArtifactsToDeleteFromWorkspace = exports.getArtifactsFromWorkspace = exports.getArtifactsFromWorkspaceOfType = void 0;
var artifacts_client_1 = __webpack_require__(355);
var deployUtils = __importStar(__webpack_require__(825));
var httpClient = __importStar(__webpack_require__(727));
var arm_template_utils_1 = __webpack_require__(980);
var artifacts_enum_1 = __webpack_require__(206);
var logger_1 = __webpack_require__(47);
var common_utils_1 = __webpack_require__(456);
var userAgent = 'synapse-github-cicd-deploy-task';
var requestOptions = {};
var client = new httpClient.HttpClient(userAgent, undefined, requestOptions);
var artifactTypesToQuery = [
    artifacts_enum_1.Artifact.credential,
    artifacts_enum_1.Artifact.dataflow,
    artifacts_enum_1.Artifact.dataset,
    artifacts_enum_1.Artifact.integrationruntime,
    artifacts_enum_1.Artifact.linkedservice,
    artifacts_enum_1.Artifact.notebook,
    artifacts_enum_1.Artifact.pipeline,
    artifacts_enum_1.Artifact.sparkjobdefinition,
    artifacts_enum_1.Artifact.sqlscript,
    artifacts_enum_1.Artifact.trigger,
    artifacts_enum_1.Artifact.managedprivateendpoints,
    artifacts_enum_1.Artifact.database,
    artifacts_enum_1.Artifact.kqlScript,
    artifacts_enum_1.Artifact.sparkconfiguration
];
function getArtifactsFromWorkspaceOfType(artifactTypeToQuery, targetWorkspaceName, environment) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var params, token, headers, artifacts, resourceUrl, moreResult, resp, resourcesString, resourcesJson, list, _i, list_1, artifactJson, artifactJsonContent, artifactName, type, resource;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, deployUtils.getParams(true, environment)];
                case 1:
                    params = _d.sent();
                    token = params.bearer;
                    headers = {
                        'Authorization': "Bearer " + token,
                        'Content-Type': 'application/json',
                        'User-Agent': userAgent
                    };
                    artifacts = new Array();
                    resourceUrl = getResourceFromWorkspaceUrl(targetWorkspaceName, environment, artifactTypeToQuery.toString());
                    moreResult = true;
                    _d.label = 2;
                case 2:
                    if (!moreResult) return [3 /*break*/, 4];
                    resp = new Promise(function (resolve, reject) {
                        client.get(resourceUrl, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (resStatus != 200 && resStatus != 201 && resStatus != 202) {
                                            logger_1.SystemLogger.info("Failed to fetch workspace info, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                            return [2 /*return*/, reject("Failed to fetch workspace info " + res.message.statusMessage)];
                                        }
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        body = _a.sent();
                                        if (!body) {
                                            logger_1.SystemLogger.info("No response body for url: " + resourceUrl);
                                            return [2 /*return*/, reject("Failed to fetch workspace info response")];
                                        }
                                        return [2 /*return*/, resolve(body)];
                                }
                            });
                        }); }, function (reason) {
                            logger_1.SystemLogger.info('Failed to fetch artifacts from workspace: ' + reason);
                            return reject(deployUtils.DeployStatus.failed);
                        });
                    });
                    return [4 /*yield*/, resp];
                case 3:
                    resourcesString = _d.sent();
                    resourcesJson = JSON.parse(resourcesString);
                    list = (_a = resourcesJson.value) !== null && _a !== void 0 ? _a : resourcesJson === null || resourcesJson === void 0 ? void 0 : resourcesJson.items;
                    moreResult = false;
                    for (_i = 0, list_1 = list; _i < list_1.length; _i++) {
                        artifactJson = list_1[_i];
                        artifactJsonContent = JSON.stringify(artifactJson);
                        artifactName = (_b = artifactJson.name) !== null && _b !== void 0 ? _b : artifactJson.Name;
                        type = (_c = artifactJson.type) !== null && _c !== void 0 ? _c : ((artifactJson.EntityType === 'DATABASE') ? artifacts_enum_1.DataFactoryType.database : artifactJson.EntityType);
                        if (type == artifacts_enum_1.DataFactoryType.database && SkipDatabase(artifactJsonContent))
                            continue;
                        resource = {
                            type: type,
                            isDefault: false,
                            content: artifactJsonContent,
                            name: artifactName,
                            dependson: getDependentsFromArtifactFromWorkspace(artifactJsonContent)
                        };
                        if (type !== artifacts_enum_1.DataFactoryType.database && common_utils_1.isDefaultArtifact(artifactJsonContent)) {
                            resource.isDefault = true;
                        }
                        artifacts.push(resource);
                        if (resourcesJson.hasOwnProperty("nextLink")) {
                            resourceUrl = resourcesJson.nextLink;
                            moreResult = true;
                        }
                        if (type == artifacts_enum_1.DataFactoryType.database && resourcesJson.hasOwnProperty("continuationToken")) {
                            resourceUrl = resourcesJson.ContinuationToken;
                            moreResult = true;
                        }
                    }
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/, artifacts];
            }
        });
    });
}
exports.getArtifactsFromWorkspaceOfType = getArtifactsFromWorkspaceOfType;
function getArtifactsFromWorkspace(targetWorkspaceName, environment) {
    return __awaiter(this, void 0, void 0, function () {
        var artifacts, x, _a, artifactsOfType;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger_1.SystemLogger.info("Getting Artifacts from workspace: " + targetWorkspaceName + ".");
                    artifacts = new Array();
                    x = 0;
                    _b.label = 1;
                case 1:
                    if (!(x < artifactTypesToQuery.length)) return [3 /*break*/, 6];
                    _a = artifactTypesToQuery[x] == artifacts_enum_1.Artifact.managedprivateendpoints;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, SKipManagedPE(targetWorkspaceName, environment)];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    if (_a)
                        return [3 /*break*/, 5];
                    return [4 /*yield*/, getArtifactsFromWorkspaceOfType(artifactTypesToQuery[x], targetWorkspaceName, environment)];
                case 4:
                    artifactsOfType = _b.sent();
                    artifactsOfType.forEach(function (value) {
                        artifacts.push(value);
                    });
                    _b.label = 5;
                case 5:
                    x++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, artifacts];
            }
        });
    });
}
exports.getArtifactsFromWorkspace = getArtifactsFromWorkspace;
function getArtifactsToDeleteFromWorkspace(artifactsInWorkspace, artifactsToDeploy, typeMap) {
    logger_1.SystemLogger.info("Getting Artifacts which should be deleted from workspace.");
    var artifactsToDelete = new Array();
    var resourceFound = true;
    artifactsInWorkspace.forEach(function (checkResource) {
        resourceFound = false;
        var checkResourceType = checkResource.type;
        checkResourceType = checkResourceType.replace(" ", "");
        checkResourceType = checkResourceType.toLowerCase();
        var artifactTypeToDeploy = typeMap.get(checkResourceType);
        if (artifactTypeToDeploy != artifacts_enum_1.Artifact.sqlpool &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.bigdatapools &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.managedvirtualnetworks &&
            artifactTypeToDeploy != artifacts_enum_1.Artifact.integrationruntime &&
            checkResource.isDefault != true) {
            for (var i = 0; i < artifactsToDeploy.length; i++) {
                for (var j = 0; j < artifactsToDeploy[i].length; j++) {
                    var resouce = artifactsToDeploy[i][j];
                    if (resouce.name.toLowerCase() == checkResource.name.toLowerCase() &&
                        resouce.type.toLowerCase() == checkResource.type.toLowerCase()) {
                        resourceFound = true;
                        break;
                    }
                }
                if (resourceFound) {
                    break;
                }
            }
            if (!resourceFound) {
                logger_1.SystemLogger.info("Artifact not found in template. deleting " + checkResource.name + " of type " + checkResource.type);
                artifactsToDelete.push(checkResource);
            }
        }
    });
    return artifactsToDelete;
}
exports.getArtifactsToDeleteFromWorkspace = getArtifactsToDeleteFromWorkspace;
function DatalakeSubArtifactsToDelete(artifactsInWorkspace, artifactsToDeploy, targetWorkspaceName, environment) {
    return __awaiter(this, void 0, void 0, function () {
        var artifactsToDelete, databases, databaseWithChildren, tables, relation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    artifactsToDelete = new Array();
                    return [4 /*yield*/, getArtifactsFromWorkspaceOfType(artifacts_enum_1.Artifact.database, targetWorkspaceName, environment)];
                case 1:
                    databases = _a.sent();
                    return [4 /*yield*/, GetDatabasesWithChildren(databases, targetWorkspaceName, environment)];
                case 2:
                    databaseWithChildren = _a.sent();
                    tables = new Array();
                    relation = new Array();
                    databaseWithChildren.forEach(function (wsArtifact) {
                        var dbFound = false;
                        outer: for (var i = 0; i < artifactsToDeploy.length; i++) {
                            for (var j = 0; j < artifactsToDeploy[i].length; j++) {
                                var resource = artifactsToDeploy[i][j];
                                var templateResourceObj = JSON.parse(resource.content);
                                // Same Database both in template and workspace.
                                // Now check if there are any missing tables/relationships.
                                if (resource.name.toLowerCase() == wsArtifact.name.toLowerCase() &&
                                    resource.type.toLowerCase() == artifacts_enum_1.DataFactoryType.database.toLowerCase()) {
                                    dbFound = true;
                                    for (var _i = 0, _a = wsArtifact.children; _i < _a.length; _i++) {
                                        var wsDdl = _a[_i];
                                        var dbSubResourceFound = false;
                                        for (var _b = 0, _c = templateResourceObj['properties']['Ddls']; _b < _c.length; _b++) {
                                            var templateDdl = _c[_b];
                                            if (wsDdl.name == templateDdl["NewEntity"]["Name"]) {
                                                dbSubResourceFound = true;
                                                break;
                                            }
                                        }
                                        if (!dbSubResourceFound) {
                                            if (wsDdl.type.toLowerCase() == 'table') {
                                                var path = "databases/" + wsArtifact.name + "/tables/" + wsDdl.name;
                                                tables.push(path);
                                            }
                                            if (wsDdl.type.toLowerCase() == 'relationship') {
                                                var path = "databases/" + wsArtifact.name + "/relationships/" + wsDdl.name;
                                                relation.push(path);
                                            }
                                        }
                                    }
                                }
                                if (dbFound) {
                                    break outer;
                                }
                            }
                        }
                    });
                    artifactsToDelete = artifactsToDelete.concat(relation);
                    artifactsToDelete = artifactsToDelete.concat(tables);
                    console.log("Found " + artifactsToDelete.length + " lake database tables/relationships to delete.");
                    return [2 /*return*/, artifactsToDelete];
            }
        });
    });
}
exports.DatalakeSubArtifactsToDelete = DatalakeSubArtifactsToDelete;
function countOfArtifactDependancy(checkArtifact, selectedListOfResources) {
    var result = 0;
    for (var res = 0; res < selectedListOfResources.length; res++) {
        var resource = selectedListOfResources[res];
        var resName = checkArtifact.name;
        var restype = checkArtifact.type;
        if (restype.indexOf("Microsoft.Synapse/workspaces/") > -1) {
            restype = restype.substr("Microsoft.Synapse/workspaces/".length);
        }
        var nameToCheck = restype.substring(0, restype.length - 1) + "Reference/" + resName;
        nameToCheck = nameToCheck.toLowerCase();
        for (var i = 0; i < resource.dependson.length; i++) {
            if (resource.dependson[i].toLowerCase() == nameToCheck) {
                result++;
                break;
            }
        }
    }
    return result;
}
function getArtifactsToDeleteFromWorkspaceInOrder(artifactsToDelete) {
    logger_1.SystemLogger.info("Computing dependancies for Artifacts which should be deleted from workspace.");
    var artifactsBatches = new Array();
    var artifactBatch = new Array();
    var artifactsOrdered = new Array();
    // This will be a diff logic than the deploy one. We only need to check dependancy within the list.
    // If A is a dependency for B, C when B is in this list and C is not. We will delete A and then B.
    // This is the max times, we will go through the artifacts to look for dependancies. So this is the max level of dependancies supported.
    var MAX_ITERATIONS = 500;
    var MAX_PARALLEL_ARTIFACTS = 20;
    var count = 0;
    var iteration = 0;
    while (count < artifactsToDelete.length && iteration < MAX_ITERATIONS) {
        iteration++;
        if (artifactBatch.length > 0) {
            artifactsBatches.push(artifactBatch);
            artifactBatch = new Array();
        }
        for (var res = 0; res < artifactsToDelete.length; res++) {
            if (arm_template_utils_1.checkIfArtifactExists(artifactsToDelete[res], artifactsOrdered)) {
                // So this artifact is already added to the ordered list. Skip.
                continue;
            }
            var allDependencyMet = false;
            // check if, in all other artifacts being deleted, something depends on this artifact
            //its ok if not at all or if it is in artifactsOrdered, but not in artifactBatch
            var dependencyInArtifactsToDelete = countOfArtifactDependancy(artifactsToDelete[res], artifactsToDelete);
            var dependencyInArtifactsOrdered = countOfArtifactDependancy(artifactsToDelete[res], artifactsOrdered);
            var dependancyInCurrentBatch = countOfArtifactDependancy(artifactsToDelete[res], artifactBatch);
            if (dependencyInArtifactsToDelete == 0) {
                //nothing in the delete list depends on it
                allDependencyMet = true;
            }
            else if (dependancyInCurrentBatch == 0 && dependencyInArtifactsOrdered == dependencyInArtifactsToDelete) {
                allDependencyMet = true;
            }
            if (allDependencyMet) {
                // Adding to the ordered list as all dependancies are already in the list
                artifactsOrdered.push(artifactsToDelete[res]);
                if (artifactBatch.length >= MAX_PARALLEL_ARTIFACTS) {
                    artifactsBatches.push(artifactBatch);
                    artifactBatch = new Array();
                }
                artifactBatch.push(artifactsToDelete[res]);
            }
        }
        logger_1.SystemLogger.info("Iteration " + iteration + " Figured out deletion order for " + artifactsOrdered.length + " / " + artifactsToDelete.length + " Artifacts for Dependancies.");
        count = artifactsOrdered.length;
    }
    if (artifactBatch.length > 0) {
        artifactsBatches.push(artifactBatch);
    }
    if (iteration == MAX_ITERATIONS) {
        logger_1.SystemLogger.info("Could not figure out full dependancy model for these artifact for delete. Check template and target workspace for correctness.");
        logger_1.SystemLogger.info("-----------------------------------------------------------------------------------------------");
        for (var res = 0; res < artifactsToDelete.length; res++) {
            if (!arm_template_utils_1.checkIfArtifactExists(artifactsToDelete[res], artifactsOrdered)) {
                // So this artifact's dependancy could not be verified.
                logger_1.SystemLogger.info("Name: " + artifactsToDelete[res].name + ", Type: " + artifactsToDelete[res].type);
            }
        }
        throw new Error("Could not figure out full dependancy model for deleting artifacts not in template. For the list above, check the template to see which artifacts depends on them.");
    }
    return artifactsBatches;
}
exports.getArtifactsToDeleteFromWorkspaceInOrder = getArtifactsToDeleteFromWorkspaceInOrder;
function getResourceFromWorkspaceUrl(targetWorkspaceName, environment, resourceType) {
    var url = artifacts_client_1.ArtifactClient.getUrlByEnvironment(targetWorkspaceName, environment);
    if (resourceType == artifacts_enum_1.Artifact.managedprivateendpoints) {
        url = url + '/' + artifacts_enum_1.Artifact.managedvirtualnetworks + '/default';
        url = url + "/" + resourceType + "?api-version=2019-06-01-preview";
    }
    else
        url = url + "/" + resourceType + "s?api-version=2019-06-01-preview";
    return url;
}
// Gets the list of artifacts this artifact depends on.
function getDependentsFromArtifactFromWorkspace(artifactContent) {
    var dependants = new Array();
    crawlArtifacts(JSON.parse(artifactContent), dependants, "referenceName");
    return dependants;
}
exports.getDependentsFromArtifactFromWorkspace = getDependentsFromArtifactFromWorkspace;
function crawlArtifacts(artifactContent, dependants, key) {
    if (!artifactContent || typeof artifactContent !== "object") {
        return false;
    }
    var keys = Object.keys(artifactContent);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
            // @ts-ignore
            var depType = artifactContent["type"];
            // @ts-ignore
            var depName = artifactContent["referenceName"];
            dependants.push(depType + "/" + depName);
        }
        // @ts-ignore
        var path = crawlArtifacts(artifactContent[keys[i]], dependants, key);
        if (path) {
            return true;
        }
    }
    return false;
}
function SKipManagedPE(targetWorkspaceName, environment) {
    return __awaiter(this, void 0, void 0, function () {
        var params, token, headers, resourceUrl, resp;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deployUtils.getParams(true, environment)];
                case 1:
                    params = _a.sent();
                    token = params.bearer;
                    headers = {
                        'Authorization': "Bearer " + token,
                        'Content-Type': 'application/json',
                        'User-Agent': userAgent
                    };
                    resourceUrl = getResourceFromWorkspaceUrl(targetWorkspaceName, environment, artifacts_enum_1.Artifact.managedprivateendpoints);
                    resp = new Promise(function (resolve, reject) {
                        client.get(resourceUrl, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var resStatus, body;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        resStatus = res.message.statusCode;
                                        if (!(resStatus != 200 && resStatus != 201 && resStatus != 202)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, res.readBody()];
                                    case 1:
                                        body = _a.sent();
                                        if (body.includes("does not have a managed virtual network associated"))
                                            return [2 /*return*/, resolve(true)];
                                        _a.label = 2;
                                    case 2: return [2 /*return*/, resolve(false)];
                                }
                            });
                        }); });
                    });
                    return [2 /*return*/, resp];
            }
        });
    });
}
exports.SKipManagedPE = SKipManagedPE;
function SkipDatabase(artifactJsonContent) {
    var artifactJson = JSON.parse(artifactJsonContent);
    if (artifactJson != null &&
        artifactJson["Origin"] != null &&
        artifactJson["Origin"]["Type"].toLowerCase() == "SPARK".toLowerCase() &&
        artifactJson["Properties"] != null &&
        artifactJson["Properties"]["IsSyMSCDMDatabase"] != null &&
        artifactJson["Properties"]["IsSyMSCDMDatabase"].toString().toLowerCase() == "true") {
        return false;
    }
    return true;
}
function GetDatabasesWithChildren(databases, targetWorkspaceName, environment) {
    return __awaiter(this, void 0, void 0, function () {
        var databasesWithChildren, _loop_1, _i, databases_1, db, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    databasesWithChildren = new Array();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    _loop_1 = function (db) {
                        var children, _loop_2, _b, _c, action, dbWithChildren;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    console.log("Fetching details of database: " + db.name);
                                    children = new Array();
                                    _loop_2 = function (action) {
                                        var requestURI, fetchMore, params, token, headers;
                                        return __generator(this, function (_e) {
                                            switch (_e.label) {
                                                case 0:
                                                    requestURI = getResourceFromWorkspaceUrl(targetWorkspaceName, environment, "databases/" + db.name + "/" + action);
                                                    fetchMore = true;
                                                    _e.label = 1;
                                                case 1:
                                                    if (!fetchMore) return [3 /*break*/, 4];
                                                    fetchMore = false;
                                                    return [4 /*yield*/, deployUtils.getParams(true, environment)];
                                                case 2:
                                                    params = _e.sent();
                                                    token = params.bearer;
                                                    headers = {
                                                        'Authorization': "Bearer " + token,
                                                        'Content-Type': 'application/json',
                                                        'User-Agent': userAgent
                                                    };
                                                    return [4 /*yield*/, client.get(requestURI, headers).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                                            var resStatus, body_1, body, childrenObj, _i, childrenObj_1, child, childObj, bodyObj;
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        resStatus = res.message.statusCode;
                                                                        if (!(resStatus != 200 && resStatus != 201 && resStatus != 202)) return [3 /*break*/, 2];
                                                                        console.info("Failed to fetch database " + db.name + " info, status: " + resStatus + "; status message: " + res.message.statusMessage);
                                                                        return [4 /*yield*/, res.readBody()];
                                                                    case 1:
                                                                        body_1 = _a.sent();
                                                                        throw new Error("Failed to fetch database info :" + body_1);
                                                                    case 2: return [4 /*yield*/, res.readBody()];
                                                                    case 3:
                                                                        body = _a.sent();
                                                                        childrenObj = JSON.parse(body)["items"];
                                                                        for (_i = 0, childrenObj_1 = childrenObj; _i < childrenObj_1.length; _i++) {
                                                                            child = childrenObj_1[_i];
                                                                            childObj = {
                                                                                name: child["Name"],
                                                                                type: action
                                                                            };
                                                                            children.push(childObj);
                                                                        }
                                                                        bodyObj = JSON.parse(body);
                                                                        if (bodyObj.hasOwnProperty('continuationToken')) {
                                                                            requestURI = bodyObj['continuationToken'];
                                                                            fetchMore = true;
                                                                        }
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); })];
                                                case 3:
                                                    _e.sent();
                                                    return [3 /*break*/, 1];
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    };
                                    _b = 0, _c = ['relationship', 'table'];
                                    _d.label = 1;
                                case 1:
                                    if (!(_b < _c.length)) return [3 /*break*/, 4];
                                    action = _c[_b];
                                    return [5 /*yield**/, _loop_2(action)];
                                case 2:
                                    _d.sent();
                                    _d.label = 3;
                                case 3:
                                    _b++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    dbWithChildren = {
                                        name: db.name,
                                        children: children
                                    };
                                    databasesWithChildren.push(dbWithChildren);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, databases_1 = databases;
                    _a.label = 2;
                case 2:
                    if (!(_i < databases_1.length)) return [3 /*break*/, 5];
                    db = databases_1[_i];
                    return [5 /*yield**/, _loop_1(db)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, databasesWithChildren];
                case 6:
                    err_1 = _a.sent();
                    throw new Error(err_1);
                case 7: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=workspace_artifacts_getter.js.map

/***/ }),

/***/ 659:
/***/ ((module) => {

module.exports = require("@actions/core");

/***/ }),

/***/ 89:
/***/ ((module) => {

module.exports = require("js-yaml");

/***/ }),

/***/ 683:
/***/ ((module) => {

module.exports = require("q");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("typed-rest-client/HttpClient");

/***/ }),

/***/ 903:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 317:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 896:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(564);
/******/ 	
/******/ })()
;