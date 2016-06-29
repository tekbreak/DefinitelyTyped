// Type definitions for react-loader 2.4.0
// Project: https://github.com/quickleft/react-loader
// Definitions by: Borja Espildora <https://github.com/tekbreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

declare module "react-loader" {
    import Loader = ReactLoader.Loader;
    export = Loader;
}

declare var Loader: typeof ReactLoader.Loader;

declare namespace ReactLoader {
    import React = __React;

    interface Props extends React.Props<Loader> {
        lines?: number, // 13
        length?: number, // 20,
        width?: number, // 10,
        radius?: number, // 30,
        corners?: number, // 1,
        rotate?: number, // 0,
        direction?: number, // 1,
        color?: string, // ,
        speed?: number, // 1,
        trail?: number, // 60,
        shadow?: boolean, // false,
        hwaccel?: boolean, // false,
        zIndex?: number, // 2e9,
        top?: string, // '50%',
        left?: string, // '50%',
        position?: string,
        scale?: number, // 1.00
        className?: string,
        loaded?: boolean,
        loadedClassName?: string,
        parentClassName?: string
    }

    class Loader extends React.Component<Props, {}> {
    }

    namespace Loader {
    }
}
