const InvalidInvocationsError = function (reason) {
    this.name = 'InvalidInvocationsError';
    this.message = `Invalid Invocation: '${ reason }'`;
    this.stack = (new Error()).stack;

    this.reason = reason;
};
InvalidInvocationsError.prototype = Object.create(Error.prototype);
InvalidInvocationsError.constructor = InvalidInvocationsError;

export default InvalidInvocationsError;
