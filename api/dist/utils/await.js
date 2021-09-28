"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wait(defer) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, defer);
    });
}
exports.default = wait;
//# sourceMappingURL=await.js.map