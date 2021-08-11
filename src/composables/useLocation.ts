/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: check type
const useLocation = ():Promise<any> => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

export default useLocation;
