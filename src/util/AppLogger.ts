class AppLogger {
    static log(message?: any, ...optionalParams: any[]) {
        if (process.env.NODE_ENV == 'development') {
            console.log(message, optionalParams)
        }
    }
    static info(message?: any, ...optionalParams: any[]) {
        if (process.env.NODE_ENV == 'development') {
            console.info(message,optionalParams)
        }
    }
    static warn(message?: any, ...optionalParams: any[]) {
        if (process.env.NODE_ENV == 'development') {
            console.warn(message,optionalParams)
        }
    }
    static error(message?: any, ...optionalParams: any[]) {
        if (process.env.NODE_ENV == 'development') {
            console.error(message,optionalParams)
        }
    }
  
}
export default AppLogger