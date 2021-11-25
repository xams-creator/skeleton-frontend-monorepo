import * as React from 'react';
import Dusk from '@xams-framework/dusk';
import { YES, NO } from '@skeleton-frontend/common';


const app = new Dusk({
    container: '#root',
    render({ route }) {
        return (
            <>
                <div>{YES}</div>
                <div>{NO}</div>
            </>
        );
    },
});

app.startup();
