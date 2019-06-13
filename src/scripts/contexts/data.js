// @Flow
import * as React from 'react';

const wordsContext = React.createContext({
    data: {lessons: [], words: []},
    // eslint-disable-next-line no-invalid-this
    setData: x=>x
});

export default wordsContext;
