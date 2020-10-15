import { DateTime } from 'luxon';

export const getTimeStr = () => DateTime.local().toLocaleString({ hour: 'numeric', minute: 'numeric', hour12: false });

export default getTimeStr;
