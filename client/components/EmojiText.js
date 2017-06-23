import React from 'react';
import mojiTranslate from 'moji-translate';

export default ({comment}) => <div>{mojiTranslate.translate(comment.body)}</div>;
