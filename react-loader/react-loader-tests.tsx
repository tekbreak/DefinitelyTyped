// react-holder test

///<reference path="react-loader.d.ts"/>
///<reference path="../react/react.d.ts"/>

import * as React from "react";
import Holder from "react-loader";

export class ReactLoaderTest extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <Loader
                    position="relative"
                    top="200px"
                    />
            </div>
        );
    }
}
