import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { ReduxStore } from '../../Redux/types';

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
