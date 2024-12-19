function logged(value: any, { kind, name }: any) {
    if (kind === "method") {
        return function (this: any, ...args: any) {
            console.log(`starting ${name} with arguments ${args.join(", ")}`);
            const ret = value.call(this, ...args);
            console.log(`ending ${name}`);
            return ret;
        };
    }
}
class C {
    @logged
    m(arg: any) {
        console.log(arg);
     }
}

new C().m(1);
