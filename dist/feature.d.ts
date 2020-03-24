interface Feature {
    depencencies: Feature[];
    attrs: {
        [attr: string]: any;
    };
}
declare let Features: {
    [name: string]: Feature;
};
